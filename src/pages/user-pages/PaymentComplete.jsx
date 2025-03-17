import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import SwipeCards from '../SwipCards';

function PaymentComplete() {

    const { session } = useParams()
    console.log("BAMBAM BA")
    const checkSession = async () => {
        if (!session) return;
        try {
            const token = await getToken()
            const resCheckOutStatus = await checkOutStatus(token, session, userData.userID)
            console.log('resCheckOutStatus', resCheckOutStatus);

        } catch (error) {
            renderAlert("Failed to verify payment", "error")
            console.error("Payment Verification Error", error);

        }
    }
    useEffect(() => {
        checkSession()
    }, [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex gap-6 m-4 shadow-xl mb-18 w-[60vw] h-[60vh] rounded-4xl'>
                <SwipeCards />
                <div className='flex flex-col gap-1'>
                    <p className='mt-20 text-[26px] font-bold'>Luxury Safari Tent Beside Tropical Jungle</p>
                    <div className="grid grid-cols-2 divide-x mt-5">
                        <div className="p-2">
                            <div className="text-[20px] font-bold">CHECK-IN</div>
                            <div className="text-sm">4/29/2023</div>
                        </div>
                        <div className="p-2">
                            <div className="text-[20px] font-bold">CHECKOUT</div>
                            <div className="text-sm">5/4/2023</div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p>GUESTS TOTAL : 3</p>
                        <p>TOTAL PRICE : $300</p>
                    </div>
                    <div className="min-h-[200px] flex items-center justify-center">
                        <button className="px-6 py-2 font-medium bg-[#fe2c54] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Payment
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex gap-6 m-4 shadow-xl mb-18 w-[60vw] h-[60vh] rounded-4xl'>
                <SwipeCards />
                <div className='flex flex-col gap-1'>
                    <p className='mt-20 text-[26px] font-bold'>Luxury Safari Tent Beside Tropical Jungle</p>
                    <div className="grid grid-cols-2 divide-x mt-5">
                        <div className="p-2">
                            <div className="text-[20px] font-bold">CHECK-IN</div>
                            <div className="text-sm">4/29/2023</div>
                        </div>
                        <div className="p-2">
                            <div className="text-[20px] font-bold">CHECKOUT</div>
                            <div className="text-sm">5/4/2023</div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p>GUESTS TOTAL : 3</p>
                        <p>TOTAL PRICE : $300</p>
                    </div>
                    <div className="min-h-[200px] flex items-center justify-center">
                        <button className="px-6 py-2 font-medium bg-[#fe2c54] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Payment
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex gap-6 m-4 shadow-xl mb-18 w-[60vw] h-[60vh] rounded-4xl'>
                <SwipeCards />
                <div className='flex flex-col gap-1'>
                    <p className='mt-20 text-[26px] font-bold'>Luxury Safari Tent Beside Tropical Jungle</p>
                    <div className="grid grid-cols-2 divide-x mt-5">
                        <div className="p-2">
                            <div className="text-[20px] font-bold">CHECK-IN</div>
                            <div className="text-sm">4/29/2023</div>
                        </div>
                        <div className="p-2">
                            <div className="text-[20px] font-bold">CHECKOUT</div>
                            <div className="text-sm">5/4/2023</div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p>GUESTS TOTAL : 3</p>
                        <p>TOTAL PRICE : $300</p>
                    </div>
                    <div className="min-h-[200px] flex items-center justify-center">
                        <button className="px-6 py-2 font-medium bg-[#fe2c54] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentComplete