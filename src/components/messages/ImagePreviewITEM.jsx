import { X } from 'lucide-react'
import React from 'react'

function ImagePreviewITEM({ image, inx, hdlRemoveImage }) {
    // console.log('image', image);


    return (
        <div className="mb-3 flex items-center gap-2 relative">
            <img
                src={image}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-lg"
            />
            <button
                onClick={() => hdlRemoveImage(inx)}
                type="button"
                className="absolute -top-1.5 right-7 shadow-lg w-5 h-5 rounded-full flex items-center justify-center cursor-pointer  hover:bg-[#dd1062] hover:duration-300 text-white bg-[#FF385C]"
            >
                <X className="h-3 w-3" />
            </button>

        </div>
    )
}

export default ImagePreviewITEM