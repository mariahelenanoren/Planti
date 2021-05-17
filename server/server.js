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
  const plants = JSON.parse(data);
  let newPlant = req.body;

  if (plants.length) {
    newPlant.id = plants[plants.length - 1].id + 1;
  } else {
    newPlant.id = 0;
  }

  plants.push(newPlant);
  fs.writeFile("./plants.json", JSON.stringify(plants), function (err) {
    if (err) {
      return console.log(err);
    }
    res.json(newPlant);
  });
});

app.put("/api/plants/:id", (req, res) => {
  const data = fs.readFileSync("./plants.json");
  const plants = JSON.parse(data);
  const editedPlant = req.body;

  plants.forEach((plant, i) => {
    if (plant.id === editedPlant.id) {
      plants[i] = editedPlant;
    }
  });

  fs.writeFile("./plants.json", JSON.stringify(plants), function (err) {
    if (err) {
      return console.log(err);
    }
    res.json(editedPlant);
  });
});

app.delete("/api/plants/:id", (req, res) => {
  const data = fs.readFileSync("./plants.json");
  const plants = JSON.parse(data);

  const deletedPlant = req.body;
  const filteredPlants = plants.filter((p) => p.id !== deletedPlant.id);

  fs.writeFile("./plants.json", JSON.stringify(filteredPlants), function (err) {
    if (!err) {
      res.json(filteredPlants);
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on https://${hostname}:${port}`);
});
