import Link from "next/link";
import React from "react";

const Navbar = () => {
  const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-100 p-4 lg:p-8 fixed top-0 z-10">
      <div className="flex w-full h-auto items-center">
        <p className="text-md lg:text-2xl font-bold flex-grow mx-2 lg:mx-12 ">
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer"
          >
            Anas Sohail
          </span>
        </p>
        <ul className="flex mx-1 md:mx-2 lg:mx-8">
          <li
            onClick={() => scroll("aboutSection")}
            className="mx-2 text-md lg:text-2xl hover:text-gray-400 cursor-pointer"
          >
            About
          </li>
          <li
            className="mx-2 text-md lg:text-2xl hover:text-gray-400 cursor-pointer"
            onClick={() => scroll("experience")}
          >
            Expertise
          </li>
          <li
            className="mx-2 text-md lg:text-2xl hover:text-gray-400 cursor-pointer"
            onClick={() => scroll("project")}
          >
            Projects
          </li>
          <li
            className="mx-2 text-md lg:text-2xl hover:text-gray-400 cursor-pointer"
            onClick={() => scroll("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
