import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import WhereDest from './home-nav/WhereDest';
import bookingStore from '../../../store/bookingStore';
import guestStore from '../../../store/guestStore';

function HomeNav() {
  const { bookingSelect, setBookingSelect } = bookingStore();
  const { guestSelect, incrementCount, decrementCount, clearGuestSelect } = guestStore();

  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  // Refs สำหรับ Modal
  const checkInModalRef = useRef(null);
  const checkOutModalRef = useRef(null);
  const guestModalRef = useRef(null);

  // ตรวจจับการคลิกด้านนอก Modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // ปิด Check-in Modal หากคลิกด้านนอก
      if (checkInModalRef.current && !checkInModalRef.current.contains(event.target)) {
        setIsCheckInOpen(false);
      }
      // ปิด Check-out Modal หากคลิกด้านนอก
      if (checkOutModalRef.current && !checkOutModalRef.current.contains(event.target)) {
        setIsCheckOutOpen(false);
      }
      // ปิด Guest Modal หากคลิกด้านนอก
      if (guestModalRef.current && !guestModalRef.current.contains(event.target)) {
        setIsGuestOpen(false);
      }
    };

    // เพิ่ม event listener สำหรับ mousedown
    document.addEventListener('mousedown', handleClickOutside);

    // ลบ event listener เมื่อ component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (ranges) => {
    setBookingSelect({
      checkIn: ranges.selection.startDate,
      checkOut: ranges.selection.endDate,
    });
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
  };

  const clearDate = (type) => {
    if (type === 'checkIn') {
      setBookingSelect({ ...bookingSelect, checkIn: null });
      setIsCheckInOpen(false);
    } else if (type === 'checkOut') {
      setBookingSelect({ ...bookingSelect, checkOut: null });
      setIsCheckOutOpen(false);
    }
  };

  // ตรวจสอบว่ามีผู้เข้าพักหรือไม่
  const hasGuests =
    guestSelect.adults > 0 ||
    guestSelect.children > 0 ||
    guestSelect.infants > 0 ||
    guestSelect.pets > 0;

  return (
    <div className="w-[66%] relative h-[66px] mx-auto rounded-full border border-gray-300 shadow-md flex justify-between items-center flex-wrap">
      {/* WHERE */}
      <div className="w-[30%] pl-8 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300 justify-between">
        <WhereDest />
      </div>

      {/* CHECKIN */}
      <div
        className="justify-between w-full flex-1 py-2 pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300 relative"
        onClick={() => {
          setIsCheckInOpen(!isCheckInOpen);
          setIsCheckOutOpen(false); // ปิด Check-out เมื่อเปิด Check-in
        }}
      >
        <div className="flex flex-col">
          <span className="text-[12px] strong">Check in</span>
          <div className="flex items-center">
            <span className="text-[14px] text-[#FF1493]">
              {bookingSelect.checkIn ? format(bookingSelect.checkIn, 'MM/dd/yyyy') : 'Add date'}
            </span>
            {isCheckInOpen && (
              <button
                className="ml-2 text-red-500"
                onClick={(e) => {
                  e.stopPropagation(); // หยุดการเปิด Date Picker เมื่อกดปุ่ม "x"
                  clearDate('checkIn');
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        <div className="w-[5px] h-[30px] border-r-[1px] border-gray-300"></div>

        {/* Date Picker Modal สำหรับ Check-in */}
        {isCheckInOpen && (
          <div
            className="absolute top-[100%] left-0 z-20 bg-white p-4 shadow-lg rounded-lg"
            ref={checkInModalRef} // เพิ่ม ref สำหรับ Check-in Modal
          >
            <DateRange
              ranges={[
                {
                  startDate: bookingSelect.checkIn || new Date(),
                  endDate: bookingSelect.checkOut || new Date(),
                  key: 'selection',
                },
              ]}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              rangeColors={['#ff385c']}
            />
          </div>
        )}
      </div>

      {/* CHECKOUT */}
      <div
        className="justify-between w-full flex-1 py-2 pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300 relative"
        onClick={() => {
          setIsCheckOutOpen(!isCheckOutOpen);
          setIsCheckInOpen(false); // ปิด Check-in เมื่อเปิด Check-out
        }}
      >
        <div className="flex flex-col">
          <span className="text-[12px] strong">Check out</span>
          <div className="flex items-center">
            <span className="text-[14px] text-[#FF1493]">
              {bookingSelect.checkOut ? format(bookingSelect.checkOut, 'MM/dd/yyyy') : 'Add date'}
            </span>
            {isCheckOutOpen && (
              <button
                className="ml-2 text-red-500"
                onClick={(e) => {
                  e.stopPropagation(); // หยุดการเปิด Date Picker เมื่อกดปุ่ม "x"
                  clearDate('checkOut');
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        <div className="w-[5px] h-[30px] border-r-[1px] border-gray-300"></div>

        {/* Date Picker Modal สำหรับ Check-out */}
        {isCheckOutOpen && (
          <div
            className="absolute top-[100%] left-0 z-20 bg-white p-4 shadow-lg rounded-lg"
            ref={checkOutModalRef} // เพิ่ม ref สำหรับ Check-out Modal
          >
            <DateRange
              ranges={[
                {
                  startDate: bookingSelect.checkIn || new Date(),
                  endDate: bookingSelect.checkOut || new Date(),
                  key: 'selection',
                },
              ]}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              rangeColors={['#ff385c']}
            />
          </div>
        )}
      </div>

      {/* WHOGUEST */}
      <div
        className="flex-1 pl-6 pr-2 h-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:rounded-full relative"
        onClick={() => setIsGuestOpen(!isGuestOpen)}
      >
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold">Who</span>
          <div className="flex items-center">
            <span className="text-[14px] text-[#6a6a6a]">
              {hasGuests
                ? `${guestSelect.adults + guestSelect.children} guests, ${guestSelect.infants} infants, ${guestSelect.pets} pets`
                : 'Add guest'}
            </span>
            {isGuestOpen && (
              <button
                className="ml-2 text-red-500"
                onClick={(e) => {
                  e.stopPropagation(); // หยุดการเปิด Guest Modal เมื่อกดปุ่ม "x"
                  clearGuestSelect();
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        {/* Guest Modal */}
        {isGuestOpen && (
          <div
            className="absolute top-[100%] left-0 z-20 bg-white p-4 shadow-lg rounded-lg w-[300px]"
            ref={guestModalRef} // เพิ่ม ref สำหรับ Guest Modal
          >
            {/* Adults */}
            <GuestRow
              label="Adults"
              description="Ages 13 or above"
              value={guestSelect.adults}
              increment={() => incrementCount('adults')}
              decrement={() => decrementCount('adults')}
            />
            {/* Children */}
            <GuestRow
              label="Children"
              description="Ages 2–12"
              value={guestSelect.children}
              increment={() => incrementCount('children')}
              decrement={() => decrementCount('children')}
            />
            {/* Infants */}
            <GuestRow
              label="Infants"
              description="Under 2"
              value={guestSelect.infants}
              increment={() => incrementCount('infants')}
              decrement={() => decrementCount('infants')}
            />
            {/* Pets */}
            <GuestRow
              label="Pets"
              description="Bringing a service animal?"
              value={guestSelect.pets}
              increment={() => incrementCount('pets')}
              decrement={() => decrementCount('pets')}
            />
          </div>
        )}
      </div>

      {/* SEARCH BUTTON */}
      <button
        className="rounded-full mr-2 bg-[#FF385C] hover:bg-[#dd1062] flex justify-center items-center h-[47px] w-[47px]"
        onClick={() => console.log('Searching with:', guestSelect)}
      >
        <Search size={18} color="white" />
      </button>
    </div>
  );
}

function GuestRow({ label, description, value, increment, decrement }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="font-semi-bold">{label}</span>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex items-center">
        {/* Decrement Button */}
        <button
          className={`px-2  border rounded-full ${value === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            decrement();
          }}
          disabled={value === 0}
        >
          -
        </button>

        {/* Value Display */}
        <span className="mx-2">{value}</span>

        {/* Increment Button */}
        <button
          className="px-2 border rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            increment();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default HomeNav;