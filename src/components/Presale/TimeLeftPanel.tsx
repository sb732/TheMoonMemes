const TimeLeftPanel = () => {
  return (
    <div className="flex relative text-center">
      <div className="w-full border-[1px] border-black absolute top-[13px]"></div>
      <div className="mr-2">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            1
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            5
          </p>
        </div>
        <p className="text-[7px]">DAY</p>
      </div>
      <div className="mr-2">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            1
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
        </div>
        <p className="text-[7px]">HOURS</p>
      </div>
      <div className="mr-2">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            4
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            2
          </p>
        </div>
        <p className="text-[7px]">MINUTES</p>
      </div>
      <div>
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
          <p className="bg-white w-[18px] h-[27px] rounded-md text-xl text-black">
            0
          </p>
        </div>
        <p className="text-[7px]">SECONDS</p>
      </div>
    </div>
  );
};

export default TimeLeftPanel;
