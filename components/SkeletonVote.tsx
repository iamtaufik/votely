const SkeletonVote = () => {
  return (
    <div role="status" className="flex justify-center my-4 lg:w-full animate-pulse ">
      <div className="flex flex-col items-center gap-10">
        <div className="h-4 bg-gray-300 rounded-full w-60"></div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center w-full space-x-2 max-w-[300px] lg:max-w-[400px]">
            <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-80"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-80"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full  w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-24"></div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full w-60 "></div>
              </div>
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full w-60 "></div>
              </div>
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default SkeletonVote;
