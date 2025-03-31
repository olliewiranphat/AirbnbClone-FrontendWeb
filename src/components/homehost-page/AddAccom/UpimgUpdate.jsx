import React, { useState } from "react";
import useAccomStore from '../../../accomStore/addaccomStore';
import { LoaderCircle } from "lucide-react";
import { deleteImage, updateImg, uploadImage } from "../../../api/accomApi";
import { useAuth } from "@clerk/clerk-react";

function UpimgUpdate({field}) {
    const { getToken } = useAuth();
    const { formData, formDataByField, fetchDataById } = useAccomStore();
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null); 
    const selectAccomEdit = useAccomStore((state) => state.selectAccomEdit);
    const fetchData = useAccomStore((state) => state.fetchData);
  const setHandleChangeEdit = useAccomStore((state) => state.setHandleChangeEdit);   
  console.log('selectAccomEdit6666666666', selectAccomEdit)

  // const arr =[
  //   {img: [
  //     {secure_url: "",
  //       public_id: ""}
  //   ]}
  // ]

  console.log('field//////', field)

  const newObj = {}
  const  filterimg = selectAccomEdit.Room.reduce((acc, item) => {

    console.log('item.roomID', item.roomID)
    console.log('field', field)
    console.log('item.name', item.name)
    console.log('newObj', newObj)

    // if(newObj.roomID !== item.roomID){
    //   newObj.roomID = item.roomID
    //   acc.push(newObj);
    // }

    if (item.name === "Rooms" && field === 'img') {
      newObj.roomID = item.roomID
      newObj["img"] = item.ImgsRoom;
      acc.push(newObj);
    }

    if (item.name === "Bed Room" && field === 'imgBeds') {
      newObj.roomID = item.roomID
      newObj["imgBeds"] = item.ImgsRoom;
      acc.push(newObj);

    }

    if (item.name === "Bath Room" && field === 'imgBath') {
      newObj.roomID = item.roomID
      newObj["imgBath"] = item.ImgsRoom;
      acc.push(newObj);

    }

    return acc
   
    
  }, []);

  console.log('filterimg', filterimg)
    
      const handleImagesChange = async (e, body) => {
        try {
          setUploading(true);
          setUploadError(null);
          const files = Array.from(e.target.files);
          let uploadedUrls = [];
    
          for (const file of files) {
            const token = await getToken();
            console.log(token);
            const imageUrl = await uploadImage(token, file);
            if (imageUrl) {
              uploadedUrls.push(imageUrl)
              body[field]= imageUrl
            };
          }
          console.log("Upload images url", uploadedUrls);
          // setFormDataImg(uploadedUrls);

          // const token = await getToken();
          // console.log('body-----------------**', body)
          // await updateImg(token, body);
          // fetchDataById(token, selectAccomEdit.accommodationID);


   
          // console.log('uploadedUrls, field============', uploadedUrls, field)
          // formDataByField(uploadedUrls, field);

        } catch (error) {
          console.log(error);
        } finally {
          setUploading(false);
        }
      };
    
      console.log("Form data==", formData);
      // ลบรูปออกจาก Cloud และ State
      const handleRemoveImage = async (public_id, index, imgsRoomID) => {
        console.log("index------------", index);
        console.log('public_id------------', public_id)
        setUploading(true);
        // const imageToDelete = formData.img[index];
        try {
          const token = await getToken();
          await deleteImage(token, { public_id: public_id,  imgsRoomID: imgsRoomID  });
          // console.log('fieldqqqqqqqqqq', field)
          // setDeleteImageEdit(index, field);

          fetchDataById(token, selectAccomEdit.accommodationID);

        } catch (error) {
          console.log(error);
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
          {filterimg?.length > 0 &&
            filterimg?.map((img) => img[field].map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image?.imageUrl}
                  alt={`uploaded ${index}`}
                  className="w-30 h-30 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(image?.public_id, index, image?.imgsRoomID)}
                  className="absolute top-0 right-0 text-white text-xs  rounded-full p-2"
                >
                  ✕
                </button>
              </div>
            )))}
        </div>
        {/* ใส่รูป */}
        <span className="text-sm">
          <span className="text-red-700 mr-1">*</span>Upload photos of the
          accommodation.
        </span>
        <input
          type="file"
          multiple
          onChange={(e) => handleImagesChange(e)}
          className="file-input file-input-bordered border-[#a4a5a5] file-input-secondary w-full mb-2"
        />
        {uploading && (
          <>
          <LoaderCircle className="animate-spin" />
          <span className="text-xs text-gray-500">uploading...</span>
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

export default UpimgUpdate