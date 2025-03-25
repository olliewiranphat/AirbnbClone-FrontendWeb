import { Bed, Grip, Heart, Share, Sofa, Toilet } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import GuestDropdown from '../GuestDropdown'
import CalendarBooking from '../CalendarBooking'
import Pic1 from "../../../image/bg-01.jpg"
import Pic2 from "../../../image/bg-payment.jpg"
import HostCard from '../HostCard'
import RatingCard from '../Rating'
import { useAuth } from '@clerk/clerk-react'
import { useParams } from 'react-router'
import axios from 'axios'
import ReloadLink from '../../utils/ReloadLink'
import MapComponent from '../../components/homehost-page/AddAccom/MapComponent'

function AccomDetail() {
   const { getToken } = useAuth()
   const { accommodationID } = useParams() // ดึง ID จาก URL parameters
   const [accommodation, setAccommodation] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchAccommodationDetail = async () => {
         try {
            setLoading(true)
            const token = await getToken()
            const response = await axios.get(`http://localhost:8081/user/accommodation-detail/${accommodationID}`, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })
            setAccommodation(response.data)
            setLoading(false)
         } catch (error) {
            console.error('Error fetching accommodation details:', error)
            setError('Failed to load accommodation details')
            setLoading(false)
         }
      }

      if (accommodationID) {
         fetchAccommodationDetail()
      }
   }, [accommodationID, getToken])

   if (loading) return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner text-secondary w-20 h-20"></span><p className='text-[22px] ml-4'>Loading</p><span className="loading loading-dots loading-lg ml-3 "></span></div>
   if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
   if (!accommodation) return <div className="flex justify-center items-center h-screen">Accommodation not found</div>

   // คำนวณราคาทั้งหมด (ตัวอย่าง)
   const nightsStay = 5 // สามารถเปลี่ยนให้มาจาก state ที่ผู้ใช้เลือกได้
   const cleaningFee = 15
   const serviceFee = 33
   const totalPrice = (accommodation.pricePerNight * nightsStay) + cleaningFee + serviceFee

   return (
      <div className="max-w-[1200px] mx-auto font-sans mt-10">

         {/* Header */}
         <header className="flex justify-between items-center p-1">
            <div className="flex items-center">
               <div className="flex space-x-4">
                  <p className="font-medium text-[28px]">{accommodation.title}</p>
               </div>
            </div>
            {/* Button Icon */}
            <div className="flex items-center space-x-2">
               <button className="btn btn-outline border-none"><Share /> Share</button>
               <button className="btn btn-outline border-none"><Heart /> Save</button>
            </div>
         </header>

         {/* Listing Title */}
         <div className="p-1">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-2 my-4 rounded-lg overflow-hidden">
               <div className="row-span-2 h-80 bg-gray-200 relative">
                  <img src={Pic1} alt="" />
                  <button className="btn btn-outline absolute bottom-0 right-4 bg-white rounded-md px-2 py-1 text-xs">
                     <Grip className='w-4 h-4' />
                     Show all photos
                  </button>
               </div>
               <div className="grid grid-cols-2 gap-2">
                  <div className="h-[9.5rem] bg-gray-200 mb-8">
                     <img src={Pic2} alt="" />
                  </div>
                  <div className="h-[9.5rem] bg-gray-200">
                     <img src={Pic2} alt="" />
                  </div>
                  <div className="h-[9.5rem] bg-gray-200">
                     <img src={Pic2} alt="" />
                  </div>
                  <div className="h-[9.5rem] bg-gray-200">
                     <img src={Pic2} alt="" />
                  </div>
               </div>
            </div>

            {/* Location and Host */}
            <div className="flex justify-between">
               <div className='flex flex-col'>
                  <h2 className="font-medium">Room in Villefranche, France</h2>
                  <div className="text-sm text-gray-500">
                     <span>2 beds · Private bathroom</span>
                  </div>
                  <div className="flex items-center mt-3">
                     <div className="flex">
                        <span className="text-sm">★ 4.97</span>
                        <span className="text-sm text-gray-500 mx-1">·</span>
                        <span className="text-sm text-gray-500">157 reviews</span>
                     </div>
                  </div>

                  {/* Avatar */}
                  <div className='mt-5 flex gap-5 border-t border-b'>
                     <div className='flex gap-5 mt-5 mb-5'>
                        <div className="avatar">
                           <div className="w-14 rounded-full">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                           </div>
                        </div>
                        <div>
                           <p className='font-bold'>{accommodation.host?.firstName} {accommodation.host?.lastName}</p>
                           <p className='text-slate-400'>Host since {accommodation.host?.createdAt ? new Date(accommodation.host.createdAt).toLocaleDateString() : "N/A"}</p>
                        </div>
                     </div>
                  </div>

                  {/* Detail room */}
                  <div>
                     <div className='mt-5 flex gap-5 items-center'>
                        <Bed />
                        <div className='flex flex-col'>
                           <p className='font-bold'>Bedrooms</p>
                           <p className='text-slate-400'>{accommodation.numBedrooms} Bedrooms</p>
                        </div>
                     </div>
                     <div className='mt-5 flex gap-5 items-center'>
                        <Toilet />
                        <div className='flex flex-col'>
                           <p className='font-bold'>Bathrooms</p>
                           <p className='text-slate-400'>{accommodation.numBathrooms} Bathrooms</p>
                        </div>
                     </div>
                  </div>

                  {/* Description room */}
                  <div className='mt-5 border-t w-[750px]'>
                     <p className='mt-6'>
                        {accommodation.description}
                     </p>
                  </div>

                  {/* <div className='mt-5 border-t w-[750px]'>
                     <p className='mt-6 font-bold text-[22px]'>Where you'll sleep</p>
                     <div className='flex gap-10 mt-8'>
                        {accommodation.Room && accommodation.Room.map((room, index) => (
                           <div key={index} className='w-[400px] h-full'>
                              <img src={Pic1} alt="" className='rounded-lg' />
                              <p className='mt-4 ml-2 font-medium text-[17px]'>
                                 {room.name || `Bedroom ${index + 1}`}
                              </p>
                              <p className='mt-1 ml-2 text-[16px]'>{room.bedType || "1 queen bed"}</p>
                           </div>
                        ))}
                     </div>
                  </div> */}

                  <div className='mt-5 border-t w-[750px]'>
                     <p className='mt-6 font-bold text-[22px]'>Where you’ll sleep</p>
                     <div className='flex gap-10 mt-8'>
                        <div className='w-[400px] h-full'>
                           <img src={Pic1} alt="" className='rounded-lg' />
                           <p className='mt-4 ml-2 font-medium text-[17px]'>
                              Bedroom 1
                           </p>
                           <p className='mt-1 ml-2 text-[16px]'>1 queen bed</p>
                        </div>
                        <div className='w-[400px] h-full'>
                           <img src={Pic1} alt="" className='rounded-lg' />
                           <p className='mt-4 ml-2 font-medium text-[17px]'>
                              Bedroom 1
                           </p>
                           <p className='mt-1 ml-2 text-[16px]'>1 queen bed</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Price Card */}
               <div className="border rounded-lg p-4 shadow-sm w-80 sticky h-[460px]">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <span className="font-semibold text-lg">${accommodation.pricePerNight}</span>
                        <span className="text-sm"> night</span>
                     </div>
                     <div className="flex items-center">
                        <span className="text-sm">★ {accommodation.Review?.length > 0
                           ? (accommodation.Review.reduce((sum, review) => sum + review.rating, 0) / accommodation.Review.length).toFixed(2)
                           : "N/A"}</span>
                        <span className="text-sm text-gray-500 mx-1">·</span>
                        <span className="text-sm text-gray-500">{accommodation.Review?.length || 0} Reviews</span>
                     </div>
                  </div>

                  <div className="border rounded-lg mb-4">
                     <CalendarBooking />
                     <div className="border-t p-2">
                        <GuestDropdown />
                     </div>
                  </div>

                  {/* <button className="btn btn-secondary w-full bg-rose-500 text-white py-4 rounded-lg font-medium mb-4">
                     Reserve
                  </button> */}
                  <ReloadLink to={`/booking`} className="btn btn-secondary w-full bg-rose-500 text-white py-4 rounded-lg font-medium mb-4">
                     Reserve
                  </ReloadLink>

                  <div className="text-center text-sm mb-4">You won't be charged yet</div>

                  <div className="space-y-2">
                     <div className="flex justify-between">
                        <span className="underline">${accommodation.pricePerNight} x {nightsStay} nights</span>
                        <span>${accommodation.pricePerNight * nightsStay}</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="underline">Cleaning service fee</span>
                        <span>${cleaningFee}</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="underline">Airbnb service fee</span>
                        <span>${serviceFee}</span>
                     </div>
                  </div>

                  <div className="border-t mt-4 pt-4">
                     <div className="flex justify-between font-semibold">
                        <span>Total before taxes</span>
                        <span>${totalPrice}</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Host Info */}
            <div className="flex items-center mt-6 border-t pt-6 gap-4">
               <div className="avatar">
                  <div className="w-14 rounded-full">
                     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
               </div>
               <div>
                  <div className="font-medium">{accommodation.host?.firstName} {accommodation.host?.lastName}</div>
                  <div className="text-sm text-gray-500">Host since {accommodation.host?.createdAt ? new Date(accommodation.host.createdAt).toLocaleDateString() : "N/A"}</div>
               </div>
            </div>

            {/* Features */}
            {/* <div className="mt-8">
               <h2 className="text-xl font-medium mb-4">What this place offers</h2>
               <div className="grid grid-cols-2 gap-y-4">
                  {accommodation.AccomAmen && accommodation.AccomAmen.slice(0, 4).map((amenity, index) => (
                     <div key={index} className="flex items-center">
                        {index === 0 && (
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                              <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                              <path d="M5 11V7a7 7 0 0114 0v4" stroke="currentColor" strokeWidth="2" />
                           </svg>
                        )}
                        {index === 1 && (
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                              <path d="M8 3v2M16 3v2M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                        )}
                        {index === 2 && (
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                              <path d="M9 22V12h6v10M2 12h20M2 7a2 2 0 012-2h16a2 2 0 012 2v15H4a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                        )}
                        {index === 3 && (
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" />
                              <path d="M8 11a1 1 0 100-2 1 1 0 000 2zM16 11a1 1 0 100-2 1 1 0 000 2zM12 16a4 4 0 01-4-4h8a4 4 0 01-4 4z" stroke="currentColor" strokeWidth="2" />
                           </svg>
                        )}
                        <span>{amenity.amenityID}</span>
                     </div>
                  ))}
               </div>
               <button className="border border-gray-800 rounded-lg px-4 py-2 mt-4 text-sm font-medium">
                  Show all {accommodation.AccomAmen?.length || 0} amenities
               </button>
            </div> */}
            <div className="mt-8">
               <h2 className="text-xl font-medium mb-4">What this place offers</h2>
               <div className="grid grid-cols-2 gap-y-4">
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M5 11V7a7 7 0 0114 0v4" stroke="currentColor" strokeWidth="2" />
                     </svg>
                     <span>Lock on bedroom door</span>
                  </div>
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M8 3v2M16 3v2M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                     <span>Free cancellation before Apr 29</span>
                  </div>
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M9 22V12h6v10M2 12h20M2 7a2 2 0 012-2h16a2 2 0 012 2v15H4a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                     <span>Wifi</span>
                  </div>
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 11a1 1 0 100-2 1 1 0 000 2zM16 11a1 1 0 100-2 1 1 0 000 2zM12 16a4 4 0 01-4-4h8a4 4 0 01-4 4z" stroke="currentColor" strokeWidth="2" />
                     </svg>
                     <span>Kitchen</span>
                  </div>
               </div>
               <button className="border border-gray-800 rounded-lg px-4 py-2 mt-4 text-sm font-medium">
                  Show all 27 amenities
               </button>
            </div>

            {/* Reviews */}
            <div className="mt-8 border-t pt-8">
               <div className="flex items-center mb-4">
                  <span className="text-xl font-medium">★ 4.97  ·  157 reviews</span>
               </div>
               {/* <div className="flex items-center mb-4">
                  <span className="text-xl font-medium">★ {accommodation.Review?.length > 0
                     ? (accommodation.Review.reduce((sum, review) => sum + review.rating, 0) / accommodation.Review.length).toFixed(2)
                     : "N/A"} · {accommodation.Review?.length || 0} reviews</span>
               </div> */}

               <div>
                  <RatingCard reviews={accommodation.Review || []} />
               </div>

               {/* Review Cards */}
               {/* <div className="grid grid-cols-2 gap-8 mt-7">
                  {accommodation.Review && accommodation.Review.slice(0, 2).map((review, index) => (
                     <div key={index} className="mb-6">
                        <div className="flex items-center mb-2 gap-3">
                           <div className="avatar">
                              <div className="w-14 rounded-full">
                                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                              </div>
                           </div>
                           <div>
                              <div className="font-medium">{review.userID}</div>
                              <div className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                           </div>
                        </div>
                        <p className="text-sm">{review.comment}</p>
                        <button className="text-sm font-medium underline mt-2">Show more</button>
                     </div>
                  ))}
               </div>

               <button className="border border-gray-800 rounded-lg px-4 py-2 mt-4 text-sm font-medium">
                  Show all {accommodation.Review?.length || 0} reviews
               </button> */}
               {/* Review Cards */}
               <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="mb-6">
                     <div className="flex items-center mb-2 gap-5">
                        <div className="avatar">
                           <div className="w-14 rounded-full">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                           </div>
                        </div>
                        <div>
                           <div className="font-medium">Daniel</div>
                           <div className="text-sm text-gray-500">October 2022</div>
                        </div>
                     </div>
                     <p className="text-sm">Great location, comfortable room, and excellent host. Would definitely stay again!</p>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>

                  <div className="mb-6">
                     <div className="flex items-center mb-2 gap-5">
                        <div className="avatar">
                           <div className="w-14 rounded-full">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                           </div>
                        </div>
                        <div>
                           <div className="font-medium">Emma</div>
                           <div className="text-sm text-gray-500">September 2022</div>
                        </div>
                     </div>
                     <p className="text-sm">The room is exactly as pictured. Nathan was a great host and the location is perfect for exploring the area.</p>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>
               </div>

               <button className="border border-gray-800 rounded-lg px-4 py-2 mt-4 text-sm font-medium">
                  Show all 157 reviews
               </button>
            </div>

            {/* Location */}
            <div className="mt-8 border-t pt-8">
               <h2 className="text-2xl font-semibold mb-4">Where you'll be</h2>
               <div className="text-m mb-4">{accommodation.location || "Address information not available"}</div>

               <div className="h-80 bg-gray-200 rounded-lg mb-4 relative">
                  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#FF385C" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" stroke="#FF385C" strokeWidth="2" />
                     </svg>
                  </div> */}

                  <MapComponent />
               </div>
            </div>

            {/* Host */}
            <div className="mt-18 border-t pt-8">
               <HostCard host={accommodation.host} />
            </div>

            {/* Things to know */}
            <div className="mt-8 border-t pt-8">
               <h2 className="text-xl font-medium mb-4">Things to know</h2>

               <div className="grid grid-cols-3 gap-8">
                  <div>
                     <h3 className="font-medium mb-2">House rules</h3>
                     <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                           <span>Check-in: {accommodation.checkInTime || "3:00 PM - 8:00 PM"}</span>
                        </li>
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                           <span>Checkout before {accommodation.checkOutTime || "10:00 AM"}</span>
                        </li>
                     </ul>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>

                  <div>
                     <h3 className="font-medium mb-2">Safety & property</h3>
                     <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                           </svg>
                           <span>No carbon monoxide alarm</span>
                        </li>
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                           </svg>
                           <span>Smoke alarm</span>
                        </li>
                     </ul>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>

                  <div>
                     <h3 className="font-medium mb-2">Cancellation policy</h3>
                     <p className="text-sm mb-2">{accommodation.cancellationPolicy || "Free cancellation before Apr 29. Cancellation after that will not receive a refund."}</p>
                     <button className="text-sm font-medium underline">Show more</button>
                  </div>
               </div>
            </div>
         </div>

         {/* Footer */}
         <footer className="mt-8 border-t pt-8 pb-8 text-sm text-gray-500">
            <div className="grid grid-cols-4 gap-8 mb-8">
               <div>
                  <h3 className="font-medium text-gray-800 mb-4">Support</h3>
                  <ul className="space-y-2">
                     <li>Help Center</li>
                     <li>AirCover</li>
                     <li>Safety information</li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-medium text-gray-800 mb-4">Hosting</h3>
                  <ul className="space-y-2">
                     <li>Airbnb your home</li>
                     <li>AirCover for Hosts</li>
                     <li>Hosting resources</li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-medium text-gray-800 mb-4">Airbnb</h3>
                  <ul className="space-y-2">
                     <li>Newsroom</li>
                     <li>New features</li>
                     <li>Careers</li>
                  </ul>
               </div>
            </div>

            <div className="flex justify-between pt-4 border-t">
               <div className="flex space-x-4">
                  <span>© 2023 Airbnb, Inc.</span>
                  <span>·</span>
                  <span>Terms</span>
                  <span>·</span>
                  <span>Sitemap</span>
                  <span>·</span>
                  <span>Privacy</span>
               </div>

               <div className="flex items-center space-x-4">
                  <span>English (US)</span>
                  <span>$ USD</span>
                  <div className="flex space-x-2">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                        <circle cx="18" cy="6" r="1" fill="currentColor" />
                     </svg>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default AccomDetail