import React from 'react'

function NoMessageHistory({ participant2 }) {
    return (
        <div className=' mt-[14%] flex justify-center'>
            <span className='text-gray-400 text-center'>Welcome to Chat with {participant2}!, No History</span>
        </div>
    )
}

export default NoMessageHistory