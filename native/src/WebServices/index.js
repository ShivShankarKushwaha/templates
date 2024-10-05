import axios from 'axios';
import config from './config';

export async function ApiRequest(endUrl, header, method, body) {
  // Create an instance of axios with the base URL
  const instance = axios.create({baseURL: config.BASE_URL});

  try {
    // Make the API request based on the method (GET, POST, PUT, DELETE, etc.)
    const response = await instance({
      method: method,
      url: endUrl,
      headers: header,
      data: body,
    });

    // Return the response data
    return response;
  } catch (error) {
    // If an error occurs, handle it
    throw error;
  }
}
