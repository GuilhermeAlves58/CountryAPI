import express from "express";
const router = express.Router();

// Rota inicial — renderiza a página sem dados
router.get("/", (req, res) => {
  res.render("index", { country: null, error: null });
});

// Rota de busca — recebe o formulário e busca na API
router.post("/search", async (req, res) => {
  
  res.send("rota de busca funcionando"); 
});

export default router;