import * as translation from "@/translation/en.json";

const TimeLeftPanel = () => {
  return (
    <div className="flex relative text-center">
      <div className="w-full border-[1px] border-black absolute top-[20px]"></div>
      <div className="mr-2 flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
          <p className="bg-white w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
        </div>
        <p className="text-sm">{translation.presale.countdown.day}</p>
      </div>
      <div className="mr-2 flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
          <p className="bg-white w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
        </div>
        <p className="text-sm">{translation.presale.countdown.hour}</p>
      </div>
      <div className="mr-2 flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
          <p className="bg-white w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
        </div>
        <p className="text-sm">{translation.presale.countdown.minute}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex mb-1">
          <p className="bg-white mr-[2px] w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
          <p className="bg-white w-[24px] h-[40px] rounded-md text-4xl text-black">
            0
          </p>
        </div>
        <p className="text-sm">{translation.presale.countdown.second}</p>
      </div>
    </div>
  );
};

export default TimeLeftPanel;
