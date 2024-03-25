const express = require("express");
const cors = require("cors");
const Routes = require("./routes/index.js");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
