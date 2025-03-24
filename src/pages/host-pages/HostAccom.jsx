import React, { useEffect, useState } from 'react'
import HostNav from '../../components/homehost-page/SwichHost/HostNav'
import ReloadLink from '../../utils/ReloadLink'
import { useNavigate } from 'react-router';
import { useAuth } from '@clerk/clerk-react';
import { deleteAccommodation, getAccom } from '../../api/accomApi';

function HostAccom() {
    const [accommodations, setAccommodations] = useState(() => []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { getToken } = useAuth();
    // const [accommodations, setAccommodations] = useState([
    //     {
    //         id: 1,
    //         title: "Cozy Apartment",
    //         description: "A comfortable place to relax.",
    //         typeOfAccommodation: "Apartment",
    //         img: "placeholder.jpg",
    //         quantityrooms: 2,
    //         quantitybeds: 3,
    //         quantitybathrooms: 1,
    //         guests: 4,
    //         price: "$100",
    //         address: "123 Main Street",
    //         city: "Bangkok",
    //         country: "Thailand",
    //     },
    // ]);
    const navigate = useNavigate();

     //ดึงข้อมูลที่พักจาก API เมื่อ Component โหลด
     useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken(); // ดึง token
                const response = await getAccom(token); // ID อาจเปลี่ยนตามเงื่อนไขของ API
                console.log('response', response.data.allMyAccom)
                setAccommodations(response.data.allMyAccom)
            } catch (err) {
                console.error("Error fetching accommodations:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (id) => {
        const accomToEdit = accommodations.find((accom) => accom.id === id);
        navigate(`host-center/host/accommodations/update/${id}`, { state: accomToEdit });
    };

    const handleDelete = async (id) => {
        try {
            const token = await getToken(); // Get the authentication token
            const response = await deleteAccommodation(token, id); // Call the delete API
    
            if (response.status === 200) {
                // Remove the deleted accommodation from the state
                const updatedAccommodations = accommodations.filter((accom) => accom.accommodationID !== id);
                setAccommodations(updatedAccommodations);
            } else {
                console.error("Failed to delete accommodation:", response.statusText);
            }
        } catch (err) {
            console.error("Error during deletion:", err.message);
        }
    };
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='h-full w-full flex flex-col gap-2 p-5 mb-20'>
            {/* Nav */}
            <div><HostNav /></div>
            {/* Listing */}
            <div className='flex justify-between mt-10 ml-10 mr-10 mb-8'>
                <h1 className='text-3xl font-semibold'>Your listing</h1>
                <ReloadLink to="/host-center/host/accommodations/add" className=" rounded-3xl p-4  bg-[#FF385C] text-white">Create new listing</ReloadLink>
            </div>

        {/* get all home */}
        <div className="overflow-x-auto ml-10 mr-10">
            <table className="table table-zebra">
            {/* head */}
            <thead>
             <tr>
                <th></th>
                <th>Name</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Address</th>
                <th>Country</th>
                <th></th>
            </tr>
            </thead>
              {/* card home */}
            <tbody className='border bg-gray-100 rounded-2xl p-4 shadow-xl m-4 hover:shadow-2xl'>
                {accommodations.map((accom) => (
                <tr key={accom.accommodationID}>
                    {/* <td><img src={accom?.imageUrl[0]} alt={accom.title} className='w-16 h-16 object-cover' /></td> */}
                    <td>{accom.title}</td>
                    <td>{accom.typeOfAccom}</td>
                    <td>{accom.availQTY} Rooms</td>
                    <td>{accom.pricePerNight}/night</td>
                    <td>{accom.addressDetail},{accom.city}</td>
                    <td>{accom.country}</td>
                    <td>
                    <button className='bg-blue-500 text-white p-2 rounded-md mr-2'
                        onClick={() => handleEdit(accom.accommodationID)}>Edit</button>
                    <button className='bg-red-500 text-white p-2 rounded-md'
                        onClick={() => handleDelete(accom.accommodationID)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div> 
        </div >
    )
}

export default HostAccom