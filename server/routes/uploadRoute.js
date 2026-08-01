const express = require("express");

const router = express.Router();

const upload = require("../middleware/multer");

const { uploadImage } = require("../controllers/uploadController");
router.post(
    "/",
    (req, res, next) => {
        console.log("✅ POST /api/upload reached");
        next();
    },
    upload.single("image"),
    uploadImage
);

module.exports = router;