"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function HeroSection() {
  return (
    <section className="p-0 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="p-5 mx-auto font-extrabold text-center text-transparent sm:text-left ps-0 sm:ps-5 bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500 sm:text-3xl">
            <TypeAnimation
              sequence={["pegah tavakoli", 1000, "Front-End Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <div className="flex flex-wrap ">
            <p className="mt-8 mb-4 text-lg text-center text-white sm:pr-5 sm:mr-5 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              suscipit debitis voluptatem tenetur magnam sint blanditiis
              quibusdam voluptatum nihil? Exercitationem.
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-col pt-5 mt-5 mb-5 text-center sm:text-left sm:flex-row sm:mb-0">
            <a href="/myCV.pdf" download>
              <button className="inline-block w-full px-1 py-1 text-white rounded-full sm:w-fit bg-gradient-to-br from-purple-500 to-pink-500 ">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3 ">
                  Download CV
                </span>
              </button>
            </a>
            <button className="w-full px-6 py-3 mt-4 ml-0 text-lg font-bold text-white rounded-full bg-gradient-to-br from-purple-500 to-pink-500 sm:w-fit sm:mt-0 sm:ml-3 place-self-center hover:bg-slate-200">
              Contact me
            </button>
          </div>
        </div>
        <div className="col-span-5 sm:ml-10 flex  w-[270px] h-[270px] sm:h-[500px] sm:w-[500px] place-self-center mt-5 sm:mt-0">
          <Image
            width={450}
            height={450}
            alt="my picture"
            src={"/myImage.jpg"}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </section>
  );
}
