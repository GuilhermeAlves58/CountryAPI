import express from "express";
import searchCountry from '../services/countryServices.js';
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { country: null, error: null });
});

router.post("/search", async (req, res) => {
  try {
    const result = await searchCountry(req.body.country);
    res.render("index", { country: result, error: null });
  } catch (err) {
    console.log(err);
    res.render("index", { country: null, error: "País não encontrado. Verifique o nome e tente novamente." });
  }
});

export default router;