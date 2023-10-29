import React from "react";
import NavLink from "./NavLink";
export default function MenuOverlay({ navLinks }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <ul>
        {navLinks.map((navLink, index) => (
          <li className="p-2" key={index}>
            <NavLink href={navLink.path} title={navLink.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
