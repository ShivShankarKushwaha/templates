// A Bloom filter is a probabilistic data structure that is used to test whether an element is a member of a set.
// It is highly space-efficient but allows for a small probability of false positives.
// This means that it can tell you if an element is definitely not in the set or might be in the set.


import crypto from 'node:crypto';
import { BloomFilterType, CountingBloomFilter } from './types';

class BloomFilter implements BloomFilterType {
	filters: CountingBloomFilter[];
	hashCount: number;
	growthFactor: number;
	falsePositiveRate: number;
	elementsAdded: number;
	size: number;
	constructor(initialSize = 1000, hashCount = 3, growthFactor = 2, falsePositiveRate = 0.01) {
		this.filters = [this.createCountingBloomFilter(initialSize, hashCount)];
		this.hashCount = hashCount;
		this.growthFactor = growthFactor;
		this.falsePositiveRate = falsePositiveRate;
		this.elementsAdded = 0;
		this.size = initialSize;
	}

	// Creates a counting Bloom filter instead of a simple one
	createCountingBloomFilter(size: number, hashCount: number): CountingBloomFilter {
		return {
			size,
			hashCount,
			countArray: new Array(size).fill(0),
			hash: (value, seed) => {
				const hmac = crypto.createHmac('sha256', Buffer.from(seed.toString()));
				hmac.update(value);
				return parseInt(hmac.digest('hex').slice(0, 8), 16) % size;
			}
		};
	}

	add(value: string) {
		const filter = this.filters[this.filters.length - 1];

		for (let i = 0; i < filter.hashCount; i++) {
			const hash = filter.hash(value, i);
			filter.countArray[hash] += 1;
		}

		this.elementsAdded++;

		// Expand if the number of elements exceeds current filter capacity
		if (this.elementsAdded > this.size) {
			this.expandFilter();
		}
	}

	contains(value: string) {
		return this.filters.some((filter) => {
			for (let i = 0; i < filter.hashCount; i++) {
				const hash = filter.hash(value, i);
				if (filter.countArray[hash] === 0) return false;
			}
			return true;
		});
	}

	remove(value: string) {
		this.filters.forEach((filter) => {
			for (let i = 0; i < filter.hashCount; i++) {
				const hash = filter.hash(value, i);
				if (filter.countArray[hash] > 0) {
					filter.countArray[hash] -= 1;
				}
			}
		});
	}

	expandFilter() {
		const newSize = this.size * this.growthFactor;
		this.filters.push(this.createCountingBloomFilter(newSize, this.hashCount));
		this.size = newSize;
	}
}

export default BloomFilter;
