import React from 'react';

const SkeletonTable = () => {
  return (
    <div role="status" className="container space-y-2.5 animate-pulse flex flex-col my-4 gap-2">
      <div className="flex items-center justify-between w-full space-x-2">
        <div className="h-2.5 bg-gray-200 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <div className="flex items-center justify-between w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-14"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-28"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-56"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-10"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonTable;
