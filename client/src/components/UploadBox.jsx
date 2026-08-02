import "./UploadBox.css";
import { useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
function UploadBox() {
    const [fileName, setFileName] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isDragging, setIsDragging] = useState(false);

    function handleFileChange(event) {
        const file = event.target.files[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);

            setFileName(file.name);
            setImagePreview(imageURL);
            setSelectedFile(file);

            // Clear previous error
            setError("");
        }
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(uploadedImage);
            alert("Image URL Copied Successfully!");
        } catch (error) {
            console.log(error);
            alert("Failed to Copy Link");
        }
    };

    async function handleUpload() {
        console.log("Button Clicked");

        if (!selectedFile) {
            setError("Please choose an image first.");
            return;
        }

        setLoading(true);
        setError("");

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/upload",
                formData
            );

            console.log(response.data);

            toast.success(response.data.message);
            setUploadedImage(response.data.imageUrl);
            /*
            IMPORTANT:
            Backend response dekhne ke baad hi ye line uncomment karna.

            Example:

            setUploadedImage(response.data.imageUrl);

            OR

            setUploadedImage(response.data.url);

            Ye backend ke response par depend karega.
            */

        } catch (error) {
            console.log(error);

            if (error.response) {
                setError(error.response.data.message || "Upload Failed");
            } else if (error.request) {
                setError("Cannot connect to server.");
            } else {
                setError("Something went wrong.");
            }

        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="upload-box">

            <h2>Upload Your Image</h2>

            <p>Choose an image from your computer.</p>

            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />

            <br />

            {imagePreview && (
                <img
                    src={imagePreview}
                    alt="Preview"
                />
            )}

            <br />

            <button
                onClick={handleUpload}
                disabled={loading}
            >
                {loading ? "Uploading..." : "Upload Image"}
            </button>

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            {uploadedImage && (
                <div className="result-container">

                    <h3>Upload Successful ✅</h3>

                    <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="uploaded-image"
                    />

                    <p>{uploadedImage}</p>

                    <button onClick={copyLink}>
                        Copy Link
                    </button>

                </div>
            )}

            <p>Selected File: {fileName}</p>

        </section>
    );
}

export default UploadBox;