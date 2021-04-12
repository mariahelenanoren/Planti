import { Request, Response } from "express";
import { plants } from "./plants.json";

interface Plant {
  name: string;
  imageUrl: string;
  height: number;
  description: string;
  id: number;
}

const express = require("express");
const app = express();

const hostname = "localhost";
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/api/plants", (req: Request, res: Response) => {
  res.json(plants);
});

app.get("/api/plants/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const foundPlant = plants.find((plant) => plant.id === id);
  res.json(foundPlant);
});

app.post("/api/plants", (req: Request, res: Response) => {
  const newPlant = req.body;
  newPlant.id = plants[plants.length - 1].id + 1;
  plants.push(newPlant);
  res.json(plants);
});

app.put("/api/plants", (req: Request, res: Response) => {
  const editedPlant = req.body;
  const index = plants.findIndex((plant: Plant) => plant.id === editedPlant.id);
  plants.splice(index, 1, editedPlant);
  res.json(plants);
});

app.delete("/api/plants", (req: Request, res: Response) => {
  const deletedPlant = req.body;
  const index = plants.findIndex(
    (plant: Plant) => plant.id === deletedPlant.id
  );
  plants.splice(index, 1);
  res.json(plants);
});

app.listen(port, () => {
  console.log(`Server is running on https://${hostname}:${port}`);
});
