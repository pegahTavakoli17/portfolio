import React from "react";
import NavLink from "./NavLink";
export default function MenuOverlay({ navLinks }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <ul>
        {navLinks.map((navLink) => (
          <li className="p-2">
            <NavLink href={navLink.path} title={navLink.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
