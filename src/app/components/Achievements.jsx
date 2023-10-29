"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Achievements() {
  const achievementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const myAchievements = [
    { title: "years", value: "6" },
    { title: "projects", value: "10" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    if (achievementRef.current) {
      observer.observe(achievementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={achievementRef}
      className="flex justify-center mx-auto mt-6 text-center border border-purple-500 sm:mt-0 sm:mb-4 lg:w-1/2"
    >
      {myAchievements.map((item, index) => (
        <div key={index} className="px-12 py-5">
          {isVisible && (
            <CountUp
              end={parseInt(item.value)}
              className="text-3xl font-bold text-white"
            />
          )}
          <p className="mt-1 text-white">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
