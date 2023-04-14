import React from "react";

function smallLoading() {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-20 bg-[#11223381] flex items-center justify-center`}
    >
      <h1 className={`text-2xl text-white`}>Loding.....</h1>
    </div>
  );
}

export default smallLoading;
