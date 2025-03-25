import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Picture from "../../../../image/bg-01.jpg"

export const TextParallaxContentExample = () => {
   return (
      <div className="bg-white">
         <TextParallaxContent
            imgUrl={Picture}
            subheading="Booking Confirmed"
            heading="THANK YOU"
         >
            <ExampleContent />
         </TextParallaxContent>
      </div>
   );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
   return (
      <div
         style={{
            paddingLeft: IMG_PADDING,
            paddingRight: IMG_PADDING,
         }}
      >
         <div className="relative h-[150vh]">
            <StickyImage imgUrl={imgUrl} />
            <OverlayCopy heading={heading} subheading={subheading} />
         </div>
         {children}
      </div>
   );
};

const StickyImage = ({ imgUrl }) => {
   const targetRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
   });

   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

   return (
      <motion.div
         style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: `calc(100vh - ${IMG_PADDING * 2}px)`,
            top: IMG_PADDING,
            scale,
         }}
         ref={targetRef}
         className="sticky z-0 overflow-hidden rounded-3xl"
      >
         <motion.div
            className="absolute inset-0 bg-neutral-950/70"
            style={{
               opacity,
            }}
         />
      </motion.div>
   );
};

const OverlayCopy = ({ subheading, heading }) => {
   const targetRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
   const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

   return (
      <motion.div
         style={{
            y,
            opacity,
         }}
         ref={targetRef}
         className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
         <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
            {subheading}
         </p>
         <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
   );
};

const hdlHome = () => {
   window.location.href = "/";
}

const ExampleContent = () => (
   <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
         Dear [guest name]
      </h2>
      <div className="col-span-1 md:col-span-8">
         <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            <span>It's been a great pleasure having you stay with us at [hotel name]. We hope you have a great onward journey.</span>
            <span>In the interest of offering the best service possible, we would really appreciate it if you could provide us with any feedback about your stay.</span>
         </p>
         <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
            <span>Once again, thanks for choosing us!</span>
         </p>
         <div className=" flex items-center justify-center">
            <button onClick={hdlHome} className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
               Home
            </button>
         </div>
      </div>
   </div>
);