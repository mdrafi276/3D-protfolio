import React from "react";
// import Hero from "../Hero";
import HeroContent from "./HeroContent";


// const MobileBanner1 = () => {
//   return (
//     <div className="relative flex flex-col h-full w-full" id="about-me">
//       <video
//         autoPlay
//         muted
//         loop
//         className="rotate-180 absolute 
//          lg:top-[-238px]  md:top-[-150px] top-[-150px]
//          h-full w-full left-0 z-[1] object-cover "
//       >
//         <source src="/blackhole.webm" type="video/webm" />
//       </video>

//       <div className="z-20 hidden md:block">
//         <Hero />
//       </div>
//       {/* <div className="z-20 hidden md:block"><HeroContent /></div> */}
//     </div>
//   );
// };

// export default MobileBanner1;

const MobileBanner = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute
         lg:top-[-245px]  md:top-[-150px] top-[-300px]
         md:h-full h-[100px] w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
{/* 
      <div className="z-20 hidden md:block">
        <Hero />
      </div> */}
      <div className="z-20 h-[100vh] mt-20 lg:mt-0  md:block"><HeroContent /></div>
    </div>
  );
};

export default MobileBanner;

// import React from 'react';

// const MobileBanner = () => {
//     return (
//       <div>
//         <div className="flex flex-col h-[100vh] w-[98%] mx-auto lg:flex-row justify-center items-center gap2">
//           <div className="w-full lg:w-[500px]">
//             <div>
//               <h1>I'am Rafi,</h1>
//               <h1>Frontend Developer.|</h1>
//               <p>
//                 Hi, i'am Sadid, Experienced MERN stack developer skilled in
//                 React.js, Node.js/Express, and MongoDB. Committed to creating
//                 seamless web experiences with a focus on clean code and
//                 user-centric design. Ready to bring technical expertise and
//                 innovation to your team.
//               </p>
//               <div>
//                 <button>download cv</button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <figure className="w-full rounded-full bg-cover  border-red-600 border-2 h-[200px] lg:w-[200px]">
//               {" "}
//               <img
//                 className="w-[200px] rounded-full h-[200px] object-cover"
//                 src="https://i.ibb.co/wQdHN4h/1704302832840-01.jpg"
//                 alt=""
//               />
//             </figure>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default MobileBanner;
