import React, { useState } from 'react'
import HostNav from '../../components/homehost-page/HostNav'
import ReloadLink from '../../utils/ReloadLink'
import { useNavigate } from 'react-router';

function HostAccom() {
    const [accommodations, setAccommodations] = useState([
        {
            id: 1,
            title: "Cozy Apartment",
            description: "A comfortable place to relax.",
            typeOfAccommodation: "Apartment",
            img: "placeholder.jpg",
            quantityrooms: 2,
            quantitybeds: 3,
            quantitybathrooms: 1,
            guests: 4,
            price: "$100",
            address: "123 Main Street",
            city: "Bangkok",
            country: "Thailand",
        },
    ]);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        const accomToEdit = accommodations.find((accom) => accom.id === id);
        navigate(`/host-center/host/accommodations/update/:${id}`, { state: accomToEdit });
    };

    const handleDelete = (id) => {
        const updatedAccommodations = accommodations.filter((accom) => accom.id !== id);
        setAccommodations(updatedAccommodations);
    };
    return (
    <div className='h-full w-full flex flex-col gap-2 p-5 mb-20'>
        {/* Nav */}
        <div><HostNav/></div>
        {/* Listing */}
        <div className='flex justify-between mt-10 ml-10 mr-10 mb-8'>
            <h1 className='text-3xl font-semibold'>Your listing</h1>
            <ReloadLink to='/host-center/host/accommodations/add'
            className='text-lg text-white bg-[#FF385C] border rounded-md p-2'>Create a new House</ReloadLink>
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
                <th></th>
            </tr>
            </thead>
              {/* card home */}
            <tbody className='border bg-gray-100 rounded-2xl p-4 shadow-xl m-4 hover:shadow-2xl'>
                {accommodations.map((accom) => (
                <tr key={accom.id}>
                    <td><img src={accom.img} alt={accom.title} className='w-16 h-16 object-cover' /></td>
                    <td>{accom.title}</td>
                    <td>{accom.typeOfAccommodation}</td>
                    <td>{accom.quantityrooms} Rooms</td>
                    <td>{accom.price}/night</td>
                    <td>{accom.address}{accom.city}{accom.country}</td>
                    <td>
                    <button className='bg-blue-500 text-white p-2 rounded-md mr-2'
                        onClick={() => handleEdit(accom.id)}>Edit</button>
                    <button className='bg-red-500 text-white p-2 rounded-md'
                        onClick={() => handleDelete(accom.id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      
        {/* info */}
        {/* <div className='flex flex-col bg-gray-200 p-2'>
            <h1 className='text-2xl font-semibold'>Accom Name</h1>
            <p className='text-md font-semibold'>Description</p>
            <p className='text-xs font-semibold'>City, Country</p>
        </div> */}
        {/* Typeroom */}
        {/* <div className='bg-gray-500 p-4 text-2xl font-semibold'>Type room</div> */}
        {/* Quantity */}
        {/* <div className='bg-gray-500 p-4'>
            <h1 className='text-2xl font-semibold'>Quantit room</h1>
            <p className='text-md font-semibold'>Many guests </p>
        </div> */}
        {/* price */}
        {/* <div className='bg-gray-500 p-4 text-2xl font-semibold'>Price/night</div> */}

    </div>
    )
}

export default HostAccom