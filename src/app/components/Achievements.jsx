"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Achievements() {
  const achievementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const myAchievements = [
    { title: "year", value: "1", postfix: "" },
    { title: "projects", value: "10", postfix: "+" },
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
    <div className="flex justify-center items-center">
      <div
        ref={achievementRef}
        className="flex justify-center mx-auto mt-6 text-center border border-purple-500 sm:mt-0 sm:mb-4 lg:w-1/2 rounded-xl md:mt-8 lg:mt-0"
      >
        {myAchievements.map((item, index) => (
          <div key={index} className="px-10 py-5">
            {isVisible && (
              <CountUp
                end={parseInt(item.value)}
                className="text-3xl font-bold text-white"
              />
            )}
            {isVisible && (
              <span className="text-white text-3xl">{item.postfix}</span>
            )}
            <p className="mt-1 text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
