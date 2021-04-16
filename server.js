const { plants } = require("./plants.json");
const path = require("path");
const express = require("express");
const app = express();

const hostname = "localhost";
const port = 8080;

app.use(express.json());

app.get("/api/plants", (req, res) => {
  res.json(plants);
});

app.get("/api/plants/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundPlant = plants.find((plant) => plant.id === id);
  res.json(foundPlant);
});

app.post("/api/plants", (req, res) => {
  const newPlant = req.body;
  newPlant.id = plants[plants.length - 1].id + 1;
  plants.push(newPlant);
  res.json(newPlant);
});

app.put("/api/plants", (req, res) => {
  const editedPlant = req.body;
  const index = plants.findIndex((plant) => plant.id === editedPlant.id);
  plants.splice(index, 1, editedPlant);
  res.json(plants);
});

app.delete("/api/plants", (req, res) => {
  const deletedPlant = req.body;
  const index = plants.findIndex((plant) => plant.id === deletedPlant.id);
  plants.splice(index, 1);
  res.json(plants);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on https://${hostname}:${port}`);
});
