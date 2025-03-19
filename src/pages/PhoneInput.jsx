import React, { useState } from 'react';

const countryCodes = [
   { name: 'South Korea', code: '+82' },
   { name: 'South Sudan', code: '+211' },
   { name: 'Spain', code: '+34' },
   { name: 'Sri Lanka', code: '+94' },
   { name: 'St. Barthélemy', code: '+590' },
   { name: 'St. Helena', code: '+290' },
   { name: 'St. Kitts & Nevis', code: '+1' },
   { name: 'St. Lucia', code: '+1' },
   { name: 'St. Martin', code: '+590' },
   { name: 'St. Pierre & Miquelon', code: '+508' },
   { name: 'St. Vincent & Grenadines', code: '+1' },
   { name: 'Sudan', code: '+249' },
   { name: 'Suriname', code: '+597' },
   { name: 'Svalbard & Jan Mayen', code: '+47' },
   { name: 'Sweden', code: '+46' },
   { name: 'Switzerland', code: '+41' },
   { name: 'Taiwan', code: '+886' },
   { name: 'Tajikistan', code: '+992' },
   { name: 'Tanzania', code: '+255' },
   { name: 'Thailand', code: '+66' },
];

function PhoneInput() {
   const [selectedCountry, setSelectedCountry] = useState(countryCodes[countryCodes.length - 1]);
   const [phoneNumber, setPhoneNumber] = useState('');
   const [isOpen, setIsOpen] = useState(false);

   const handleCountryChange = (country) => {
      setSelectedCountry(country);
      setIsOpen(false);
   };

   return (
      <div className="card w-[648px] bg-base-100 p-4">
         <div className="">
            <div className="relative">
               <button
                  className="select select-bordered w-full border rounded-t-lg p-6 flex justify-between items-center "
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {selectedCountry.name} ({selectedCountry.code})
               </button>
               {isOpen && (
                  <ul className="absolute z-10 mt-1 w-full bg-base-100 rounded-box shadow-md max-h-48 overflow-y-auto">
                     {countryCodes.map((country) => (
                        <li
                           key={country.code}
                           className="p-2 hover:bg-base-200 cursor-pointer "
                           onClick={() => handleCountryChange(country)}
                        >
                           {country.name} ({country.code})
                        </li>
                     ))}
                  </ul>
               )}
            </div>
            <div >
               {/* <label className="label">
                  <span className="label-text">Phone number</span>
               </label> */}
               <input
                  type="number"
                  placeholder="Phone number"
                  className="input input-bordered w-full border border-t-0 rounded-b-lg p-6"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
               />
            </div>
         </div>
      </div>
   );
}

export default PhoneInput;