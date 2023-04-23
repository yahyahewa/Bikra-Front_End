import React from "react";
import "./components.css";
const Loading = () => {
  return (
    <div className={`top-0 left-0 h-screen w-screen fixed z-30 bg-[#11223380]`}>
      <div className="loading">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loading;

// import React from "react";

// function smallLoading() {
//   return (
//     <div
//       className={`fixed top-0 left-0 w-screen h-screen z-20 bg-[#11223381] flex items-center justify-center`}
//     >
//       <div class="flex items-center justify-center min-h-screen">
//         <div class="w-full max-w-lg px-4 py-8 space-y-4 bg-white rounded-lg shadow-lg">
//           <div class="flex items-center justify-between">
//             <div class="w-12 h-12 rounded-full bg-gray-300"></div>
//             <div class="flex-1 ml-4">
//               <div class="w-24 h-4 mb-2 rounded-full bg-gray-300"></div>
//               <div class="w-16 h-4 rounded-full bg-gray-300"></div>
//             </div>
//           </div>
//           <hr class="border-t border-gray-300" />
//           <div class="space-y-2">
//             <div class="flex items-center justify-between">
//               <div class="flex-1 mr-4">
//                 <div class="w-16 h-4 mb-2 rounded-full bg-gray-300"></div>
//                 <div class="w-24 h-4 rounded-full bg-gray-300"></div>
//               </div>
//               <div class="w-12 h-12 rounded-full bg-gray-300"></div>
//             </div>
//             <div class="flex items-center justify-between">
//               <div class="flex-1 mr-4">
//                 <div class="w-16 h-4 mb-2 rounded-full bg-gray-300"></div>
//                 <div class="w-24 h-4 rounded-full bg-gray-300"></div>
//               </div>
//               <div class="w-12 h-12 rounded-full bg-gray-300"></div>
//             </div>
//           </div>
//           <hr class="border-t border-gray-300" />
//           <div class="flex items-center justify-between">
//             <div class="flex-1 mr-4">
//               <div class="w-16 h-4 mb-2 rounded-full bg-gray-300"></div>
//               <div class="w-24 h-4 rounded-full bg-gray-300"></div>
//             </div>
//             <div class="w-12 h-12 rounded-full bg-gray-300"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default smallLoading;
