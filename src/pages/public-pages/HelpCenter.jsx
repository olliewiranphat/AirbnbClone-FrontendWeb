import { useState } from "react";
import { AlignJustify, CircleUserRound, Search } from "lucide-react";
import AirbnbLOGO from "../../components/home-page/main-navbar/AirbnbLOGO";
import Footer from "../../components/Footer";
import tabContent from ".././../components/helpcenter/Tabcontent";

export default function HelpCenter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("guest");

  <tabContent />

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-4  h-30  bg-white">
        <div className="flex items-center gap-12 ml-26">
          <AirbnbLOGO />

          <h1 className="text-lg font-bold">Help Center</h1>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AlignJustify className="w-6 h-6" />
            <CircleUserRound className="w-6 h-6" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  All help topics
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Hosting resources
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Log In</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Sign Up
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Search Section */}
      <main className="flex flex-col items-center mt-12 px-4">
        <div className="w-full max-w-lg">
          <div className="relative">
            <h1 className="flex justify-center text-4xl font-bold">
              Hi, how can we help?
            </h1>
            <input
              type="text"
              placeholder="Search how-tos and more"
              className="w-full border rounded-full p-3 pl-4 pr-12 mt-10 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FF385C] hover:bg-[#dd1062] rounded-full w-10 h-10 text-white flex items-center justify-center mt-10 cursor-pointer">
              <Search />
            </button>
          </div>
        </div>
      </main>

      {/* Tab Menu */}
      <div className="max-w-5xl mx-auto p-6 mt-12">
        <div className="flex space-x-6 border-b pb-2 ">
          {["guest", "host", "experienceHost", "travelAdmin"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 px-3 cursor-pointer ${
                selectedTab === tab
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.charAt(0).toUpperCase() +
                tab.slice(1).replace(/([A-Z])/g, " $1")}
            </button>
          ))}
        </div>

        {/* Log in or Sign up Button */}
        <div className="w-full border rounded-2xl p-10  mt-10 flex justify-between items-center">
          <h2 className="text-2xl ">
            We're here for you
            <p className="text-gray-600 text-sm">
              Log in to get help with your reservations, account, and more.
            </p>
          </h2>
          <div className=" text-center ">
            <button className="py-2 px-6 rounded-md bg-[#FF385C] text-white hover:bg-[#dd1062]">
              Log in or sign up
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">
            {tabContent[selectedTab].title}
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {tabContent[selectedTab].articles.map((article, index) => (
              <div key={index} className="border rounded-lg overflow-hidden ">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <p className="font-medium">{article.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Top articles */}
          <div className="mt-14">
  <h2 className="text-2xl font-bold mb-4">
    Top articles
  </h2>
  <div className="grid grid-cols-3 gap-4">
    {tabContent[selectedTab].textArticles.map((article, index) => (
      <div key={index} className="p-4 mb-4  border-b">
        <h3 className="font-bold text-lg underline">{article.title}</h3>
        <p className="text-gray-600 text-sm mt-2">
          {article.description}
        </p>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
      <div className="min-w-screen container mx-auto px-6 bg-black text-white py-10">
        {/* Explore More */}
        <div className="grid grid-cols-2 gap-8 ml-16">
          <div>
            <h2 className="text-xl font-bold mb-4">Explore more</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* img 1 */}
              <div className="bg-[#424242]  rounded-lg flex flex-col items-center gap-2">
                <img
                  src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfd0c4aa52a78e466/618406a16676ac790d1b8f8f/policy-feature-page-banner-optimized.png" 
                  alt="Community policies"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="p-2">
                  <h3 className="text-lg font-semibold">Our community policies</h3>
                  <p className="text-sm text-gray-400">
                    How we build a foundation of trust.
                  </p>
                </div>
              </div>

              {/* img 2 */}
              <div className="bg-[#424242] rounded-lg flex flex-col  items-center gap-2">
                <img
                  src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png" 
                  alt="Safety tips"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="p-2">
                  <h3 className="text-lg font-semibold">Safety tips and guidelines</h3>
                  <p className="text-sm text-gray-400">
                    Resources to help travelers stay safe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Contact */}
          <div className="w-3xs flex  flex-col justify-center items-start ml-6 ">
            <h2 className="text-xl font-bold mb-4">Need to get in touch?</h2>
            <p className="text-white mb-4">
            We’ll start with some questions and get you to the right place.
            </p>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg w-full">
              Contact us
            </button>
            <p className="mt-2 text-gray-400">
              You can also give us feedback.
            </p>
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
