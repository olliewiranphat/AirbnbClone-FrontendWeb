import { useAuth } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import useAdminStore from '../../store/useAdminStore'
import CategoryItem from '../../components/admin-page/admin-category/CategoryItem'

function AllCategory() {

    const { getToken } = useAuth()
    const getAllAccomocate = useAdminStore(state => state.actionGetListAccomocate)
    const deletedCategory = useAdminStore(state => state.actionGetDeleteAccomocate)
    const createCategory = useAdminStore(state => state.actionGetCreateAccomocate)

    const [allAccomocate, setAllAccomocate] = useState([])

   

    //created Category
    const [input, setInput] = useState("")
    const [inputError, setInputError] = useState("")


    //fetchmap 
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



    const handleChange = (e) => {
        setInput(e.target.value)
        setInputError("")
    }


    const handleDelete = async (categoryID) => {
        console.log('categoryID', categoryID)
        try {
            const Token = await getToken();
            // ใช้ใน store
            await deletedCategory(Token, categoryID);
            console.log(`Deleted accomCateID: `);
            // fetch ข้อมูลมาใหม่
            fetchAllAccomocate()
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    //Create ตอนกด 
    const handleCreate = async (e) => {
        e.preventDefault()
        try {

            const token = await getToken();
            if (!input.trim()) {
                return setInputError("Please fill Category")
            }

            await createCategory(token, input)
            setInput("")
            fetchAllAccomocate()
        } catch (error) {
            console.log('Input error', error)
        }
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
                        <div className='flex-1 text-center'>Edit

                        </div>
                        <div className='flex-1 text-center'>Delete</div>
                    </div>
                    {allAccomocate?.map((el, index) => (
                        <CategoryItem key={el.accomCateID} fetchAllAccomocate={fetchAllAccomocate} index={index} el={el} handleDelete={handleDelete} />
                    ))}


                </div>
                <div className=' ml-7'>
                    <form onSubmit={handleCreate} className='flex flex-col gap-4 w-[300px] mt-4 p-5 border rounded-md border-gray-400'>
                        <span className='text-[14px] font-semibold '>Add new category</span>
                        <span className='text-[12px]'>Category Name</span>
                        <input
                            type="text" placeholder='new category' onChange={handleChange} value={input}
                            className='p-2 border border-[#0a1421] rounded-md ' />

                        {inputError && <span className='text-red-400 text-xs'>{inputError}</span>}
                        <button className='mx-auto px-4 py-2 my-3 rounded-sm transform transition hover:scale-125 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'
                        >
                            Save</button>
                    </form>

                </div>
            </div>
        </div>
    )
}


export default AllCategory
