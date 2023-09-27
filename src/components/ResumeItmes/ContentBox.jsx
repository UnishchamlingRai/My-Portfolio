import React from "react";

const ContentBox = () => {
  return (
    <>
      <span className="rounded-full relative border-solid border-[#1a1d20] border-[4px] p-[6px] bg-bodyColor group-hover:bg-designColor hover:bg-designColor">
        <div className="w-[50px] absolute bg-[#1a1d20] h-[6px] top-[25%] left-[100%] group">
          <div className="sm:w-[450px] sm:h-[250px] w-[250px] shadow-shadowOne flex flex-col justify-center sm:gap-5 gap-10 bg-[#1a1d20] hover:bg-[#141618] hover:text-white cursor-pointer absolute left-[100%] top-[-120px] rounded-xl p-8">
            <div className="flex sm:flex-row gap-4 flex-col justify-between">
              <div>
              <h1 className="text-white text-2xl">BSc in Computer Science</h1>
              <p>University of DVI(2006-2010)</p>
              </div>
              <div className="py-3 px-6 rounded-lg shadow-shadowOne bg-[#1a1d20]">
                <p className="text-designColor">3.90</p>
              </div>
            </div>
            <p>
              The Traning provided by universities in order to prepare people to
              work in various sectors of the economy or areas of culture.
            </p>
          </div>
        </div>
      </span>
    </>
  );
};

export default ContentBox;
