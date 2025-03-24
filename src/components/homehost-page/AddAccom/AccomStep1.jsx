import React, { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import useAccomStore from "../../../accomStore/addaccomStore";
import { LoaderCircle } from "lucide-react";
import PlaceTypeSelector from "../../homehost-page/AddAccom/PlaceTypeSelector";
import CategoryAccom from "../../homehost-page/AddAccom/CategoryAccom";

function AccomStep1() {
  const { getToken } = useAuth();
  const { formData, setFormData } = useAccomStore();
  // const [uploading, setUploading] = useState(false);
  // const [uploadError, setUploadError] = useState(null);  

  const handleChange = async(e) => {
    const { name, value } = e.target;
    const token = await getToken()
    console.log('token', token)
    setFormData({ ...formData, [name]: value });
    // console.log(e.target.value  )
  };

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

    </div>
  );
}

export default AccomStep1;
