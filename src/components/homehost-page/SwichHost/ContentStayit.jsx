import React from "react";
import TableCheck from "./TableCheck";
import Questionshost from "../Questionshost";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { House, Timer, MessageSquareText } from "lucide-react";

function ContentStayit() {

  return (
    <div className="px-[40px] text-center gap-4 place-items-center p-2">
      <h1 className="text-2xl font-bold mb-10">
        Stayzy it easily with Stayzy Setup
      </h1>
      <div class="carousel-item w-200 h-100  place-items-center ">
        <DotLottieReact
          src="https://lottie.host/94fcb3a9-c4d4-4638-bd4a-c6d054c30ab3/ICoWONKXW9.lottie"
          loop
          autoplay
        />
      </div>
      {/* 3 col-text */}
      <div className=" flex w-full h-full place-items-center justify-center gap-50 p-2 mb-28 mt-14 ">
        {/* col-1 */}
        <div className="place-items-center w-50">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-6">
            <House />
          </div>
          <p>Create a listing for your place in just a few steps</p>
        </div>
        {/* col-2 */}
        <div className="place-items-center w-50">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-6">
          <Timer />
          </div>
          <p>Go at your own pace, and make changes whenever</p>
        </div>
        {/* col-3 */}
        <div className="place-items-center w-60">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-6">
          <MessageSquareText />
          </div>
          <p>Get 1:1 support from experienced hosts at any time</p>
        </div>
      </div>

      <div>
        <TableCheck />
      </div>
      <div>
        <Questionshost />
      </div>
    </div>
  );


}

export default ContentStayit;
