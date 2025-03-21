import React, {  useState } from 'react'
import HostNav from '../../components/homehost-page/HostNav'
import axios from 'axios';
import AccomStep1 from '../../components/homehost-page/AccomStep1';
import AccomStep2 from '../../components/homehost-page/AccomStep2';
import AccomStep3 from '../../components/homehost-page/AccomStep3';
import { addAccommodation } from '../../api/accomApi';
import useAccomStore from '../../accomStore/addaccomStore';

function AddAccom() {
    const {formData, setFormData} = useAccomStore();

    // const handleChange = (e) => {
    //       const { name, value } = e.target;
    //       setFormData({ ...formData, [name]: value });
    //   };
      
      const [step, setStep] = useState(1);
      const totalSteps = 3;
      
      const nextStep = () => {
          if (step < totalSteps) setStep(step + 1);
      };
  
      const prevStep = () => {
          if (step > 1) setStep(step - 1);
      };

    
      const handleSubmit = async (e) => {
          e.preventDefault();
          if (!formData.title || !formData.description || !formData.typeofAccommodation || formData.img.length === 0) {
            alert("Please fill in all required fields.");
            return;
        }
          try {
              const response = await addAccommodation(formData);
              if (response.status === 200) {
                  alert('Accommodation added successfully');
                  setFormData(initInput); // Reset form
              }
          } catch (err) {
              console.error('Error adding accommodation:', err);
          }
      };

  return (
    <div className='h-full w-full flex flex-col  gap-2 p-5 mb-20'>
         {/* Nav */}
         <div><HostNav/></div>
         {/* content */}
        <div className='flex  flex-col items-center'>
        <div className='account font-bold text-4xl ml-8 mt-10 mb-8'>Create Your House</div>

        {/* Timeline Progress */}
            <ul className='flex justify-center w-3/4 my-4 steps steps-horizontal'>
                <li className={`w-[200px]  text-center text-xl  step ${step >= 1 ? 'font-bold step step-secondary size-20' : 'text-gray-400  step-neutral'}`}>Step 1</li>
                <li className={`w-[200px]  text-center text-xl  step ${step >= 2 ? 'font-bold step step-secondary size-20' : 'text-gray-400  '}`}>Step 2</li>
                <li className={`w-[200px] text-center text-xl  step ${step >= 3 ? 'font-bold step step-secondary size-20' : 'text-gray-400 '}`}>Step 3</li>
            </ul>
                
        {/* Render Step Components */}
            {step === 1 && <AccomStep1 />}
            {step === 2 && <AccomStep2 />}
            {step === 3 && <AccomStep3 />}

        {/* Navigation Buttons */}
        <div className='flex mt-9 gap-2 w-[90%] justify-around'>
            {step > 1 && (
            <button onClick={prevStep} className='px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500'>Back</button>
            )}
            {step < totalSteps ? (
            <button onClick={nextStep} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Next</button>
            ) : (
            <button type='submit'onSubmit={handleSubmit} 
            onClick={handleSubmit} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>Save</button>
            )}
        </div>
            
            
            {/* <form className=' mt-4' onSubmit={handleSubmit}> */}

        {/* submit
            <div className='flex mt-9 gap-2 w-[90%] justify-center'>
                <button type='submit' className='transition-transform duration-300  hover:scale-125 px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#FF385C] hover:text-black hover:duration-300'>Save</button>
            </div> */}
        {/* </form> */}
        </div>
    </div>
  );
}

export default AddAccom;
