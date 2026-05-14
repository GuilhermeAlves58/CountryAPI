import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import countryRoutes from "./routes/countryRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", countryRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Algo deu errado");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});