import React from 'react';
import { CheckCircle, MessageSquare, SprayCan, Map, Tag, KeyRound } from 'lucide-react';

const RatingCard = () => {
   const ratings = [
      { category: 'Overall rating', score: 5.0, showBars: true },
      { category: 'Cleanliness', score: 5.0, icon: <SprayCan size={20} className='w-9 h-9'/> },
      { category: 'Accuracy', score: 5.0, icon: <CheckCircle size={20} className='w-9 h-9'/> },
      { category: 'Check-in', score: 5.0, icon: <KeyRound size={20} className='w-9 h-9'/> },
      { category: 'Communication', score: 5.0, icon: <MessageSquare size={20} className='w-9 h-9'/> },
      { category: 'Location', score: 4.9, icon: <Map size={20} className='w-9 h-9'/> },
      { category: 'Value', score: 5.0, icon: <Tag size={20} className='w-9 h-9'/> },
   ];

   return (
      <div className="max-w-6xl mx-auto font-sans ">
         <div className="flex flex-wrap items-center justify-between border-b pb-4">
            {ratings.map((item, index) => (
               <div key={index} className={`p-4  ${index > 0 ? 'border-l' : ''}`}>
                  {item.showBars ? (
                     <div className='flex flex-col gap-5'>
                        <div className="text-lg font-medium">{item.category}</div>
                        <div className="flex items-end">
                           <div className="text-2xl font-bold mr-3">{item.score}</div>
                           <div className="space-y-1 w-24">
                              {[5, 4, 3, 2, 1].map(rating => (
                                 <div key={rating} className="flex items-center">
                                    <span className="w-3 text-right mr-1 text-xs">{rating}</span>
                                    <div className="flex-grow h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                       <div
                                          className={`h-full bg-black rounded-full ${rating === 5 ? 'w-full' : 'w-0'}`}
                                       ></div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-xl font-semibold mb-1">{item.score}</div>
                        <div className="mb-2 mt-2">{item.icon}</div>
                        <div className="text-m font-semibold">{item.category}</div>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
};

export default RatingCard;