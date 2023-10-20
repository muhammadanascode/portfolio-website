import React from "react";
import { TiTick } from "react-icons/ti";

const Experience = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center 
justify-center"
id="experience"
    >
      <div className="w-1/2 h-16">
        <p
          className="text-center mt-4 font-semibold 
text-gray-600"
        >
          Explore my
        </p>
        <p className="text-center font-semibold text-4xl">Experience</p>
      </div>
      <div className="w-3/4 h-80 mt-12 p-2 lg:flex lg:justify-evenly lg:p-4">
        <div className="w-full lg:w-2/5 p-2  border-2 border-gray-700  rounded-3xl">
          <div className="w-full m-auto text-center">
            <p className="text-2xl text-gray-700 font-semibold mt-4">
              FrontEnd Development
            </p>
          </div>
          <div className="flex w-full justify-evenly mt-4">
            <div className="w-1/3">
              <div className="flex m-auto">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">Html</p>
              </div>
              <p className="text-gray-700">Experienced</p>
            </div>
            <div className="w-1/3">
              <div className="flex">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">Css</p>
              </div>
              <p className="text-gray-700">Experienced</p>
            </div>
          </div>
          <div className="flex w-full justify-evenly mt-4">
            <div className="w-1/3">
              <div className="flex m-auto">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">JavaScript</p>
              </div>
              <p className="text-gray-700">Experienced</p>
            </div>
            <div className="w-1/3">
              <div className="flex">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">ReactJs</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
          </div>
          <div className="flex w-full justify-evenly mt-4">
            <div className="w-1/3">
              <div className="flex m-auto">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">NextJs</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
            <div className="w-1/3">
              <div className="flex">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">Tailwind</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 lg:mt-0 lg:w-2/5 border-2 border-gray-700  rounded-3xl">
          <div className="w-full m-auto text-center">
            <p className="text-2xl text-gray-700 font-semibold mt-4">
              BackEnd Development
            </p>
          </div>
          <div className="flex w-full justify-evenly mt-4">
            <div className="w-1/3">
              <div className="flex m-auto">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">NodeJs</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
            <div className="w-1/3">
              <div className="flex">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">ExpressJs</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
          </div>
          <div className="flex w-full justify-evenly mt-4">
            <div className="w-1/3">
              <div className="flex m-auto">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">MySql</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
            <div className="w-1/3">
              <div className="flex">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">MongoDB</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
          </div>
          <div className="flex w-full justify-evenly mt-4">
            <div className="w-1/3">
              <div className="flex m-auto">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">Python</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
            <div className="w-1/3">
              <div className="flex">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">FireBase</p>
              </div>
              <p className="text-gray-700">Basic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
