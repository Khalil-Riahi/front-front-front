// import React from "react";
// import Container from "./Container";
// import { MyCarrousel } from "./MyCarausel";

// export default function Benefits(props) {
//   return (
//     <div className=" mt-4 w-10/12">
//       <div className="w-full flex flex-col items-center text-center space-y-6">
//         <p className="text-sm text-indigo-600 font-semibold uppercase">
//           Explore our subscriptions
//         </p>
//         <h2 className="text-3xl sm:text-4xl font-bold text-amber-500">
//           Discover our exclusive offers
//         </h2>
//         <p className="max-w-3xl text-gray-500 text-base sm:text-lg">
//           Choose the plan that fits your needs and unlock premium benefits.
//           Enjoy a seamless experience with flexible subscriptions tailored just for you.
//         </p>
//       </div>

//       <div className="flex justify-center w-full mt-12">
//         <MyCarrousel />
//       </div>
//     </div>
//   );
// }

"use client"
import React from "react";
import Container from "./Container";
import { MyCarousel2 } from "./MCarousel2";

export default function Benefits(props) {
  return (
    <Container className="mb-10 w-10/12">
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <p className="text-sm text-indigo-600 font-semibold uppercase">
          
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
        A space that adapts to you
        
        </h2>
        <p className="max-w-3xl text-gray-500 text-base sm:text-lg">
        Our open space offers a bright, modern, and flexible environment where creativity flows freely.
        Whether you're working solo, collaborating with a team, or networking with others, you'll find the
        perfect balance of focus and connection to thrive throughout your day.
        </p>
      </div>

      <div className="flex justify-center w-full mt-12">
        <MyCarousel2 />
      </div>
    </Container>
  );
}
