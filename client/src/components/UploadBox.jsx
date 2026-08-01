import "./UploadBox.css";
import { useState } from "react";

function UploadBox() {

    const [fileName, setFileName] = useState("");
    const [imagePreview, setImagePreview] = useState("");

function handleFileChange(event) {

    const file = event.target.files[0];

    if (file) {

        const imageURL = URL.createObjectURL(file);

        setFileName(file.name);

        setImagePreview(imageURL);

    }

}
    return (
        <section className="upload-box">

            <h2>Upload Your Image</h2>

            <p>Choose an image from your computer.</p>

            <input
                type="file"
                onChange={handleFileChange}
            />

            <br />
            {imagePreview && (
    <img
        src={imagePreview}
        alt="Preview"
    />
)}

            <button>Upload Image</button>
            <p>Selected File: {fileName}</p>

        </section>
    );
}

export default UploadBox;