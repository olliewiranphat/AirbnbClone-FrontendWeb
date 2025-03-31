import React from 'react'
import PlaceTypeSelector from '../AddAccom/PlaceTypeSelector';
import CategoryAccom from '../AddAccom/CategoryAccom';
import { useAuth } from '@clerk/clerk-react';
import useAccomStore from '../../../accomStore/addaccomStore';
import PlaceTypeSelectorUpdate from '../AddAccom/PlaceTypeSelectorUpdate';

function AccomStep1Update() {
    const { getToken } = useAuth();
    const { formData, selectAccomEdit, setHandleChangeEdit } = useAccomStore();

    console.log('selectAccomEdit', selectAccomEdit)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setHandleChangeEdit(name, value)
        // setFormData({ ...selectAccomEdit, [name]: value });
        // console.log(e.target.value  )
      };
  return (
    <div>
        <div className='flex flex-col gap-4 mt-4 w-full bg h-[90%] bg-pink-50 border-none p-8 rounded-2xl shadow-xl'>
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-2">
        <h2 className="text-xl font-bold">
          <span className="text-red-700 mr-1">*</span>Place Name</h2>
        <input
          type="text"
          name="title"
          value={selectAccomEdit?.title || ""}
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
          value={selectAccomEdit?.description}
          onChange={handleChange}
          placeholder="Please describe the details of your accommodation."
          className="textarea textarea-bordered border-[#a4a5a5] textarea-md w-full "
        ></textarea>
      </div>

      {/* typeOfAccom*/}
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6" >
      <PlaceTypeSelectorUpdate
              selectedType={selectAccomEdit.typeOfAccom}
              setSelectedType={(type) => setHandleChangeEdit( "typeOfAccom", type )}
            />
      </div>

      {/* category of Accommodation */}
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6">
        <CategoryAccom
          selectedAccom={selectAccomEdit.accomCateID}
          setSelectedAccom={(categoryacc) => setHandleChangeEdit( "accomCateID", categoryacc )}
        />
      </div>

    </div>
    </div>
  );
}

export default AccomStep1Update