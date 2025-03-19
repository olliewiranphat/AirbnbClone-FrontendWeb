import React, { useState } from "react";


function AccomStep1() {
    const initInput = {
        title: "",
        description: "",
        typeOfAccom: "",
        img:[],
        availQTY: "",
        numBedrooms: "",
        numBathrooms: "",
        maxGuests: "",
        pricePerNight: "",
        addressDetail: "",
        city: "",
        country: "",
        latitude: "",
        longitude: "",
          };
    const [formData, setFormData] = useState(initInput);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleImagesChange = (images) => {
        // const files = Array.from(e.target.files);
        // setFormData({ ...formData, img: [...formData.img, ...files] });
        setFormData({ ...formData, img: images });
    };
    const handleRemoveImage = (index) => {
        const newImages = [...formData.img];
        newImages.splice(index, 1); // ลบรูปที่เลือก
        setFormData({ ...formData, img: newImages });
    };
  return (
    <div>
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Accommodation Name</span>
            <input type="text" name="title" defaultValue={formData.title} onChange={handleChange} placeholder='What is the name of your accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2 " />
        </div>
                
        <div className='flex flex-col gap-2 mt-2 mb-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Description</span>
            <textarea name='description' defaultValue={formData.description} onChange={handleChange} placeholder='Please describe the details of your accommodation.'
                className="textarea textarea-bordered border-[#a4a5a5] textarea-xs w-full "></textarea>
        </div>

        {/* type room */}
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Type of Accommodation</span>
            <select  name="typeOfAccommodation" defaultValue={formData.typeOfAccommodation} onChange={handleChange} className="select select-bordered border-[#a4a5a5] w-full textarea-xs ">
                <option value=""  selected >What type of Accommodation are available?</option>
                <option>ENTIREHOME</option>
                <option>PRIVATEROOM</option>
                <option>SHAREDROOM</option>
            </select>
        </div>
        {/* AccomAmenity */}
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Category of Accommodation</span>
            <select className="select select-bordered border-[#a4a5a5] w-full textarea-xs ">
                <option value=""  selected >What category of Accommodation are available?</option>
                <option>Amazing views</option>
                <option>Beachfront</option>
                <option>OMG!</option>
                <option>Rooms</option>
                <option>Treehouses</option>
                <option>Castles</option>
                <option>Farms</option>
                <option>Cabins</option>
                <option>Tiny homes</option>
                <option>Amazing pools</option>
            </select>
        </div>

      {/* upload photos of the accommodation */}
      <div className="flex flex-col gap-2 mt-2">
        {/* ส่วนแสดงรูป */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {formData.img.length > 0 &&
            formData.img.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
                  alt={`uploaded ${index}`}
                  className="w-30 h-30 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 text-white text-xs  rounded-full p-2"
                >
                  ✕
                </button>
              </div>
            ))}
        </div>
        {/* ใส่รูป */}
        <span className="text-xs"><span className="text-red-700 mr-1">*</span>Upload photos of the accommodation.</span>
        <input type="file" multiple
        onChange={(e) =>handleImagesChange([...formData.img, ...e.target.files])}
        className="file-input file-input-bordered border-[#a4a5a5] file-input-secondary w-full mb-2"
        />
      </div>
    </div>
  );
}

export default AccomStep1;
