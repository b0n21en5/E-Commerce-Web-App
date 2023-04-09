import express from "express";
import colors from "colors";

// configure env
dotenv.config();

//rest objects
const app = express();

// rest api
app.get("/", (req, res) => {
  res.send({ message: "welcome to ecommerce app" });
});

// PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgCyan.white);
});
