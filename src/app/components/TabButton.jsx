import React from "react";
import { motion } from "framer-motion";
export default function TabButton({ children, selectTab, active }) {
  const buttonClass = active ? "text-purple-500" : "text-white";
  const variants = {
    active: { width: "100%" },
    default: { width: 0 },
  };
  return (
    <button onClick={selectTab}>
      <p className={buttonClass}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-1"
      />
    </button>
  );
}
