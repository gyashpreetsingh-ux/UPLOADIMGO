const express = require("express");
const router = express.Router();

const {
    getAllImages,
    deleteImage,
} = require("../controllers/imageController");

router.get("/", getAllImages);

router.delete("/:id", deleteImage);

module.exports = router;