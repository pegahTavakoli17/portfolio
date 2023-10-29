"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
export default function Projects() {
  const ref = useRef(null);
  const cardsVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const isInView = useInView(ref, { once: true });
  const projects = [
    {
      id: 1,
      title: "music player",
      technology: "Html, Css, JavaScript, Tailwind",
      image: "/music.png",
      gitUrl: "https://github.com/pegahTavakoli17/music-player",
    },
    {
      id: 2,
      title: "travell",
      technology: "Html, Css, JavaScript, React, Bootstrap, mui",
      image: "/travell.png",
      gitUrl: "/",
    },
    {
      id: 3,
      title: "dove landing",
      technology: "Html, Css, Bootstrap",
      image: "/dove.png",
      gitUrl: "https://github.com/pegahTavakoli17/dove",
    },
    {
      id: 4,
      title: "online gym",
      technology: "Html, Css, JavaScript, Vue, Vuetify",
      image: "/gym.png",
      gitUrl: "https://github.com/pegahTavakoli17/onlineGym",
    },
  ];
  return (
    <div id="projects">
      <h1 className="text-5xl font-bold text-center text-white mt-14 sm:mt-0">
        my projects
      </h1>

      <div
        ref={ref}
        className="grid items-center justify-center grid-cols-1 mx-auto mt-8 text-center md:grid-cols-12"
      >
        {projects.map((project, index) => {
          return (
            <motion.div
              className="mx-auto mt-5 text-center lg:col-span-4 md:col-span-6 md:pl-3 md:pr-3"
              key={index}
              variants={cardsVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.4 }}
            >
              <ProjectCard
                image={project.image}
                technology={project.technology}
                title={project.title}
                gitUrl={project.gitUrl}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
