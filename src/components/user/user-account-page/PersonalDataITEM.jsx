import React from 'react'

function PersonalDataITEM({ item, handleEditClick }) {
    return (
        <div
            className="flex justify-between items-center border-b border-gray-200 py-4"
        >
            <div>
                <p className="text-sm font-medium text-gray-800">{item.label}</p>
                <p className="text-sm text-gray-500">{item.value}</p>
            </div>
            <button
                className="text-sm text-blue-500 hover:text-blue-700"

                onClick={() => handleEditClick(item.field, item.value)}
            >
                {item.action}
            </button>
        </div>
    )
}

export default PersonalDataITEM