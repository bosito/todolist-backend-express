const express = require("express");
const taskRouters = require("./routes/task.routes");
const middlewareError = require("./middlewares/error.middleware");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded);
app.use(cors());

app.use(taskRouters);

//manejo de errores
app.use(middlewareError);

module.exports = app;