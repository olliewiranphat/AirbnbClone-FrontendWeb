import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import useAdminStore from '../../store/useAdminStore';

function AllAmenity() {
  const { getToken } = useAuth();
  const actionGetAmenity = useAdminStore(state => state.actionGetAmenity);
  const actionCreateAmenity = useAdminStore(state => state.actionCreateAmenity);
  const actionDeleteAmenity = useAdminStore(state => state.actionDeleteAmenity);
  const actionUpdateAmenity = useAdminStore(state => state.actionUpdateAmenity);

  const [allAmenity, setAllAmenity] = useState([]);

  const [newAmenity, setNewAmenity] = useState('');
  const [editAmenity, setEditAmenity] = useState(null);
  const [updatedName, setUpdatedName] = useState('');

  useEffect(() => {
   
    fetchAmenity();
  }, []);

  const fetchAmenity = async () => {
    const token = await getToken();
    const results = await actionGetAmenity(token);
    setAllAmenity(results);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newAmenity.trim()) return;
    console.log('newAmenity', newAmenity)
    const token = await getToken();
    const createdAmenity = await actionCreateAmenity(token, newAmenity);
    if (createdAmenity) {
      setAllAmenity(prev => [...prev, createdAmenity]);
      setNewAmenity('');
    }
  };

  const handleDelete = async (amenityID) => {
    const token = await getToken();
    await actionDeleteAmenity(token, amenityID);
    fetchAmenity()
  };

  const handleUpdate = async (amenityID) => {
    if (!updatedName.trim()) return;

    const token = await getToken();
    const updatedAmenity = await actionUpdateAmenity(token, amenityID, updatedName);

    if (updatedAmenity) {
      setAllAmenity(prev => prev.map(item =>
        item.amenityID === amenityID ? { ...item, name: updatedName } : item
      ));
    }
    setEditAmenity(null);
  };

  return (
    <div className='w-full p-4 flex flex-col flex-wrap h-full gap-2'>
      <span className='text-2xl font-bold mt-4'>All Categories</span>
      <div className='w-full flex justify-center '>
        <div className='w-[70%] mt-4 border border-gray-400 rounded-md p-4 '>
          <div className='grid grid-cols-4 text-[14px] font-semibold border-gray-400 border-b-[1px] pb-2 text-center'>
            <div className='w-full'>ID</div>
            <div className='w-full'>Category</div>
            <div className='w-full'>Edit</div>
            <div className='w-full'>Delete</div>
          </div>

          {allAmenity.map((el) => (
            <div key={el.amenityID} className='grid grid-cols-4 text-[14px] border-b-[1px] py-2 text-center items-center'>
              <div>{el.amenityID}</div>
              <div className='px-2'>
                {editAmenity === el.amenityID ? (
                  <input
                    type='text'
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                    className='p-1 border rounded-md w-full'
                  />
                ) : (
                    el.name
                  )}
              </div>
              <div>
                {editAmenity === el.amenityID ? (
                  <button onClick={() => handleUpdate(el.amenityID)} className='text-green-500'>Save</button>
                ) : (
                    <button onClick={() => { setEditAmenity(el.amenityID); setUpdatedName(el.name); }} className='text-blue-500'>Update</button>
                  )}
              </div>
              <div>
                <button onClick={() => handleDelete(el.amenityID)} className='text-red-500'>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className='ml-7'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[300px] mt-4 p-5 border rounded-md border-gray-400'>
            <span className='text-[14px] font-semibold text-center'>Add new amenity</span>
            <span className='text-[12px]'>Amenity Name</span>
            <input
              type='text'
              placeholder='new amenity'
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              className='p-2 border border-[#0a1421] rounded-md'
            />
            <button
              type='submit'
              className='mx-auto px-4 py-2 my-3 rounded-md transform transition hover:scale-110 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>
              Save
                        </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default AllAmenity;