// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const db = require('./db');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

export type Prestataire = {
  name: string,
  url: string,
  nbLike: number, 
}

const prestataires: Prestataire[] = [
  {
    name: "plop",
    nbLike: 10000,
    url: "https://www.francetvinfo.fr/pictures/zwzFc6PU5JuzL2NA0BwMqhCrvo0/1200x900/2016/08/23/shrek-5.jpg"
  },
  {
    name: "plip",
    nbLike: 15465,
    url: "https://www.francetvinfo.fr/pictures/zwzFc6PU5JuzL2NA0BwMqhCrvo0/1200x900/2016/08/23/shrek-5.jpg"
  },
  {
    name: "plup",
    nbLike: 432444,
    url: "https://www.francetvinfo.fr/pictures/zwzFc6PU5JuzL2NA0BwMqhCrvo0/1200x900/2016/08/23/shrek-5.jpg"
  }
]
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/prestataires", async(req: Request, res: Response) => {
  res.json(prestataires);
});

app.post("/prestataires", async(req: Request, res: Response) => {
  prestataires.push(req.body)
  res.status(201).json(req.body);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
