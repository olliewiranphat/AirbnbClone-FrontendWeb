import { useAuth, useUser } from '@clerk/clerk-react';
import { CameraIcon, Loader } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { updateImageUrl } from '../../../../api-server/userController';
import useUserStore from '../../../../store/UserStore';

function UserImage() {
    const actionGetMyAccount = useUserStore(state => state.actionGetMyAccount)
    const userData = useUserStore(state => state.userData)

    const { user } = useUser()
    // console.log('user', user?.imageUrl);
    const { getToken } = useAuth()

    const [uploading, setUploading] = useState(false)
    const hdlUpdateImageUrl = async (e) => {
        setUploading(true)
        const imageFile = e.target.files[0];
        if (imageFile) {
            try {
                const token = await getToken();
                const resUpdateImageFile = await updateImageUrl(token, imageFile);
                console.log("resUpdateImageFile", resUpdateImageFile);
                actionGetMyAccount(token)
                setUploading(false)
            } catch (error) {
                console.log("ERROR Cannot update imageUrl", error);
            }
        } else {
            setUploading(false)
        }
    };


    return (
        <div className="flex-shrink-0 w-[150px] h-[150px] bg-gray-300 rounded-full flex items-center justify-center text-white text-[48px] font-bold relative overflow-hidden">
            {user?.imageUrl ? (
                <img src={userData?.imageUrl || user?.imageUrl} alt="imageUrl" className="w-full h-full object-cover" />
            ) : (user?.firstName[0].toUpperCase())}
            <label className="absolute bottom-[17px] left-1/2 transform -translate-x-1/2 bg-white border rounded-full px-[12px] py-[6px] text-xs shadow-md flex items-center space-x-1 cursor-pointer">
                <CameraIcon className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Upload</span>
                <input type="file" className="hidden" onChange={hdlUpdateImageUrl} />
            </label>
            {uploading && <Loader className='absolute bottom-16 animate-spin text-white' />}
        </div>
    )
}

export default UserImage