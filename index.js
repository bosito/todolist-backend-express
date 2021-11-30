const express = require("express");
const morgan = require("morgan");
const fs = require("fs/promises");
const path = require("path");

const app = express();

const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//
app.use(morgan("dev"));

app.get('/', (request, response) => {
    response.sendFile(path.resolve("index.html"))
});

app.get("/task", async (request, response) => {
    try {
        const listTask = await fs.writeFile("task.json", "uft8");
        response.json(JSON.parse(listTask));
    } catch (error) {

    }
});

app.get("/imagen-gato", (request, response) => {
    const image = path.resolve("public/google.jpg")
    response.sendFile(image);
})

app.post("/task", (request, response) => {
    const data = request.body
    //console.log('data -->', data);
    response.json(data)
})

app.put("/task/:taskId", (request, response) => {
    const params = request.params;

    console.log('params -->', params);
});

app.delete("/task/:taskId", (request, response) => {
    const params = request.params;

    console.log('params -->', params);
});

app.listen(PORT, () => {
    console.log(`servidor escuchando sobre el puerto --> ${PORT}`);
});
