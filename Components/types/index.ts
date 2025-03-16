export type HashFunction = (value: string, seed: number) => number;

export interface CountingBloomFilter {
	size: number;
	hashCount: number;
	countArray: number[];
	hash: HashFunction;
}

export interface BloomFilterType {
	filters: CountingBloomFilter[];
	hashCount: number;
	growthFactor: number;
	falsePositiveRate: number;
	elementsAdded: number;
	size: number;

	createCountingBloomFilter(size: number, hashCount: number): CountingBloomFilter;
	add(value: string): void;
	contains(value: string): boolean;
	remove(value: string): void;
	expandFilter(): void;
}
