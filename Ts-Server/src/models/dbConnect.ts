import mongoose from 'mongoose';
import { config } from '../config';

export const dbConnect = async () => {
	mongoose
		.connect(config.MONGO_URI as string)
		.then(() => console.log('MongoDB connected'))
		.catch((err) => console.log('database not connected', err));
};
