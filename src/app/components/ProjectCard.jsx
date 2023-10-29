import React from "react";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

export default function ProjectCard({ image, title, technology, gitUrl }) {
  return (
    <div className=" w-[280px] lg:w-[350px] lg:h-[350px] md:h-[400px] h-[350px] rounded-2xl border border-white mt-4 sm:mt-0 flex flex-col items-center ">
      <div
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
        }}
        className="text-center rounded-t-2xl h-[70%] min-h-[224px] md:h-[244px] lg:h-[300px] lg:w-[347px] w-[278px] bg-no-repeat px-2 group relative"
      >
        <div className="hidden justify-center items-center overlay w-full h-full absolute top-0 left-0 group-hover:flex group-hover:bg-opacity-80 bg-opacity-0 bg-[#181818]">
          <Link
            className="border border-[#b3b1b1] absolute top-1/2 left-1/2 w-14 h-14 rounded-full p-2 transform -translate-x-1/2 -translate-y-1/2 group/link hover:border-white "
            href={gitUrl}
          >
            <CodeBracketIcon className="text-[#b3b1b1] group-hover/link:text-[#fff] group-hover/link:border-white" />
          </Link>
        </div>
      </div>

      <h1 className="px-4 pb-4 mt-1 text-3xl text-center text-white">
        {title}
      </h1>
      <span className="px-4 pb-2 mx-auto text-center text-white">
        {technology}
      </span>
    </div>
  );
}
