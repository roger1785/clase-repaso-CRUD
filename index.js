import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

