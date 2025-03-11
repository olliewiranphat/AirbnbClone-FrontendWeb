import React from "react";

function GiftCards() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-white fixed top-0 left-0 right-0 ">
        <img src="/airbnb-logo.png" alt="Airbnb Logo" className="h-8" />
        <div className="flex gap-4">
          <button className="text-sm font-medium text-gray-700 hover:underline">
            Redeem
          </button>
          <button className="bg-[#FF385C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#dd1062]">
            Buy now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="text-center mt-10">
        <h1 className="text-8xl font-bold text-gray-900">Stayzy </h1>
        <h1 className="text-8xl font-bold text-gray-900">gift cards</h1>
        <button className="mt-4 bg-[#FF385C] text-white  px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#dd1062]">
          Buy now
        </button>
      </div>

      {/* Gift Card Image */}
      <div className="mt-10">
        <img
          src="/giftcard-image.png"
          alt="Airbnb Gift Cards"
          className="w-96"
        />
      </div>

      {/* Description */}
      <div className="text-center mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">
          You give. They go.
        </h2>
        <p className="text-gray-600 mt-4">
          Bring the world of Airbnb to friends and family. Celebrate holidays,
          recognize important moments, and inspire travel. Help them go
          wherever, whenever, since they never expire.
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-block hover:underline"
        >
          Buy gift cards in bulk
        </a>
      </div>

      {/* Pick Your Design */}
      <div className="mt-16 max-w-6xl w-full px-6">
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          Pick your design
        </h3>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/p6KjnP0p/427a952da81f536a22af071ab0c86411.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/KzD4ZgDY/be8dee3f4ca5c7457cf97b6aa191c6ca.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/B5v6HxkV/c031391b1646686f038702f9aa038952.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCards;
