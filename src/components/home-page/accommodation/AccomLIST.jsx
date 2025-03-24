import React, { useEffect } from 'react';
import AccomITEM from './AccomITEM'; // ตรวจสอบ path ให้ถูกต้อง
import useAdminStore from '../../../store/AdminStore'; // ตรวจสอบ path ให้ถูกต้อง
import { useAuth } from '@clerk/clerk-react'; // ตรวจสอบ path ให้ถูกต้อง

function AccomLIST({ searchResults }) {
  const { getToken } = useAuth();
  const actionGetAccomAmen = useAdminStore((state) => state.actionGetAllAccommodations);
  const allAccomAmen = useAdminStore((state) => state.allAccommodatons);

  // ใช้ searchResults ถ้ามีการค้นหา มิฉะนั้นใช้ allAccomAmen
  const accommodationsToDisplay = searchResults || allAccomAmen;

  // ดึงข้อมูลที่พักทั้งหมดเมื่อ component ถูกโหลด
  useEffect(() => {
    const fetchAccomAmen = async () => {
      const token = await getToken();
      actionGetAccomAmen(token);
    };
    fetchAccomAmen();
  }, [actionGetAccomAmen, getToken]);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-[40px] py-6'>
        {accommodationsToDisplay?.map((item) => (
          <AccomITEM
            key={item.accommodationID}
            imageUrl={item.Room.length > 0 ? item?.Room[0].ImgsRoom[0].imageUrl : ""}
            accommodationID={item.accommodationID}
            title={item.title}
            city={item.city}
            country={item.country}
            addressDetail={item.addressDetail}
            pricePerNight={item.pricePerNight}
            // rating={item?.Review[0].rating} // ถ้ามี rating
          />
        ))}
      </div>
    </>
  );
}

export default AccomLIST;