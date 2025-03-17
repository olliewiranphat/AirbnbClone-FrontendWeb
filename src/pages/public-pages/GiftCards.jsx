import React from "react";
import AirbnbLOGO from "../../components/home-page/main-navbar/AirbnbLOGO";
import Footer from "../../components/Footer";
import ReloadLink from "../../utils/ReloadLink";

function GiftCards() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full fixed top-0 left-0 right-0 bg-white z-50">
        <header className="w-full max-w-screen-lg mx-auto flex justify-between items-center py-4 px-6 relative">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <AirbnbLOGO />
          </div>
          {/* Buttons */}
          <div className="flex gap-4 justify-end items-center">
            <button className="text-sm font-medium text-gray-700 hover:underline">
              Redeem
            </button>
            <button className="bg-[#FF385C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#dd1062]">
              Buy now
            </button>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <div className="text-center mt-28">
        <h1 className="text-8xl font-bold text-gray-900">Stayzy </h1>
        <h1 className="text-8xl font-bold text-gray-900">gift cards</h1>
        <button className="mt-4 bg-[#FF385C] text-white  px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#dd1062]">
          Buy now
        </button>
      </div>

      {/* Gift Card Image */}
      <div className="mt-10">
        <img
          src="https://i.ibb.co/60jcYqFK/image.png"
          alt="Airbnb Gift Cards"
          className="w-100"
        />
      </div>

      {/* Description */}
      <div className="text-center mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">
          You give. They go.
        </h2>
        <p className="text-gray-600 mt-4">
          Bring the world of Stayzy to friends and family. Celebrate holidays,
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
      <div className="mt-16 max-w-4xl w-full px-6">
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
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/XrV9bpVc/186595150786985a4b9c1b1b73e78f65-1.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/rGdzyjBw/721b5bc222277d5824a970d07d76cc49-1.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/YTNRBnpt/c38596408ec2555e7abbafaf9e934311.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/5XV0XFgd/b755fde43ca58d480f19cc682a8493b5-1.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/Lq7d6fh/b41d2e0c10301600053fc1beb666474b-1.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://i.ibb.co/PsMgKMMw/c06f4057185e296d880997413cf37d14-1.jpg"
              class="relative w-full h-45 bg-gray-300 rounded-lg overflow-hidden"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          {/* Features */}
          <div class=" w-full text-center gap-6 py-10">
            <h1 className="text-xl font-bold text-gray-900">
              Inspiring designs
            </h1>
            <p>
              Gift cards are customizable with your choice of design, message,
              and gift amount
            </p>
          </div>
          <div class="w-full text-center gap-6 py-10">
            <h1 className="text-xl font-bold text-gray-900">Easy to send</h1>
            <p>
              Arrives within minutes via text or email and we’ll confirm that
              it’s been received
            </p>
          </div>
          <div class=" w-full text-center gap-6 py-10">
            <h1 className="text-xl font-bold text-gray-900">Never expires</h1>
            <p>
              Gift credit is available to use whenever they’re ready to travel
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white flex flex-col items-center p-6  ">
        {/* Gift Cards for Business */}
        <div className="w-full bg-gray-100 py-12 px-6 mt-16 flex items-center justify-center ">
          <div className="w-1/2 text-left">
            <h2 className="text-3xl font-bold text-gray-900 py-3">
              Gift Cards for Business
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto py-5">
              Show your appreciation for employees and customers with a gift
              that's easy to give for any occasion.
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto py-5">
              For orders $10,000 or more,
              <a href="#" className="text-gray-600 font-bold  hover:underline">
                contact sales
              </a>
              .
            </p>
            <button className="py-2 px-5 rounded-md bg-[#222222] text-white hover:font-semibold hover:bg-black">
              Get Started
            </button>
          </div>
          {/*  for image */}
          <div >
          <img
              src="https://i.ibb.co/JFtqys8V/Group-333.png" 
              className="w-full h-full  "
            />
          </div>
        </div>
      </div>


      {/* Frequently Asked Questions */}
      <div className="text-center mt-16 max-w-5xl w-full flex justify-between items-center gap-5">
        <div className="text-start w-full ">
          <h2 className="text-3xl font-bold text-gray-900">Frequently </h2>
          <h2 className="text-3xl font-bold text-gray-900">Asked</h2>
          <h2 className="text-3xl font-bold text-gray-900"> Questions</h2>
          <p className="text-gray-600 mt-10">For more questions visit the 
          <ReloadLink to='/help' className="text-gray-600 font-bold  hover:underline">
            Help Center
          </ReloadLink>.
          </p>
          
          
        </div>
        <div className="mt-8 w-full ">
          <div className="collapse collapse-arrow  bg-base-100 border border-base-300 text-start ">
          <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold"> Are gift cards physical or digital?</div>
            <div className="collapse-content text-sm text-gray-700">Gift cards bought on Stayzy.com in the US can be purchased as eGift cards, which are sent via text or email, or physical gift cards that will be shipped to a recipient’s US address.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold"> Where can I buy a physical gift card?</div>
            <div className="collapse-content text-sm text-gray-700">You can order a physical gift card here or buy at participating Target, Walmart, Best Buy, CVS, Walgreens, Kroger, Safeway, and Whole Foods store locations.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold"> Do gift cards expire?</div>
            <div className="collapse-content text-sm text-gray-700">No, our gift cards don't expire.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold"> Where are gift cards available?</div>
            <div className="collapse-content text-sm text-gray-700">Stayzy gift cards are available in many countries around the world. You can find the full list of available countries and applicable Gift Card Terms here.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold"> Can I send a gift card to someone who lives in a different country?</div>
            <div className="collapse-content text-sm text-gray-700">Gift cards purchased in the US can only be redeemed by users who reside in the US. The gift card recipient must also have a valid payment method in the US.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold"> How can I check my gift card balance?</div>
            <div className="collapse-content text-sm text-gray-700">Once you redeem your card and add the funds from the card to your account, you can go to Payment methods in your Account and check your balance.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">Which payment methods does St ayzy accept?</div>
            <div className="collapse-content text-sm text-gray-700">We currently accept major credit cards and Apple Pay for gift cards purchased on Stayzy.</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-20 ">
        <Footer />
      </div>  
    </div>
  );
}

export default GiftCards;
