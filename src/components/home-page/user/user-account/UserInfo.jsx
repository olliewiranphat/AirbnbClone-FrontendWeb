import React, { useState } from 'react'
import EditUserInfo from './EditUserInfo'
import { AnimatePresence } from 'framer-motion'

function UserInfo({ item }) {
    // console.log('item', item);
    const [showEditModal, setShowEditModal] = useState(false)


    return (<>
        <div className="flex justify-between items-center border-b border-gray-200 py-4">
            <div>
                <p className="text-sm font-medium text-gray-800">{item?.label}</p>
                <p className="text-sm text-gray-500">{item?.value}</p>
            </div>
            <button
                className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => setShowEditModal(true)}
            >
                {/* EDIT */}
                {item?.btn}
            </button>
        </div>
        {/* Popup Edit Modal */}
        <AnimatePresence>
            {showEditModal && <EditUserInfo setShowEditModal={setShowEditModal} item={item} />}
        </AnimatePresence>
    </>
    )
}

export default UserInfo