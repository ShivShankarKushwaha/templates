import express from "express";
import { App } from "./services";
import { dbConnect } from "./models";
import { config } from "./config";

async function startServer ()
{
    const app = express();
    App(app);
    await dbConnect();
    app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
    });
}

startServer();