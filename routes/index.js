const { Router } = require("express");
const Routes = Router();

Routes.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

Routes.get("/data", async (req, res) => {
  try {
    // Chemin vers le fichier JSON
    const filePath = path.join(__dirname, "data.json");

    // Lecture du fichier JSON
    const jsonData = await fs.readFile(filePath, "utf-8");

    // Conversion de la chaîne JSON en objet JavaScript
    const data = JSON.parse(jsonData);

    // Envoi de la réponse avec les données JSON
    return res.json(data);
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier JSON :", error);
    return res.status(500).json({
      message: "Erreur lors de la récupération des données",
    });
  }
});

module.exports = Routes;
