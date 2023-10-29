"use client";
import React, { startTransition, useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
export default function AboutMeSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleChangeTab = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const TAB_DATA = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="pl-2 text-white list-disc">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next</li>
          <li>MUI</li>
          <li>Vue</li>
          <li>Vuetify</li>
          <li>Css</li>
          <li>Tailwind</li>
          <li>Bootstarp</li>
          <li>Html</li>
          <li>Git</li>
          <li>RESTful API</li>
          <li>Axios</li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul className="pl-2 text-white list-disc">
          <li>Electronics Engineering at Alzahra University</li>
        </ul>
      ),
    },
    {
      title: "experiences",
      id: "experiences",
      content: (
        <ul className="pl-2 text-white list-disc">
          <li>front-end developer at Sarmad business services (1 year)</li>
          <li>product designer and tester at Mohaymen ICT (4 months)</li>
          <li>Administrative Officer at Kanoon Ghalamchi (5 years)</li>
        </ul>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative lg:min-h-screen min-h-[750px] w-full md:min-w-[280px] "
    >
      <div className="relative flex items-center  py-8 md:grid md:grid-cols-12 sm:py-16 ">
        <div className="absolute top-5 md:col-span-6 md:w-[350px] md:h-[350px] lg:w-[500px] lg:w-[500px]">
          <Image
            src={"/about-image.png"}
            width={500}
            height={500}
            className="hidden sm:block"
          ></Image>
        </div>
        <div className="sm:absolute flex flex-col md:pl-6 md:ml-5 top-5  sm:left-1/2 ">
          <h1 className="text-5xl font-bold text-white text-left ">About me</h1>
          <p className="mt-3 text-white lg:text-lg text-left w-[95%]">
            I am a front-end developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            JavaScript, React,Vue, HTML, CSS, and Git. I am a quick learner and
            I am always looking to expand my knowledge and skill set. I am a
            team player and excited to work with others to create amazing webs.
          </p>
          {/* tabs */}
          <div className="flex justify-start w-full p-5 pl-0 text-left">
            {TAB_DATA.map((tab1, index1) => (
              <div className="p-4 text-purple-500" key={index1}>
                <TabButton
                  active={tab1.id === tab}
                  key={tab1.id}
                  selectTab={() => handleChangeTab(tab1.id)}
                >
                  {tab1.title}
                </TabButton>
              </div>
            ))}
          </div>
          <div>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}
