const express = require('express');
const app = express();
const { PORT } = require('./Config');
const { MainRoute } = require('./Routes');

app.use("/api", MainRoute);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

module.exports = app;