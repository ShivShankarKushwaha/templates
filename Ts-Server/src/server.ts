import express from 'express';
import { App, initRedisClient } from './services';
import { dbConnect } from './models';
import { config } from './config';

async function startServer() {
	const app = express();
	App(app);
	await dbConnect();
	await initRedisClient();
	app.listen(config.PORT, () => {
		console.log(`Server running on port ${config.PORT}`);
	});
}

startServer();
