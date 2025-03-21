import { LockClosedIcon } from '@heroicons/react/outline'
import { EyeIcon, PencilIcon } from 'lucide-react'
import React from 'react'

function HelpingInform() {
    const helpingInform = [
        {
            title: "Why isn't my info shown here?",
            description:
                "We're hiding some account details to protect your identity.",
            icon: <LockClosedIcon className="w-6 h-6 text-pink-500" />,
        },
        {
            title: "Which details can be edited?",
            description:
                "Contact info and personal details can be edited. If this info was used to verify your identity, you'll need to get verified again the next time you book – or to continue hosting.",
            icon: <PencilIcon className="w-6 h-6 text-pink-500" />,
        },
        {
            title: "What info is shared with others?",
            description:
                "Airbnb only releases contact information for hosts and guests after a reservation is confirmed.",
            icon: <EyeIcon className="w-6 h-6 text-pink-500" />,
        },
    ]
    return (
        <div className="flex-shrink-0 w-[300px] bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6">
            {helpingInform.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div>{item.icon}</div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HelpingInform