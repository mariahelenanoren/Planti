const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");

const hostname = "localhost";
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/plants", (req, res) => {
  const data = fs.readFileSync("./plants.json");
  const plants = JSON.parse(data);
  res.json(plants);
});

app.get("/api/plants/:id", (req, res) => {
  const data = fs.readFileSync("./plants.json");
  const plants = JSON.parse(data);
  const id = Number(req.params.id);
  const foundPlant = plants.find((plant) => plant.id === id);
  res.json(foundPlant);
});

app.post("/api/plants", (req, res) => {
  const data = fs.readFileSync("./plants.json");
  const plants = JSON.parse(data) || [];
  let newPlant = req.body;
  newPlant.id = plants[plants.length - 1].id + 1 || 0;

  plants.push(newPlant);
  fs.writeFileSync("./plants.json", JSON.stringify(plants));
  res.json(newPlant);
});

app.put("/api/plants/:id", (req, res) => {
  const data = fs.readFileSync("./plants.json");
  const plants = JSON.parse(data);
  const editedPlant = req.body;

  plants[editedPlant.id] = editedPlant;

  fs.writeFileSync("./plants.json", JSON.stringify(plants));
  res.json(plants);
});

app.delete("/api/plants/:id", (req, res) => {
  const data = fs.readFileSync("./plants.json");
  const plants = JSON.parse(data);

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
