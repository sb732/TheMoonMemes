const TimeLeftPanel = () => {
  return (
    <div className="flex relative text-center">
      <div className="w-full border-[1px] border-black absolute top-[13px]"></div>
      <div className="mr-2 flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
        </div>
        <p className="text-xs">DAY</p>
      </div>
      <div className="mr-2 flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
        </div>
        <p className="text-xs">HOURS</p>
      </div>
      <div className="mr-2 flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
        </div>
        <p className="text-xs">MINUTES</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
        </div>
        <p className="text-xs">SECONDS</p>
      </div>
    </div>
  );
};

export default TimeLeftPanel;