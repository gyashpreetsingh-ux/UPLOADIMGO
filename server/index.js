const express = require("express");

require("dotenv").config();

const cors = require("cors");

const uploadRoute = require("./routes/uploadRoute");

const app = express();

const PORT = process.env.PORT || 5000;

const connectDB = require("./config/db");

app.use(cors());

app.use(express.json());

app.use("/api/upload", uploadRoute);

app.get("/", (req, res) => {
    res.send("Server is Running 🚀");
});

connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});