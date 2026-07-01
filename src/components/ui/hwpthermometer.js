import React from "react";
import "./hwpthermometer.css";

export default function HWPThermometer() {
  return (
    <div>
      <div className="chartWrapper">
        <ul className="chartY">
          <li className="font-bold">100%</li>
          <li>90%</li>
          <li>80%</li>
          <li>70%</li>
          <li>60%</li>
          <li>50%</li>
          <li>40%</li>
          <li>30%</li>
          <li>20%</li>
          <li>10%</li>
          <li>0%</li>
        </ul>

        <ul className="chartX">
          <ul className="chartX1"></ul>
        </ul>

        <ul className="chartLabels">
          <li className="pl-[20%] pr-[10%] pb-[5%] pt-[10%] font-semibold">
            {" "}
            100% Completed by August 24th 2024! - we made it......
          </li>
          <li className="pl-[20%] pr-[20%] pb-[5%] font-semibold">
            August 3rd - 73.93%
          </li>
          <li className="pl-[20%] pr-[10%] pb-[5%] font-semibold">
            July 13th - 46.9%
          </li>
          <li className="pl-[20%] pr-[10%] pb-[5%] font-semibold">
            July 7th - 31.9%
          </li>
          <li className="pl-[20%] pr-[10%] pb-[5%] font-semibold">
            July 6th - 24.76%
          </li>
          <li className="pl-[20%] pr-[10%] pb-[5%] font-semibold">
            June 30th - 17.62%
          </li>
          <li className="pl-[20%] pr-[10%] pb-[5%] font-semibold">
            June 29th - 10.83%
          </li>
          <li className="pl-[20%] pr-[10%] pb-[5%] font-semibold">
            June 1st - 6.07%
          </li>
          <li className="pl-[20%] pr-[10%] pb-[5%] font-semibold">
            May 31st - 0%
          </li>
        </ul>
      </div>
    </div>
  );
}
