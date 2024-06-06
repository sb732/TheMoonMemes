import * as React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FlipCountdown from "@rumess/react-flip-countdown";

import { ICountDown } from "@/utils/type";
import { ConvertTimestampToStringDate } from "../../utils/helper";

import "./Countdown.css";

const FlipClock: React.FC<ICountDown> = ({ endTime }) => {
  const endTimeByString = ConvertTimestampToStringDate(Number(endTime));

  return (
    <FlipCountdown
      hideYear
      hideMonth
      dayTitle="DAY"
      hourTitle="HOURS"
      minuteTitle="MINUTES"
      secondTitle="SECONDS"
      titlePosition="bottom"
      theme="light"
      size="small" // Options (Default: medium): large, medium, small, extra-small.
      endAt={endTimeByString} // Date/Time
    />
  );
};

export default FlipClock;
