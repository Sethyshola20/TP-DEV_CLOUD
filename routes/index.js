const { Router } = require("express");
const Routes = Router();

Routes.get("/", (req, res) => {
  console.log("GG");
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

Routes.post("/persist", async (req, res) => {
  try {
    const jsonData = req.body;
    const serializedJson = JSON.stringify(jsonData);

    const query = "INSERT INTO user (json_data_column) VALUES (?)";

    connection.query(query, [serializedJson], (error, results) => {
      if (error) {
        console.error("Error persisting JSON data:", error);
        res.status(500).send("Error persisting JSON data");
        return;
      }
      console.log("JSON data persisted successfully:", results);
      res.status(200).send("JSON data persisted successfully");
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = Routes;
