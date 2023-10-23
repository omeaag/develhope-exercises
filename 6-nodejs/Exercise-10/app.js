import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

type Planet = {
  id: number,
  name: string,
};

let planets: Planet[] = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/planets", (req, res) => {
  res.json(planets);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
