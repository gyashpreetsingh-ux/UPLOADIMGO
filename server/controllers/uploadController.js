const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

// NEW
const Image = require("../models/Image");

const uploadImage = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
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

                streamifier.createReadStream(req.file.buffer).pipe(uploadStream);

            });
        };

        const result = await uploadFromBuffer();

        // ===========================
        // MongoDB Save (Enable Later)
        // ===========================

        /*
        const newImage = new Image({
            imageUrl: result.secure_url,
            publicId: result.public_id,
        });

        await newImage.save();
        */

        res.status(200).json({
            message: "Image Uploaded Successfully",
            imageUrl: result.secure_url,
            publicId: result.public_id,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Upload Failed",
        });

    }
};

module.exports = {
    uploadImage,
};