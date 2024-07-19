import express from "express";

const app = express();
const port = 4000;

app.get("/test", (req, res) => {
  res.status(200).send("Test OK!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
