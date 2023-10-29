import React from "react";
import Link from "next/link";
export default function NavLink({ href, title }) {
  return (
    <div>
      <Link
        href={href}
        className="text-[#ADB7BE] hover:text-white p-4 text-xl font-semibold"
      >
        {title}
      </Link>
    </div>
  );
}
