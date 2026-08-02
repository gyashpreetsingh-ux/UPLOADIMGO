const cloudinary = require("../config/cloudinary");
const Image = require("../models/Image");

// Existing getAllImages()

const deleteImage = async (req, res) => {
    try {

        const image = await Image.findById(req.params.id);

        if (!image) {
            return res.status(404).json({
                message: "Image not found",
            });
        }

        // Delete from Cloudinary
        await cloudinary.uploader.destroy(image.publicId);

        // Delete from MongoDB
        await Image.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Image Deleted Successfully",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Delete Failed",
        });

    }
};

module.exports = {
    getAllImages,
    deleteImage,
};