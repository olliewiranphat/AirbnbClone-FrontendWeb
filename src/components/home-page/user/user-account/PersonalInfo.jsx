import React from 'react'

function PersonalInfo() {
    return (
        <div className="max-w-[1360px] mx-auto mb-8">
            <h1 className="text-3xl header">Personal info</h1>
            <p className="text-[#6a6a6a] text-sm mt-2">
                The information you share will be used across Airbnb to help other guests and hosts get to know you.{" "}
                <a href="#" className="text-blue-500 underline">
                    Learn more
                </a>
            </p>
        </div>
    )
}

export default PersonalInfo