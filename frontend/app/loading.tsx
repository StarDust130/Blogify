import React from "react";


const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="relative flex items-center justify-center mb-4">
        <div className="relative flex items-center justify-center">
          {/* Loader circle */}
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          {/* Pulse effect around the loader */}
          <div className="absolute inset-0 border-4 border-blue-500 border-opacity-50 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="text-2xl  font-semibold animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
