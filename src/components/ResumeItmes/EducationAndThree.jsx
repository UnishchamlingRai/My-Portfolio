import React from "react";
import CommonHead from "../commonHead";
import ContentBox from "./ContentBox";

const EducationAndThree = ({leftHead,leftSubhead,rightHead,rightSubhead}) => {
  return (
    <div className="flex lg:flex-row flex-col gap-[100px] lg:gap-[50px]">
      <div className="flex-1">
        <CommonHead head={leftHead} subhead={leftSubhead} />

        <div className="w-[6px] lg:h-[150vh] sm:h-[75vh] h-[180vh] bg-[#1a1d20] mt-[50px] flex flex-col items-center justify-between py-[120px]">
          <ContentBox />
          <ContentBox />
          <ContentBox />
        </div>



      </div>

      <div className="flex-1 sm:mt-1 mt-[200px]">
        <CommonHead head={rightHead} subhead={rightSubhead} />
        <div className="w-[6px] lg:h-[150vh] sm:h-[75vh] h-[180vh] bg-[#1a1d20] mt-[50px] flex flex-col items-center justify-between py-[120px]">
          <ContentBox />
          <ContentBox />
          <ContentBox />
        </div>
      </div>
    </div>
  );
};

export default EducationAndThree;
