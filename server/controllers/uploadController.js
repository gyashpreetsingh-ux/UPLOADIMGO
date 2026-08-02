const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");
const Image = require("../models/Image");

const uploadImage = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No image selected",
            });
        }

        const uploadFromBuffer = () => {
            return new Promise((resolve, reject) => {

                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        folder: "UploadImgO",
                    },
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }
                );

                streamifier
                    .createReadStream(req.file.buffer)
                    .pipe(uploadStream);
            });
        };

        // Upload to Cloudinary
        const result = await uploadFromBuffer();

        // Save in MongoDB
        const newImage = new Image({
            imageUrl: result.secure_url,
            publicId: result.public_id,
            fileName: req.file.originalname,
        });

        await newImage.save();

        res.status(200).json({
            success: true,
            message: "Image Uploaded Successfully",
            image: newImage,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Upload Failed",
        });

    }
};

module.exports = {
    uploadImage,
};