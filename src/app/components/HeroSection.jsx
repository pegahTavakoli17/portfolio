"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="p-0 lg:pb-16 md:mt-16 lg:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div
          className="col-span-7 lg:mt-10"
          style={{ verticalAlign: "middle" }}
        >
          <h1 className="pl-0 pr-0 mx-auto font-extrabold text-center text-transparent md:p-5 sm:text-left sm:pr-5 bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500 sm:text-3xl">
            <TypeAnimation
              sequence={["Pegah Tavakoli", 1000, "Front-End Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              className="text-2xl lg:text-6xl md:text-4xl"
            />
          </h1>

          <div className="flex flex-wrap ">
            <p className="mt-8 mb-4 text-lg text-center text-white md:text-left lg:text-xl">
              fueled by boundless curiosity and a passion for learning. I
              believe in the power of embracing challenges and pushing the
              boundaries of my comfort zone, as it&apos;s where growth and
              extraordinary experiences thrive.
            </p>
          </div>
          {/* buttons */}
          <div className="sticky flex flex-col pt-5 mb-5 text-center sm:text-left sm:flex-row sm:mb-0 left-1/4">
            <a href="/myCV.pdf" download>
              <button className="inline-block w-full px-1 py-1 text-white rounded-full sm:w-fit bg-gradient-to-br from-purple-500 to-pink-500 ">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3 ">
                  Download CV
                </span>
              </button>
            </a>
            <Link href={"#contact"}>
              <button className="w-full px-6 py-3 mt-4 ml-0 text-lg font-bold text-white rounded-full bg-gradient-to-br from-purple-500 to-pink-500 sm:w-fit sm:mt-0 sm:ml-3 place-self-center hover:bg-slate-200">
                Contact me
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden col-span-1 lg:block">&nbsp;</div>
        <div className="col-span-4 lg:ml-8 flex  w-[230px] h-[230px] lg:h-[500px] lg:w-[500px] place-self-center mt-5 sm:mt-0 ">
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
