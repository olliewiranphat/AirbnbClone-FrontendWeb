import React, { useState } from "react";
import useAccomStore from '../../accomStore/addaccomStore';
import { LoaderCircle } from "lucide-react";
import { deleteImage, uploadImage } from "../../api/accomApi";
import { useAuth } from "@clerk/clerk-react";

function Upimg() {
    const { getToken } = useAuth();
    const { formData, setFormData, setDeleteImage } = useAccomStore();
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);    
    
      const handleImagesChange = async (e) => {
        try {
          setUploading(true);
          setUploadError(null);
          const files = Array.from(e.target.files);
          let uploadedUrls = [];
    
          for (const file of files) {
            const token = await getToken();
            console.log(token);
            const imageUrl = await uploadImage(token, file);
            if (imageUrl) uploadedUrls.push(imageUrl);
          }
          console.log("Upload images url", uploadedUrls);
          // setFormDataImg(uploadedUrls);
          setFormData({ ...formData, img: [...formData.img, ...uploadedUrls] });
        } catch (error) {
          console.log(error);
        } finally {
          setUploading(false);
        }
      };
    
      console.log("Form data=====", formData);
      // ลบรูปออกจาก Cloud และ State
      const handleRemoveImage = async (public_id, index) => {
        console.log("index", index);
        setUploading(true);
        // const imageToDelete = formData.img[index];
        try {
          const token = await getToken();
          await deleteImage(token, { public_id: public_id });
          setDeleteImage(index);
        } catch (error) {
          alert("Failed to delete image. Please try again.");
        } finally {
          setUploading(false);
        }
      };
  return (
    <div>
        {/* upload photos of the accommodation */}
      <div className="flex flex-col gap-2 mt-2">
        {/* ส่วนแสดงรูป */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {formData.img.length > 0 &&
            formData.img.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image?.secure_url}
                  alt={`uploaded ${index}`}
                  className="w-30 h-30 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(image?.public_id, index)}
                  className="absolute top-0 right-0 text-white text-xs  rounded-full p-2"
                >
                  ✕
                </button>
              </div>
            ))}
        </div>
        {/* ใส่รูป */}
        <span className="text-sm">
          <span className="text-red-700 mr-1">*</span>Upload photos of the
          accommodation.
        </span>
        <input
          type="file"
          multiple
          onChange={handleImagesChange}
          className="file-input file-input-bordered border-[#a4a5a5] file-input-secondary w-full mb-2"
        />
        {uploading && (
          <>
          <LoaderCircle className="animate-spin" />
          <span className="text-xs text-gray-500">กำลังอัปโหลดรูปภาพ...</span>
          </>
        )}
        {uploadError && (
          <>
          <LoaderCircle className="animate-spin" />
          <span className="text-xs text-red-500">{uploadError}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default Upimg