import React from "react";
import CommonHead from "./CommonHead";

import MyProjectbox from "./MyProjectbox";
import { myProjectData } from "../data";

const MyProject = () => {
  return (
    <div
      id="projects"
      className="flex flex-col gap-10 py-[50px] mb-[20px] items-center"
    >
      <CommonHead subhead={"MY PROJECTS"} />
      {/* <h1>MY PROJECTS</h1> */}
      <div className="sm:grid flex flex-col sm:grid-flow-rows gap-12 grid-cols-2 lg:grid-cols-3 ">
        {myProjectData.map((data, index) => {
          return (
            <MyProjectbox
              img={data.img}
              title={data.title}
              dis={data.dis}
              key={index}
              projectLink={data.projectLink}
              githubLink={data.githubLink}
              APIdocumentationLink={data.APIdocumentationLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProject;
