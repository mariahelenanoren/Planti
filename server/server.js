const plants = require("./plants.json");
const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");

const hostname = "localhost";
const port = 5000;

app.use(express.json());

app.get("/api/plants", (req, res) => {
  res.json(plants);
});

app.get("/api/plants/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundPlant = plants.find((plant) => plant.id === id);
  res.json(foundPlant);
});

app.post("/api/plants/:id", (req, res) => {
  const newPlant = req.body;
  plants.push(newPlant);

  fs.writeFileSync("./plants.json", JSON.stringify(plants));
  res.json(newPlant);
});

app.put("/api/plants/:id", (req, res) => {
  const editedPlant = req.body;

  const filteredPlants = plants.filter((p) => p.id === editedPlant.id);
  const updatedPlants = filteredPlants.push(editedPlant);

  fs.writeFileSync("./plants.json", JSON.stringify(updatedPlants));
  res.json(updatedPlants);
});

app.delete("/api/plants/:id", (req, res) => {
  const deletedPlant = req.body;
  const filteredPlants = plants.filter((p) => p.id !== deletedPlant.id);

  fs.writeFileSync("./plants.json", JSON.stringify(filteredPlants));
  res.json(filteredPlants);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on https://${hostname}:${port}`);
});
