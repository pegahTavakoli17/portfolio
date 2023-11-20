import React from "react";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";

export default function ProjectCard({ project }) {
  return (
    <div className=" w-[100%] lg:min-w-[350px]  lg:h-[370px] md:h-[400px] h-[420px] rounded-2xl border border-white mt-4 sm:mt-0 flex flex-col items-center ">
      <div
        style={{
          background: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          objectPosition: "center",
        }}
        className="text-center rounded-t-2xl h-[70%] pt-3 min-h-[224px]   w-[100%] bg-no-repeat px-2 group relative"
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            target="_blank"
            href={project.gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            target="_blank"
            href={project.webUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <h1 className="px-4 pb-4 mt-1 text-3xl text-center text-white">
        {project.title}
      </h1>
      <span className="px-4 pb-2 mx-auto text-center text-white">
        {project.technology}
      </span>
    </div>
  );
}
