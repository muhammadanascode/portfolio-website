import Image from "next/image";
import Link from "next/link";
import React from "react";

const mysection = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 h-96">
        <Image
          className="rounded-full float-right"
          src="/Anas.jpg"
          width={300}
          height={300}
          alt="img"
        />
      </div>
      <div className="w-1/2 h-96 p-10">
        <div className="w-1/2">
          <p className="text-center font-semibold text-gray-600">Hello, I'm</p>
        </div>
        <div className="w-1/2">
          <p className="text-4xl font-bold text-center">Anas Sohail</p>
        </div>
        <div className="w-1/2 my-4">
          <p className="text-center text-gray-600 text-xl font-semibold">
            MERN Stack Developer
          </p>
        </div>
        <div className="flex justify-evenly w-3/6">
          <button className="w-1/3 p-2 border-2 border-black rounded-xl text-xs">
            Download CV
          </button>
          <button className="w-1/3 p-2 bg-black text-white rounded-xl text-xs">
            Contact Info
          </button>
        </div>
        <div className="flex justify-center w-1/2 my-4">
          <Link href={"https://github.com/muhammadanascode"}>
            <Image
              className="rounded-full mx-1"
              src={"/github.png"}
              width={40}
              height={20}
              alt="img"
            />{" "}
          </Link>
          <Link href={"https://www.linkedin.com/in/anas-sohail-038026262/"}>
            <Image
              className="rounded-full mx-1"
              src={"/linkedin.png"}
              width={40}
              height={20}
              alt="img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default mysection;
