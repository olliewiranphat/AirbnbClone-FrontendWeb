import { CameraIcon } from 'lucide-react'
import React from 'react'

function UserImageUrl() {
    return (
        <div className="flex-shrink-0 w-[150px] h-[150px] bg-gray-300 rounded-full flex items-center justify-center text-white text-[48px] font-bold relative overflow-hidden">
            {/* {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
            )
                // ) : userData?.imageUrl ? (
                //     <img src={userData.imageUrl} alt="Profile" className="w-full h-full object-cover" />
                // ) 
                : (
                    "W"
                )} */}
            <label className="absolute bottom-[17px] left-1/2 transform -translate-x-1/2 bg-white border rounded-full px-[12px] py-[6px] text-xs shadow-md flex items-center space-x-1 cursor-pointer">
                <CameraIcon className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Upload</span>
                <input type="file" className="hidden"
                // onChange={handleFileChange} 
                />
            </label>
        </div>
    )
}

export default UserImageUrl