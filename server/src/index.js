const express = require("express");
const cors = require("cors");
const products = require("./products.json");

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

// home page
app.get("/", (_, res) => {
  res.json("Hello World!");
});

app.get("/products/:index", (req, res) => {
  let { index } = req.params;                                 // destruct the index of the next products
  index = Number(index)                                       // cast from string
  const prodResponse = products.data.slice(index, index + 10);   // get the next 10 products
  res.send(prodResponse);
});

// unknown routes
app.use(function (_, res) {
  res.status(404).send("Resource not found");
});

// error handler
app.use(function (err, _, res, next) {
  console.log(err);
  next();
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
