import React from "react";
import { GrCertificate } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" id="aboutSection">
      <div className="w-1/2 h-16">
        <p className="text-center mt-4 font-semibold text-gray-600">
          Get to know more
        </p>
        <p className="text-center font-semibold text-4xl">About Me</p>
      </div>
      <div className="lg:flex lg:justify-evenly w-full h-48 mt-12">
        <div className="w-72 m-auto lg:m-0 lg:w-1/4 p-4 border-2 border-gray-700 rounded-xl text-center">
          <p className="flex items-center justify-center">
            <GrCertificate className="text-4xl" />
          </p>
          <p className="font-bold">Experience</p>
          <p className="text-gray-700">1+ years</p>
          <p className="text-gray-700">Frontend Development</p>
        </div>
        <div className="w-72 m-auto mt-4 lg:m-0 lg:w-1/4 p-6 border-2 border-gray-700 rounded-xl text-center">
          <p className="flex items-center justify-center">
            <MdCastForEducation className="text-4xl" />
          </p>
          <p className="font-bold">Education</p>
          <p className="text-gray-700">Fsc Pre-Engineering</p>
          <p className="text-gray-700">Bsc. UnderGraduate</p>
        </div>
      </div>
      <div className="w-96 m-44 lg:w-1/2 h-54 lg:mt-12">
        <p className="text-justify text-gray-700 font-semibold">
          I am currently in my second semester, pursuing a degree in computer
          science from the University of Karachi. My primary goal is to leverage
          the skills I have acquired in web development. With a strong
          foundation in programming and an understanding of core concepts, I am
          ready to explore the world of web development. I have honed my
          expertise in languages such as HTML, CSS, and JavaScript, and I am
          eager to dive deeper into front-end frameworks like React or Angular.
          Additionally, I am keen on expanding my knowledge in back-end
          development using languages such as Python or Node.js. Through
          practical projects and continuous learning, I am determined to enhance
          my web development skills and become a valuable asset in the
          ever-evolving field of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
