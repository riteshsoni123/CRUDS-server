require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const Cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(Cors());

app.use("/", require("./routes/data"));
app.use("/api/data", require("./routes/data"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
