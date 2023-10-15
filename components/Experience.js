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
      <div className="w-3/4 h-80 mt-12 flex justify-evenly p-4">
        <div className="w-2/5  border-2 border-gray-700  rounded-3xl">
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
                <p className="font-bold">React Js</p>
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
                <p className="font-bold">Next Js</p>
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
        <div className="w-2/5 border-2 border-gray-700  rounded-3xl">
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
                <p className="font-bold">Node Js</p>
              </div>
              <p className="text-gray-700">Intermediate</p>
            </div>
            <div className="w-1/3">
              <div className="flex">
                <p>
                  <TiTick className="text-2xl" />
                </p>
                <p className="font-bold">Express Js</p>
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
                <p className="font-bold">My Sql</p>
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
                <p className="font-bold">Fire Base</p>
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
