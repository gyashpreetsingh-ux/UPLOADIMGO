import "./ImageCard.css";
import { FaDownload, FaTrash } from "react-icons/fa";

const ImageCard = ({ image, onImageClick, onDeleteClick }) => {

    const handleDownload = async () => {

        try {

            const response = await fetch(image.imageUrl);

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = image.fileName;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="image-card">

            <img
    src={image.imageUrl}
    alt={image.fileName}
    onClick={onImageClick}
    style={{ cursor: "pointer" }}
/>

            <div className="image-info">

                <h3>{image.fileName}</h3>

                <p className="upload-time">
                    Uploaded just now
                </p>

                <div className="image-buttons">

                    <button
                        className="download-btn"
                        onClick={handleDownload}
                    >
                        <FaDownload />
                        <span>Download</span>
                    </button>
<button
    className="delete-btn"
    onClick={() => onDeleteClick(image)}
>
    <FaTrash />
    <span>Delete</span>
</button>

                </div>

            </div>

        </div>

    );

};

export default ImageCard;