import axios, { type AxiosRequestConfig } from 'axios';
import { PUBLIC_SERVER_URL } from '$env/static/public';

const axiosInstance = axios.create({
	baseURL: PUBLIC_SERVER_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json'
	}
});

const handleRequest = async (config: AxiosRequestConfig) => {
	try {
		const response = await axiosInstance({ ...config, ...axiosInstance.defaults.headers });
		return response;
	} catch (error) {
		console.error('API request failed:', error);
		throw error;
	}
};

export const getFetch = (url: string, headers?: object) => handleRequest({ method: 'GET', url, headers });

export const postFetch = (url: string, data?: object, headers?: object) => handleRequest({ method: 'POST', url, data, headers });

export const putFetch = (url: string, data?: object, headers?: object) => handleRequest({ method: 'PUT', url, data, headers });

export const patchFetch = (url: string, data?: object, headers?: object) => handleRequest({ method: 'PATCH', url, data, headers });

export const deleteFetch = (url: string, headers?: object) => handleRequest({ method: 'DELETE', url, headers });
