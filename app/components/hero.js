

// import Image from "next/image";
// import Container from "./container";
// import heroImg1 from "../../public/oo.png"; // Ensure this path is correct

// export default function Hero() {
//   return (
//     <div className="h-[690px] text-gray-900">
//       {/* Background Image for Large Screens */}
//       <div 
//         className="bg-cover bg-center h-full hidden md:block"
//         style={{ backgroundImage: `url(${heroImg1.src})` }}
//       >
//         <Container className="flex flex-wrap h-full"> 
//           <div className="flex items-center w-full lg:w-1/2">
//             <div className="max-w-2xl bg-opacity-0 mb-16"> 
//               <h1 className="text-xl text-blue-950  font-bold leading-snug tracking-tight lg:text-xl lg:leading-tight xl:text-3xl xl:leading-tight">
//                 Welcome to <br />
//                 Elaco Coworking Space
//               </h1>
//               {/* <p className="py-5 text-md leading-normal text-white lg:text-md">
//                 Elaco is a modern coworking space where creativity meets productivity.<br />
//                 Whether you are a freelancer, startup, or remote team, Elaco offers flexible<br />
//                 workspaces and a vibrant community to help you grow.
//               </p> */}
//               <p className="py-5 text-md leading-normal text-white lg:text-md text-justify max-w-md">
//                 Elaco is a modern coworking space where creativity meets productivity. Whether you are a 
//                 freelancer, startup, or remote team, Elaco offers flexible workspaces and a vibrant 
//                 community to help you grow.
//               </p>

//               <div className="flex flex-col items-start space-x-0 space-y-3 sm:space-y-0 sm:items-center sm:flex-row sm:space-x-3">
//               <a
//                 href="#"
//                 className="px-6 py-3 text-lg font-medium text-center text-white bg-blue-600 rounded-md"
//               >
//                 Reserve Now
//               </a>
//               <a
//                 href="#"
//                 className="pr-5 py-3 text-lg font-medium text-center rounded-md flex items-center space-x-2 text-white bg-amber-500"
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   className="w-5 h-5"
//                 >
//                   <title>Explore</title>
//                   {/* <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577..." /> */}
//                 </svg>
//                 <span>Explore Subscriptions</span>
//               </a>
//             </div>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* Small Screen Layout (Without Background Image) */}
//       <div className="md:hidden flex flex-col items-center justify-center h-full px-6 text-center bg-gray-100">
//         <h1 className="text-2xl font-bold text-gray-900">
//           Welcome to <br />
//           Elaco Coworking Space
//         </h1>
//         <p className="py-4 text-md text-gray-700">
//           Elaco is a modern coworking space where creativity meets productivity.<br />
//           Whether you are a freelancer, startup, or remote team, Elaco offers flexible<br />
//           workspaces and a vibrant community to help you grow.
//         </p>
//         <div className="flex flex-col items-center space-y-3">
//           <a href="#" className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition">
//             Reserve Now
//           </a>
//           <a href="#" className="px-6 py-3 text-lg font-medium text-white bg-amber-500 rounded-md flex items-center space-x-2 shadow-md hover:bg-amber-600 transition">
//             <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
//               <title>Explore</title>
//             </svg>
//             <span>Explore Subscriptions</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // import Image from "next/image";
// // import heroImg from "../../public/background.png"; // Ensure the image is placed inside the public folder

// // export default function Hero() {
// //   return (
// //     <div className="bg-[#0A497B] flex justify-center items-center min-h-screen px-4">
// //       {/* Main Container */}
// //       <div className="bg-white w-full max-w-6xl rounded-2xl flex flex-col md:flex-row items-center p-10 shadow-lg">
        
// //         {/* Left Section: Illustration */}
// //         <div className="w-full md:w-1/2 flex justify-center">
// //           <Image src={heroImg} alt="Coworking Space" width={600} height={400} />
// //         </div>

// //         {/* Right Section: Text and Button */}
// //         <div className="w-full md:w-1/2 text-left px-6">
// //           <h1 className="text-4xl font-bold text-[#0A497B]">
// //             COWORKING <br /> SPACE
// //           </h1>
// //           <p className="text-gray-600 my-4 text-lg">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// //           </p>
// //           <button className="mt-4 px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition">
// //             Get Started
// //           </button>
// //         </div>
        
// //       </div>
// //     </div>
// //   );
// // }

// import Image from "next/image";
// import Container from "./container";
// import heroImg1 from "../../public/oo.png"; // Make sure this path is correct

// export default function Hero() {
//   return (
//     <div className="h-[690px] text-gray-900">
//       {/* Background Image for Large Screens */}
//       <div
//         className="bg-cover bg-center h-full hidden md:block"
//         // Use backticks to correctly inject the image URL:
//         style={{ backgroundImage: `url(${heroImg1.src})` }}
//       >
//         <Container className="flex flex-wrap h-full">
//           <div className="flex items-center w-full lg:w-1/2">
//             <div className="max-w-2xl bg-opacity-0 mb-16">
//               <h1 className="text-xl text-blue-950 font-bold leading-snug tracking-tight lg:text-xl lg:leading-tight xl:text-3xl xl:leading-tight">
//                 Welcome to <br />
//                 Elaco Coworking Space
//               </h1>
//               <p className="py-5 text-md leading-normal text-white lg:text-md text-justify max-w-md">
//                 Elaco is a modern coworking space where creativity meets productivity. Whether you
//                 are a freelancer, startup, or remote team, Elaco offers flexible workspaces and a
//                 vibrant community to help you grow.
//               </p>

//               <div className="flex flex-col items-start space-x-0 space-y-3 sm:space-y-0 sm:items-center sm:flex-row sm:space-x-3">
//                 <a
//                   href="#"
//                   className="px-6 py-3 text-lg font-medium text-center text-white bg-blue-600 rounded-md"
//                 >
//                   Reserve Now
//                 </a>
//                 <a
//                   href="#"
//                   className="pr-5 py-3 text-lg font-medium text-center rounded-md flex items-center space-x-2 text-white bg-amber-500"
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     className="w-5 h-5"
//                   >
//                     <title>Explore</title>
//                   </svg>
//                   <span>Explore Subscriptions</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* Small Screen Layout (Without Background Image) */}
//       <div className="md:hidden flex flex-col items-center justify-center h-full px-6 text-center bg-gray-100">
//         <h1 className="text-2xl font-bold text-gray-900">
//           Welcome to <br />
//           Elaco Coworking Space
//         </h1>
//         <p className="py-4 text-md text-gray-700">
//           Elaco is a modern coworking space where creativity meets productivity.
//           <br />
//           Whether you are a freelancer, startup, or remote team, Elaco offers flexible
//           <br />
//           workspaces and a vibrant community to help you grow.
//         </p>
//         <div className="flex flex-col items-center space-y-3">
//           <a
//             href="#"
//             className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition"
//           >
//             Reserve Now
//           </a>
//           <a
//             href="#"
//             className="px-6 py-3 text-lg font-medium text-white bg-amber-500 rounded-md flex items-center space-x-2 shadow-md hover:bg-amber-600 transition"
//           >
//             <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
//               <title>Explore</title>
//             </svg>
//             <span>Explore Subscriptions</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }




import Image from "next/image";
import Container from "./Container";
import heroImg1 from "../../public/oo.png"; // Ensure this path is correct

export default function Hero() {
  return (
    <div className="h-[690px] text-gray-900 mb-20">
      {/* Large Screen Layout */}
      <div
        className="hidden md:block h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg1.src})` }}
      >
        <div className="w-full max-w-screen-xl mx-4 px-4 xl:px-8 flex flex-wrap h-full">
          <div className="flex items-center w-full   lg:px-1">
            <div className="max-w-xl mb-16">
              <h1 className="text-3xl font-bold text-blue-950 leading-snug tracking-tight lg:text-4xl">
                Welcome to <br /> Elaco Coworking Space
              </h1>
              <p className="py-5 text-lg text-white leading-relaxed text-justify ">
                Elaco is a modern coworking space where creativity meets productivity. Whether you
                are a freelancer, startup, or remote team, Elaco offers flexible workspaces and a
                vibrant community to help you grow.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <a
                  href="#"
                  className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                  Reserve Now
                </a>
                <a
                  href="#"
                  className="px-6 py-3 text-lg font-medium text-white bg-amber-500 rounded-md flex items-center space-x-2 hover:bg-amber-600 transition"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <title>Explore</title>
                  </svg>
                  <span>Explore Subscriptions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px- text-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to <br /> Elaco Coworking Space
        </h1>
        <p className="py-4 text-lg text-gray-700 leading-relaxed">
          Elaco is a modern coworking space where creativity meets productivity.
          Whether you are a freelancer, startup, or remote team, Elaco offers flexible workspaces and a vibrant community.
        </p>
        <div className="flex flex-col items-center space-y-3">
          <a href="#" className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition">
            Reserve Now
          </a>
          <a href="#" className="px-6 py-3 text-lg font-medium text-white bg-amber-500 rounded-md flex items-center space-x-2 shadow-md hover:bg-amber-600 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <title>Explore</title>
            </svg>
            <span>Explore Subscriptions</span>
          </a>
        </div>
      </div>
    </div>
  );
}
