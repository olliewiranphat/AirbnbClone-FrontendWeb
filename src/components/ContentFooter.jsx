import React from 'react'

function ContentFooter() {
    return (
        <>
            {/* Content */}
            <div className="grid grid-cols-3 gap-6 py-[20px] text-[14px] ">
                {/* Support Section */}
                <div>
                    <h3 className="font-semibold mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">Help Centre</li>
                        <li className="hover:underline cursor-pointer">Get help with a safety issue</li>
                        <li className="hover:underline cursor-pointer">AirCover</li>
                        <li className="hover:underline cursor-pointer">Anti-discrimination</li>
                        <li className="hover:underline cursor-pointer">Disability support</li>
                        <li className="hover:underline cursor-pointer">Cancellation options</li>
                        <li className="hover:underline cursor-pointer">Report neighbourhood concern</li>
                    </ul>
                </div>

                {/* Hosting Section */}
                <div>
                    <h3 className=" font-semibold mb-4">Hosting</h3>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">Airbnb your home</li>
                        <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
                        <li className="hover:underline cursor-pointer">Hosting resources</li>
                        <li className="hover:underline cursor-pointer">Community forum</li>
                        <li className="hover:underline cursor-pointer">Hosting responsibly</li>
                        <li className="hover:underline cursor-pointer">Join a free Hosting class</li>
                        <li className="hover:underline cursor-pointer">Find a co-host</li>
                    </ul>
                </div>

                {/* Airbnb Section */}
                <div>
                    <h3 className="font-semibold mb-4">Airbnb</h3>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">Newsroom</li>
                        <li className="hover:underline cursor-pointer">New features</li>
                        <li className="hover:underline cursor-pointer">Careers</li>
                        <li className="hover:underline cursor-pointer">Investors</li>
                        <li className="hover:underline cursor-pointer">Gift cards</li>
                        <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContentFooter