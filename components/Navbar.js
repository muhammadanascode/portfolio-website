import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-24 bg-gray-100 p-8">
  <div className="flex w-full h-auto items-center">
    <p className="text-2xl font-semibold flex-grow mx-12">Anas Sohail</p>
    <ul className="flex mx-8">
      <li className="mx-4 text-2xl hover:text-gray-400 hover:cursor-pointer">About</li>
      <li className="mx-4 text-2xl hover:text-gray-400 hover:cursor-pointer">Experience</li>
      <li className="mx-4 text-2xl hover:text-gray-400 hover:cursor-pointer">Projects</li>
      <li className="mx-4 text-2xl hover:text-gray-400 hover:cursor-pointer">Contact</li>
    </ul>
  </div>
</div>

  );
};

export default Navbar;
