import React, { useState } from "react";
import { deleteImage, uploadImage } from "../../api/accomApi";
import { useAuth } from "@clerk/clerk-react";
import useAccomStore from "../../accomStore/addaccomStore";
import { LoaderCircle } from "lucide-react";
import PlaceTypeSelector from "./PlaceTypeSelector";
import CategoryAccom from "./CategoryAccom";

function AccomStep1() {
  const { getToken } = useAuth();
  const { formData, setFormData, setDeleteImage } = useAccomStore();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(e.target.value  )
  };

  // const handleImagesChange = async (e) => {
  //   try {
  //     setUploading(true);
  //     setUploadError(null);
  //     const files = Array.from(e.target.files);
  //     let uploadedUrls = [];

  //     for (const file of files) {
  //       const token = await getToken();
  //       console.log(token);
  //       const imageUrl = await uploadImage(token, file);
  //       if (imageUrl) uploadedUrls.push(imageUrl);
  //     }
  //     console.log("Upload images url", uploadedUrls);
  //     // setFormDataImg(uploadedUrls);
  //     setFormData({ ...formData, img: [...formData.img, ...uploadedUrls] });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  // console.log("Form data=====", formData);

  // // ลบรูปออกจาก Cloud และ State
  // const handleRemoveImage = async (public_id, index) => {
  //   console.log("index", index);
  //   setUploading(true);
  //   // const imageToDelete = formData.img[index];
  //   try {
  //     const token = await getToken();
  //     await deleteImage(token, { public_id: public_id });
  //     setDeleteImage(index);
  //   } catch (error) {
  //     alert("Failed to delete image. Please try again.");
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  // const handleRemoveImage = (index) => {
  //   setFormData((prevData) => {
  //     const newImages = [...prevData.img];
  //     newImages.splice(index, 1); // ลบรูปที่เลือก
  //     return { ...prevData, img: newImages };
  //   });
  // };

  return (
    <div className='flex flex-col gap-4 mt-4 w-[60%]  h-[90%] bg-pink-50 border-none p-8 rounded-2xl shadow-xl'>
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-2">
        <h2 className="text-xl font-bold">
          <span className="text-red-700 mr-1">*</span>Place Name</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="What is the name of your accommodation?"
          className="input input-bordered border-[#a4a5a5] w-full rounded-xl textarea-md  "
        />
      </div>

      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-2">
      <h2 className="text-xl font-bold"> <span className="text-red-700 mr-1">*</span>Description</h2>
        <textarea
        type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Please describe the details of your accommodation."
          className="textarea textarea-bordered border-[#a4a5a5] textarea-md w-full "
        ></textarea>
      </div>

      {/* typeOfAccom*/}
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6" >
      <PlaceTypeSelector
              selectedType={formData.typeOfAccom}
              setSelectedType={(type) => setFormData({ typeOfAccom: type })}
            />
      </div>

      {/* category of Accommodation */}
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6">
        <CategoryAccom
          selectedAccom={formData.categoryAccom || []}
          setSelectedAccom={(categoryacc) => setFormData({ categoryAccom: categoryacc })}
        />
      </div>

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
  );
}

export default AccomStep1;
