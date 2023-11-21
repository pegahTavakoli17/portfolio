"use client";
import React from "react";
import Link from "next/link";
import GitHubIcon from "../../../public/GitHubIcon";
import LinkedInIcon from "../../../public/LinkedIn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function EmailSection() {
  return (
    <section className=" lg:px-5 lg:mt-16 pt-8 md:pb-[50px]" id="contact">
      <div className="flex flex-col ">
        <h1 className=" text-[#fff] text-4xl lg:text-5xl font-bold text-left">
          let&apos;s connect
        </h1>
        <p className="mt-4 text-[#ccc]">
          I&apos;m currently looking for new opportunities, my inbox is always
          open.
        </p>
        <p className="text-[#ccc]">I&apos;ll try my best for you!</p>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-12 ">
          <Link
            href="https://github.com/pegahTavakoli17"
            target="_blank"
            className="flex items-center justify-start md:mt-5 md:col-span-3 "
          >
            <GitHubIcon />
            <span className="text-white">pegahTavakoli17</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pegah-tavakoli-49664614a"
            target="_blank"
            className="flex items-center justify-start mt-5 md:col-span-3 "
          >
            <LinkedInIcon />
            <span className="text-white">pegah Tavakoli</span>
          </Link>
          {/* <div className="flex items-center justify-start mt-5 md:col-span-4 ">
            <PhoneIphoneIcon className="w-12 h-12 text-white" />
            <span className="text-white">9126794138</span>
          </div> */}
          {/* <div className="flex items-center justify-start mt-5 md:col-span-4 ">
            <TelegramIcon className="w-12 h-12 text-white" />
            <span className="text-white">pegahTavakoli</span>
          </div> */}
          {/* <div className="flex items-center justify-start mt-5 md:col-span-4 ">
            <InstagramIcon className="w-10 h-10 text-white" />
            <span className="text-white">pegah-Tavakoli-web</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
