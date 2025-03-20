import { useAuth } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import useAdminStore from '../../store/useAdminStore'

function AllCategory() {
    
    const {getToken} = useAuth()
    const getAllAccomocate = useAdminStore(state => state.actionGetListAccomocate)
    const [allAccomocate, setAllAccomocate] = useState([])

  const fetchAllAccomocate = async () => {
    try {
        const Token = await getToken()
        const res = await getAllAccomocate(Token)
        setAllAccomocate(res)
        console.log('res', res)
    } catch (error) {
        console.log('error', error)
    }
}

console.log('allAccomocate', allAccomocate)

useEffect(() => {
    fetchAllAccomocate()
}, [])
  


    const [showUpdate, setShowUpdate] = useState(false)

    const [categoryID, setCategoryID] = useState("")

    const hdlClickUpdate = (categoryID) => {
        console.log('categoryID', categoryID);
        setShowUpdate(!showUpdate)
        setCategoryID(categoryID)

    }
    return (
        <div className='w-full p-4 flex flex-col flex-wrap h-full gap-2'>
            <span className='text-2xl font-bold mb-4'>All Categories</span>
            <div className='w-full flex px-4 justify-center'>
                <div className='w-[70%] mt-4 border border-gray-400 rounded-md p-4'>
                    <div className='flex w-full text-[12px] font-semibold border-gray-400 border-b-[1px] pb-2'>
                        <div className='w-[20%] pl-4'>ID
                        </div>
                        <div className='flex-1 ml-2'>Category</div>
                        <div className='flex-1 text-center'>Update

                        </div>
                        <div className='flex-1 text-center'>Delete</div>
                    </div>
                    {allAccomocate.map((el,index) => (
                    <div key={el.categoryID} className='flex w-full text-[12px] border-b-[1px] py-2'>
                        <div className='w-[20%] pl-4'>{index+1}</div>
                        <div className='flex-1 ml-2'>{el.cateName}</div>
                        <div className='flex-1 text-center'>
                            <button className='px-2 py-1 text-blue-600 hover:underline hover:cursor-pointer'>Update</button>
                        </div>
                        <div className='flex-1 text-center'>
                            <button className='px-2 py-1 text-red-600 hover:underline hover:cursor-pointer'>Delete</button>
                        </div>
                    </div>
                ))}
                   

                </div>
                <div className=' ml-7'>
                    <form className='flex flex-col gap-4 w-[300px] mt-4 p-5 border rounded-md border-gray-400'>
                        <span className='text-[14px] font-semibold '>Add new category</span>
                        <span className='text-[12px]'>Category Name</span>
                        <input type="text" placeholder='new category' className='p-2 border border-[#0a1421] rounded-md ' />
                        <button className='mx-auto px-4 py-2 my-3 rounded-sm transform transition hover:scale-125 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
                    </form>

                </div>
            </div>
        </div>
    )
}


export default AllCategory
