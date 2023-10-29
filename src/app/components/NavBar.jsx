"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";

export default function NavBar() {
  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav>
      <div className="flex flex-col md:hidden">
        <div className="flex justify-end   bg-[#121212] ">
          {navbarOpen ? (
            <div>
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <XMarkIcon className="w-5 h-5 p-1 text-white border border-white rounded" />
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <Bars3Icon className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
        </div>
        {navbarOpen ? <MenuOverlay navLinks={navLinks} /> : null}
      </div>

      <div
        className="hidden md:block fixed top-0 right-0 left-0 z-10 bg-[#121212]  "
        style={{ borderBottom: "1px solid #ADB7BE" }}
      >
        <ul className="flex flex-row justify-end p-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
