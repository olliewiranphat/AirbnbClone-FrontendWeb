import React from 'react'
import ReloadLink from '../../../../utils/ReloadLink'
import { ChevronDown } from 'lucide-react'

function Popular() {
    return (
        <div className='flex relative flex-wrap gap-2'>
            {/* COL1 */}
            <div className='flex-1 flex flex-col gap-4 flex-wrap'>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Canmore</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Condo rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Tucson</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Mansion rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Anaheim</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Family-friendly rentals</span>
                </ReloadLink>
            </div>
            {/* COL2 */}
            <div className='flex-1 flex flex-col gap-4 flex-wrap'>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Benalmádena</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Beach house rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Jasper</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Cabin rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Monterey</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Aparment rentals</span>
                </ReloadLink>
            </div>
            {/* COL3 */}
            <div className='flex-1 flex flex-col gap-4 flex-wrap'>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Marbella</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Beach house rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Mountain View</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Cabin rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Paso Robles</span>
                    <span className='text-[14px] text-[#6a6a6a]'>House rentals</span>
                </ReloadLink>
            </div>
            {/* COL4 */}
            <div className='flex-1 flex flex-col gap-4 flex-wrap'>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Mijas</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Apartment rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Devonport</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Cottage rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Santa Barbara</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Apartment rentals</span>
                </ReloadLink>
            </div>
            {/* COL5 */}
            <div className='flex-1 flex flex-col gap-4 flex-wrap'>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Prescott</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Cabin rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Mallacoota</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Beach house rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Sonoma</span>
                    <span className='text-[14px] text-[#6a6a6a]'>House rentals</span>
                </ReloadLink>
            </div>
            {/* COL6 */}
            <div className='flex-1 flex flex-col gap-4 flex-wrap'>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Scottsdale</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Apartment rentals</span>
                </ReloadLink>
                <ReloadLink to='/canmore' className='flex flex-col items-start'>
                    <span className='text-[14px] text-[#222222] font-semibold'>Ibiza</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Vacation rentals</span>
                </ReloadLink>
            </div>
            <div className='absolute bottom-0 right-[90px] flex items-center cursor-pointer'>
                <span className='text-[14px] font-semibold'>Show more</span>
                <ChevronDown className='h-[16px] header' />
            </div>
        </div >
    )
}

export default Popular