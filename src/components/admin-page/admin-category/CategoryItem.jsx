import { useAuth } from "@clerk/clerk-react"
import { useState } from "react"
import useAdminStore from "../../../store/useAdminStore"

function CategoryItem({ el, index, fetchAllAccomocate, handleDelete }) {
    const { getToken } = useAuth()
    const editCategory = useAdminStore(state => state.actionGetEditAccomocate)

    const [input, setInput] = useState(el.cateName || "")
    const [edit, setEdit] = useState(false)
    const [inputError, setInputError] = useState("")


    const handleSave = async (id) => {
        try {
            const token = await getToken();
            if(!input.trim()){
                return setInputError("Please fill Category")
            }
            await editCategory(token,id,input)
            await fetchAllAccomocate()
            setEdit(false)
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
        setInputError("")
    }
    return (
        <div className='flex w-full text-[12px] border-b-[1px] py-2'>
            <div className='w-[20%] pl-4'>{index + 1}</div>
            {edit
                ? <>
                    <input type="text" onChange={handleChange} value={input}
                        className="border-2" />
                    {inputError && <span className='text-red-400 text-xs'>{inputError}</span>}
                </>
                : <div className='flex-1 ml-2'>{el.cateName}</div>}
            <div className='flex-1 text-center'>
                {edit ? <button onClick={() => handleSave(el.accomCateID)}
                    className='px-2 py-1 text-blue-600 hover:underline hover:cursor-pointer'>
                    save</button> : <button onClick={() =>setEdit(true) }
                        className='px-2 py-1 text-blue-600 hover:underline hover:cursor-pointer'>
                    Edit</button>}
            </div>
            <div className='flex-1 text-center'>
                <button className='px-2 py-1 text-red-600 hover:underline hover:cursor-pointer'
                    onClick={() => handleDelete(el.accomCateID)}
                >Delete</button>
            </div>
        </div>
    )
}

export default CategoryItem