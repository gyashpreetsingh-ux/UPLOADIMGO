require("dotenv").config();

const express = require("express");
const cors = require("cors");

const uploadRoute = require("./routes/uploadRoute");
const imageRoute = require("./routes/imageRoute");

const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");

console.log("✅ Image Route Loaded");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoute);
app.use("/api/images", imageRoute);
app.use("/api/auth", authRoute);
app.get("/", (req, res) => {
    res.send("Server is Running 🚀");
});


app.get("/api/test", (req, res) => {
    res.send("TEST OK");
});
connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});