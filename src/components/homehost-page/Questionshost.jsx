import React from "react";

const Questionshost = () => {
  return (
    <div className="text-center mt-16  w-full flex justify-between items-center gap-3 bg-gray-100">
      <div className="text-start ml-20 w-full ">
        <h2 className="text-3xl font-bold text-gray-900">
          Your questions,
          <br />
          answered{" "}
        </h2>
      </div>
      <div className="mt-8 w-full ">
        <div className="collapse collapse-arrow  border border-base-300 text-start bg-gray-100">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            {" "}
            Is my place right for Stayzy?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Stayzy guests are interested in all kinds of places. We have
            listings for tiny homes, cabins, treehouses, and more. Even a spare
            room can be a great place to stay.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            {" "}
            Do I have to host all the time?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Not at all—you control your calendar. You can host once a year, a
            few nights a month, or more often.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            {" "}
            How much should I interact with guests?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            NIt’s up to you. Some Hosts prefer to message guests only at key
            moments—like sending a short note when they check in—while others
            also enjoy meeting their guests in person. You’ll find a style that
            works for you and your guests.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            {" "}
            Any tips on being a great Stayzy Host?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Getting the basics down goes a long way. Keep your place clean,
            respond to guests promptly, and provide necessary amenities, like
            fresh towels. Some Hosts like adding a personal touch, such as
            putting out fresh flowers or sharing a list of local places to
            explore—but it’s not required.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-100 border border-base-300 text-start">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            {" "}
            What are Stayzy’s fees?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Stayzy typically collects a flat service fee of 3% of the
            reservation subtotal when you get paid. We also collect a fee from
            guests when they book. In many areas, Airbnb collects and pays sales
            and tourism taxes automatically on your behalf as well.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionshost;
