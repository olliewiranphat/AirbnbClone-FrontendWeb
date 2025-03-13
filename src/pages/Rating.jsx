import React from 'react';
import {
   SprayCan,
   CheckCircle,
   Key,
   MessageSquare,
   MapPin,
   Tag,
} from 'lucide-react';

function RatingCard() {
   const ratings = {
      cleanliness: 5.0,
      accuracy: 5.0,
      checkIn: 5.0,
      communication: 5.0,
      location: 4.9,
      value: 5.0,
   };

   return (
      <div className="flex items-center justify-center p-4">
         <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
            <div className="flex items-center mb-6">
               <div className="mr-8">
                  <h3 className="text-lg font-semibold mb-2">Overall rating</h3>
                  <div className="space-y-1">
                     {[5, 4, 3, 2, 1].map((num) => (
                        <div key={num} className="flex items-center">
                           <div className={`w-8 h-1 bg-gray-300 rounded-r-full ${num === 5 ? 'bg-black' : ''}`}></div>
                           <span className="ml-2 text-sm">{num}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-6 gap-4 w-full">
                  <RatingItem
                     title="Cleanliness"
                     value={ratings.cleanliness}
                     icon={<SprayCan size={24} />}
                  />
                  <RatingItem
                     title="Accuracy"
                     value={ratings.accuracy}
                     icon={<CheckCircle size={24} />}
                  />
                  <RatingItem
                     title="Check-in"
                     value={ratings.checkIn}
                     icon={<Key size={24} />}
                  />
                  <RatingItem
                     title="Communication"
                     value={ratings.communication}
                     icon={<MessageSquare size={24} />}
                  />
                  <RatingItem
                     title="Location"
                     value={ratings.location}
                     icon={<MapPin size={24} />}
                  />
                  <RatingItem
                     title="Value"
                     value={ratings.value}
                     icon={<Tag size={24} />}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

function RatingItem({ title, value, icon }) {
   return (
      <div className="text-center">
         <div className="mb-2">{icon}</div>
         <h4 className="text-sm font-semibold">{title}</h4>
         <p className="text-lg font-bold">{value}</p>
      </div>
   );
}

export default RatingCard;