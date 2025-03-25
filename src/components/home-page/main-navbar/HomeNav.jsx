import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import WhereDest from './home-nav/WhereDest';
import bookingStore from '../../../store/bookingStore';
import guestStore from '../../../store/guestStore';
import axios from 'axios';


function HomeNav({ onSearch }) { // รับ props onSearch


  const [searchQuery, setSearchQuery] = useState(''); // เพิ่ม state สำหรับ searchQuery
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const { bookingSelect, setBookingSelect } = bookingStore();
  const { guestSelect, incrementCount, decrementCount, clearGuestSelect: clearGuestSelectStore } = guestStore();

  const [openModal, setOpenModal] = useState(null);
  const [filters, setFilters] = useState({
    checkIn: null,
    checkOut: null,
    guests: { adults: 0, children: 0, infants: 0, pets: 0 },
  });

  const modalRefs = {
    checkIn: useRef(null),
    checkOut: useRef(null),
    guest: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = Object.entries(modalRefs).every(
        ([key, ref]) => ref.current && !ref.current.contains(event.target)
      );
      if (clickedOutside && openModal) setOpenModal(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openModal]);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setBookingSelect({ checkIn: startDate, checkOut: endDate });
    setFilters(prev => ({ ...prev, checkIn: startDate, checkOut: endDate }));
    console.log('Date selected:', startDate, 'to', endDate);
    setOpenModal(null);
  };

  const clearDate = (type) => {
    setBookingSelect(prev => ({ ...prev, [type]: null }));
    setFilters(prev => ({ ...prev, [type]: null }));
    console.log(`${type} date cleared`);
    setOpenModal(null);
  };

  const clearGuestSelect = () => {
    clearGuestSelectStore();
    setFilters(prev => ({
      ...prev,
      guests: { adults: 0, children: 0, infants: 0, pets: 0 }
    }));
    console.log('Guest selection cleared');
    setOpenModal(null);
  };

  const handleGuestChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      guests: { ...prev.guests, [type]: value }
    }));
    console.log(`Guest ${type} changed to ${value}`);
  };

  const handleSearch = async () => {
    try {
        const params = {
            city: searchQuery, // ใช้ searchQuery เป็น city
            checkIn: filters.checkIn ? format(filters.checkIn, 'yyyy-MM-dd') : null,
            checkOut: filters.checkOut ? format(filters.checkOut, 'yyyy-MM-dd') : null,
            maxGuests: filters.guests.adults + filters.guests.children,
        };

        // ใช้ endpoint ที่ถูกต้องสำหรับการค้นหา
        const { data } = await axios.get('http://localhost:8081/user/search-accommodations', { params });
        console.log('API response:', data);

        // เรียกใช้ onSearch และส่งผลลัพธ์การค้นหาไปยัง parent component
        if (onSearch) {
            onSearch(data.accommodations);
        } else {
            console.error('onSearch is not defined');
        }
    } catch (error) {
        console.error('Error searching:', error);
    }
};

  const hasGuests = Object.values(guestSelect).some(val => val > 0);
  const guestSummary = hasGuests
    ? `${filters.guests.adults + filters.guests.children} guests, ${filters.guests.infants} infants, ${filters.guests.pets} pets`
    : 'Add guest';

  return (
    <div className="w-[66%] relative h-[66px] mx-auto rounded-full border border-gray-300 shadow-md flex justify-between items-center flex-wrap">
      <div className="w-[30%] pl-8 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300 justify-between">
        {/* ส่ง searchQuery และ onSearchQueryChange ไปยัง WhereDest */}
        <WhereDest searchQuery={searchQuery} onSearchQueryChange={(query) => setSearchQuery(query)} />
      </div>

      {/* Check-in section */}
      <div
        className="justify-between w-full flex-1 py-2 pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300 relative"
        onClick={() => setOpenModal(openModal === 'checkIn' ? null : 'checkIn')}
      >
        <div className="flex flex-col">
          <span className="text-[12px] strong">Check in</span>
          <div className="flex items-center">
            <span className="text-[14px] text-[#FF1493]">
              {bookingSelect.checkIn ? format(bookingSelect.checkIn, 'MM/dd/yyyy') : 'Add date'}
            </span>
            {openModal === 'checkIn' && (
              <button className="ml-2 text-red-500" onClick={(e) => {
                e.stopPropagation();
                clearDate('checkIn');
              }}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        <div className="w-[5px] h-[30px] border-r-[1px] border-gray-300"></div>

        {openModal === 'checkIn' && (
          <div className="absolute top-[100%] left-0 z-20 bg-white p-4 shadow-lg rounded-lg" ref={modalRefs.checkIn}>
            <DateRange
              ranges={[{
                startDate: bookingSelect.checkIn || new Date(),
                endDate: bookingSelect.checkOut || new Date(),
                key: 'selection'
              }]}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              rangeColors={['#ff385c']}
            />
          </div>
        )}
      </div>

      {/* Check-out section */}
      <div
        className="justify-between w-full flex-1 py-2 pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300 relative"
        onClick={() => setOpenModal(openModal === 'checkOut' ? null : 'checkOut')}
      >
        <div className="flex flex-col">
          <span className="text-[12px] strong">Check out</span>
          <div className="flex items-center">
            <span className="text-[14px] text-[#FF1493]">
              {bookingSelect.checkOut ? format(bookingSelect.checkOut, 'MM/dd/yyyy') : 'Add date'}
            </span>
            {openModal === 'checkOut' && (
              <button className="ml-2 text-red-500" onClick={(e) => {
                e.stopPropagation();
                clearDate('checkOut');
              }}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        <div className="w-[5px] h-[30px] border-r-[1px] border-gray-300"></div>

        {openModal === 'checkOut' && (
          <div className="absolute top-[100%] left-0 z-20 bg-white p-4 shadow-lg rounded-lg" ref={modalRefs.checkOut}>
            <DateRange
              ranges={[{
                startDate: bookingSelect.checkIn || new Date(),
                endDate: bookingSelect.checkOut || new Date(),
                key: 'selection'
              }]}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              rangeColors={['#ff385c']}
            />
          </div>
        )}
      </div>

      {/* Guest section */}
      <div
        className="flex-1 pl-6 pr-2 h-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:rounded-full relative"
        onClick={() => setOpenModal(openModal === 'guest' ? null : 'guest')}
      >
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold">Who</span>
          <div className="flex items-center">
            <span className="text-[14px] text-[#6a6a6a]">{guestSummary}</span>
            {openModal === 'guest' && (
              <button className="ml-2 text-red-500" onClick={(e) => {
                e.stopPropagation();
                clearGuestSelect();
              }}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {openModal === 'guest' && (
          <div className="absolute top-[100%] left-0 z-20 bg-white p-4 shadow-lg rounded-lg w-[300px]" ref={modalRefs.guest}>
            {['adults', 'children', 'infants', 'pets'].map(type => (
              <GuestRow
                key={type}
                label={type.charAt(0).toUpperCase() + type.slice(1)}
                description={
                  type === 'adults' ? 'Ages 13 or above' :
                    type === 'children' ? 'Ages 2–12' :
                      type === 'infants' ? 'Under 2' : 'Bringing a service animal?'
                }
                value={filters.guests[type]}
                increment={() => {
                  incrementCount(type);
                  handleGuestChange(type, filters.guests[type] + 1);
                }}
                decrement={() => {
                  decrementCount(type);
                  handleGuestChange(type, filters.guests[type] - 1);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Search button */}
      <button
        className="rounded-full mr-2 bg-[#FF385C] hover:bg-[#dd1062] flex justify-center items-center h-[47px] w-[47px]"
        onClick={() => {
          console.log('Search button clicked');
          handleSearch();
        }}
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
        <button
          className={`px-2 border rounded-full ${value === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => { e.stopPropagation(); decrement(); }}
          disabled={value === 0}
        >
          -
        </button>
        <span className="mx-2">{value}</span>
        <button
          className="px-2 border rounded-full"
          onClick={(e) => { e.stopPropagation(); increment(); }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default HomeNav;

