import "./ImageModal.css";

const ImageModal = ({ image, onClose }) => {

    if (!image) return null;

    return (

        <div className="modal-overlay" onClick={onClose}>

            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✕
                </button>

                <img
                    src={image.imageUrl}
                    alt={image.fileName}
                />

            </div>

        </div>

    );

};

export default ImageModal;