import { 
    BedDouble, LandPlot, TicketPlus, Waves, WavesLadder, 
    FerrisWheel, HandPlatter, Container, Castle, HousePlus, Tractor, 
    LeafyGreen, TentTree, MapPinHouse, ChevronLeft, ChevronRight 
} from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import FiltersAndToggle from "./FiltersAndToggle";

function MainIcons() {
    const scrollRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(300);

    useEffect(() => {
        const updateScrollAmount = () => {
            if (window.innerWidth < 640) {
                setScrollAmount(200);
            } else if (window.innerWidth < 1024) {
                setScrollAmount(300);
            } else {
                setScrollAmount(400);
            }
        };

        updateScrollAmount();
        window.addEventListener("resize", updateScrollAmount);
        return () => window.removeEventListener("resize", updateScrollAmount);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const sign = direction === 'left' ? -1 : 1;
            scrollRef.current.scrollBy({ left: sign * scrollAmount, behavior: "smooth" });
        }
    };

    const icons = [
        // ...รายการ icons ของคุณ
        { icon: <LandPlot />, label: "Amazing views" },
        { icon: <TicketPlus />, label: "Icons" },
        { icon: <Waves />, label: "Beachfront" },
        { icon: <FerrisWheel />, label: "OMG!" },
        { icon: <BedDouble />, label: "Rooms" },
        { icon: <TentTree />, label: "Treehouses" },
        { icon: <MapPinHouse />, label: "Design" },
        { icon: <Castle />, label: "Castles" },
        { icon: <Tractor />, label: "Farms" },
        { icon: <LeafyGreen />, label: "Cabins" },
        { icon: <HousePlus />, label: "Tiny homes" },
        { icon: <WavesLadder />, label: "Amazing pools" },
        { icon: <Container />, label: "Containers" },
        { icon: <HandPlatter />, label: "Lux" },
        { icon: <HandPlatter />, label: "Lux" },
        { icon: <HandPlatter />, label: "Lux" },
    ];

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-[40px] h-[120px] bg-white flex items-center justify-between text-[#6a6a6a] mb-4">
            {/* เปลี่ยน layout เป็น flex แบบไม่ห่อตัว */}
            <div className="flex-1 flex items-center min-w-0">
                <div className="relative w-full flex items-center min-w-0">
                    {/* Left Arrow */}
                    <button 
                        className="absolute left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
                        onClick={() => scroll('left')}
                    >
                        <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Scrollable Icons */}
                    <div className="w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 min-w-0">
                        <div 
                            ref={scrollRef} 
                            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 whitespace-nowrap overflow-x-scroll scrollbar-hide"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch',
                            }}
                        >
                            {icons.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-1 py-2 sm:py-3 items-center border-b-2 border-transparent hover:text-black hover:border-gray-300 hover:duration-300 cursor-pointer flex-shrink-0"
                                >
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-semibold">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button 
                        className="absolute right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-md"
                        onClick={() => scroll('right')}
                    >
                        <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            {/* FiltersAndToggle */}
            <div className="main-icons-container hidden sm:block flex-shrink-0 min-w-[200px] ml-4">
                <FiltersAndToggle />
            </div>
        </div>
    );
}

export default MainIcons;
