import React, { useState } from 'react';

function ImageUploader({ onImagesChange }) {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages([...selectedImages, ...files]);
        if (onImagesChange) {
            onImagesChange([...selectedImages, ...files]);
        }
    };

    const removeImage = (index) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);
        if (onImagesChange) {
            onImagesChange(updatedImages);
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleImageChange} />
            <div className="image-preview">
                {selectedImages.map((image, index) => (
                    <div key={index} className="image-item">
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index}`}
                            className="image-preview-thumbnail"
                        />
                        <button onClick={() => removeImage(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageUploader;
