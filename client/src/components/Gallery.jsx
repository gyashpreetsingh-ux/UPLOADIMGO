import "./Gallery.css";
import { useEffect, useState } from "react";

import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import DeleteModal from "./DeleteModal";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [deleteImage, setDeleteImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/images");

            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }

            const data = await response.json();

            setImages(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (image) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/images/${image._id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (data.success) {
                alert("Image Deleted Successfully");

                setImages((prevImages) =>
                    prevImages.filter((img) => img._id !== image._id)
                );
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Delete Failed");
        }
    };

    return (
        <div className="gallery">

            <h2>Your Gallery</h2>

            {loading ? (
                <p>Loading Images...</p>
            ) : (
                <div className="gallery-grid">

                    {images.length === 0 ? (
                        <p>No Images Uploaded Yet.</p>
                    ) : (
                        images.map((img) => (
                            <ImageCard
                                key={img._id}
                                image={img}
                                onImageClick={() => setSelectedImage(img)}
                                onDeleteClick={() => setDeleteImage(img)}
                            />
                        ))
                    )}

                </div>
            )}

            <ImageModal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />

            <DeleteModal
                image={deleteImage}
                onClose={() => setDeleteImage(null)}
                onDelete={handleDelete}
            />

        </div>
    );
};

export default Gallery;