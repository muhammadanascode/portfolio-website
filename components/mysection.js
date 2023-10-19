import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const mysection = () => {
  return (
    <div className="mt-36 lg:flex lg:items-center lg:justify-center h-screen lg:mt-16">
      <div className="w-1/2 h-48 lg:h-96 m-auto ">
        <Image
          className="rounded-full float-right"
          src="/Anas.jpg"
          width={300}
          height={300}
          alt="img"
        />
      </div>
      <div className="w-full lg:w-1/2 h-96 p-10 ">
        <div className="w-full m-auto lg:m-0 lg:w-1/2">
          <p className=" text-center font-semibold text-gray-600">Hello, I'm</p>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.p
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-4xl font-bold text-center"
          >
            Anas Sohail
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 my-4">
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            className="text-center text-gray-600 text-xl font-semibold"
            transition={{ delay: 0.2 }}
          >
            MERN Stack Developer
          </motion.p>
        </div>
        <div className="w-full  lg:m-0 lg:flex lg:justify-evenly lg:w-3/6">
          <button className="w-full my-8 lg:w-1/3  p-2 border-2 border-black rounded-xl text-xs">
            Download CV
          </button>
          <button className="w-full my-8 lg:w-1/3 p-2 bg-black text-white rounded-xl text-xs">
            <Link href={"https://www.facebook.com/ANASCX/"}>view facebook</Link>
          </button>
        </div>
        <div className="flex justify-center lg:w-1/2 my-8 lg:my-4">
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
