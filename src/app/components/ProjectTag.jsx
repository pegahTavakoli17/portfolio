import React from "react";
export default function ProjectCard({ isActive, name, onClick }) {
  const style = isActive
    ? " border-purple-500  text-purple-500 "
    : " border-white ";
  return (
    <button
      className={`${style} w-[110px] h-[50px] text-white rounded-full font-semibold  border-2  text-center`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
