import React, { useState } from 'react';

const CalendarBooking = () => {
   const [startDate, setStartDate] = useState(null);
   const [endDate, setEndDate] = useState(null);
   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
   const [isOpen, setIsOpen] = useState(false);

   const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

   const getDaysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
   };

   const getFirstDayOfMonth = (month, year) => {
      return new Date(year, month, 1).getDay();
   };

   const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
   ];

   const handleDateClick = (day) => {
      const selectedDate = new Date(currentYear, currentMonth, day);

      if (!startDate) {
         setStartDate(selectedDate);
         setEndDate(null); // Reset end date when start date is changed
      } else if (!endDate && selectedDate > startDate) {
         setEndDate(selectedDate);
      } else {
         setStartDate(selectedDate);
         setEndDate(null);
      }
   };

   const isDateSelected = (day) => {
      const currentDate = new Date(currentYear, currentMonth, day);
      return (
         (startDate && currentDate.toDateString() === startDate.toDateString()) ||
         (endDate && currentDate.toDateString() === endDate.toDateString())
      );
   };

   const isDateInRange = (day) => {
      if (!startDate || !endDate) return false;
      const currentDate = new Date(currentYear, currentMonth, day);
      return currentDate > startDate && currentDate < endDate;
   };

   const goToPreviousMonth = () => {
      if (currentMonth === 0) {
         setCurrentMonth(11);
         setCurrentYear(currentYear - 1);
      } else {
         setCurrentMonth(currentMonth - 1);
      }
   };

   const goToNextMonth = () => {
      if (currentMonth === 11) {
         setCurrentMonth(0);
         setCurrentYear(currentYear + 1);
      } else {
         setCurrentMonth(currentMonth + 1);
      }
   };

   const clearDates = () => {
      setStartDate(null);
      setEndDate(null);
   };

   const formatDate = (date) => {
      if (!date) return '';
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
   };

   const handleClose = () => {
      setIsOpen(false);
   };

   if (!isOpen) {
      return (
         <button
            onClick={() => setIsOpen(true)}
         // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         >
            {/* className="grid grid-cols-2 divide-x" */}
            <div className='flex m-0 p-0 divide-x justify-start justify-items-start'>
               <div className="p-2">
                  <div className="text-xs font-bold">CHECK-IN</div>
                  <input
                     type="text"
                     value={formatDate(startDate)}
                     readOnly
                     className="border rounded px-2 py-1 w-24 border-none"
                     placeholder='Add date'
                  />
               </div>
               <div className="p-2">
                  <div className="text-xs font-bold">CHECKOUT</div>
                  <input
                     type="text"
                     value={formatDate(endDate)}
                     readOnly
                     className="border rounded px-2 py-1 w-24 border-none"
                     placeholder='Add date'
                  />
               </div>
            </div>
         </button>
      );
   }

   return (
      <div className="flex flex-col items-center p-4 absolute z-10 mr-30">
         <div className="bg-white rounded-lg shadow-md p-4 w-96">
            <div className="flex justify-between mb-4">
               <div>
                  {startDate && endDate ? (
                     `${Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))} nights`
                  ) : (
                     'Select Dates'
                  )}
               </div>
               {/* <div>
                  <span className="mr-2">CHECK-IN</span>
                  <input
                     type="text"
                     value={formatDate(startDate)}
                     readOnly
                     className="border rounded px-2 py-1 w-24"
                  />
                  <button className="ml-1 text-gray-500">x</button>
                  <span className="ml-4 mr-2">CHECKOUT</span>
                  <input
                     type="text"
                     value={formatDate(endDate)}
                     readOnly
                     className="border rounded px-2 py-1 w-24"
                  />
                  <button className="ml-1 text-gray-500">x</button>
               </div> */}
            </div>

            <div className="flex justify-between items-center mb-4">
               <button onClick={goToPreviousMonth}>{'<'}</button>
               <span>{months[currentMonth]} {currentYear}</span>
               <button onClick={goToNextMonth}>{'>'}</button>
            </div>

            <table className="w-full">
               <thead>
                  <tr>
                     {daysOfWeek.map((day) => (
                        <th key={day} className="text-center p-1">
                           {day}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {Array(
                     Math.ceil(
                        (getFirstDayOfMonth(currentMonth, currentYear) +
                           getDaysInMonth(currentMonth, currentYear)) /
                        7
                     )
                  )
                     .fill(null)
                     .map((_, weekIndex) => (
                        <tr key={weekIndex}>
                           {Array(7)
                              .fill(null)
                              .map((_, dayIndex) => {
                                 const day =
                                    weekIndex * 7 +
                                    dayIndex -
                                    getFirstDayOfMonth(currentMonth, currentYear) +
                                    1;
                                 const isValidDay =
                                    day > 0 && day <= getDaysInMonth(currentMonth, currentYear);
                                 return (
                                    <td
                                       key={dayIndex}
                                       className={`text-center p-1 cursor-pointer ${isValidDay
                                          ? isDateSelected(day)
                                             ? 'bg-black text-white rounded-full'
                                             : isDateInRange(day)
                                                ? 'bg-slate-200'
                                                : 'hover:bg-gray-100'
                                          : 'text-gray-300'
                                          }`}
                                       onClick={() => isValidDay && handleDateClick(day)}
                                    >
                                       {isValidDay ? day : ''}
                                    </td>
                                 );
                              })}
                        </tr>
                     ))}
               </tbody>
            </table>

            <div className="flex justify-end mt-4 gap-3">
               <button onClick={clearDates} className="btn btn-outline">Clear dates</button>
               <button onClick={handleClose} className="btn btn-outline">Close</button>
            </div>
         </div>
      </div>
   );
};

export default CalendarBooking;