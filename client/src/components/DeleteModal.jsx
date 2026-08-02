import "./DeleteModal.css";

const DeleteModal = ({ image, onClose, onDelete }) => {

    if (!image) return null;

    return (

        <div
            className="delete-overlay"
            onClick={onClose}
        >

            <div
                className="delete-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <h2>Delete Image?</h2>

                <p>
                    Are you sure you want to delete
                    <strong> {image.fileName}</strong> ?
                </p>

                <p className="warning">
                    This action cannot be undone.
                </p>

                <div className="delete-actions">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="confirm-delete-btn"
                        onClick={() => {
                            onDelete(image);
                            onClose();
                        }}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteModal;