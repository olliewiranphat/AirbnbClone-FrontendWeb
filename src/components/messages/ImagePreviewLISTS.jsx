import { X } from 'lucide-react'
import React from 'react'
import ImagePreviewITEM from './ImagePreviewITEM'

function ImagePreviewLISTS({ imagePreview, setImagePreview }) {

    const hdlRemoveImage = (inx) => {
        // console.log('inx', inx);
        const afterDeleteImage = imagePreview.filter((item, index) => (item[index] !== item[inx]))
        // console.log('afterDeleteImage', afterDeleteImage);

        setImagePreview(afterDeleteImage)
    }

    return (
        <div className='grid sm:grid-cols-3 md:grid-cols-6 gap-4'>
            {
                imagePreview.map((image, inx) => (<ImagePreviewITEM image={image} key={inx} inx={inx} hdlRemoveImage={hdlRemoveImage} />))
            }
        </div>
    )
}

export default ImagePreviewLISTS