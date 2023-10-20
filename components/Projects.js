import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="w-full lg:h-screen flex flex-col items-center justify-center mt-40 lg:mt-0" id="project">
      <div className="w-1/2 h-16">
        <p className="text-center mt-4 font-semibold text-gray-600">
          Browse my recent
        </p>
        <p className="text-center font-semibold text-4xl">Projects</p>
      </div>
      <div className="lg:flex w-full justify-evenly h-54 m-auto mt-8 p-4">
        <Card
          img={"/blog.jpeg"}
          title={"Blogging App"}
          description={"Express your thoughts, share your stories."}
          link={"https://github.com/muhammadanascode/personalblogapp"}
        />
        <Card
          img={"/budget.jpg"}
          title={"Budget Manager"}
          description={"Master your budget effortlessly with our app"}
          link={"https://github.com/muhammadanascode/budgetmanager"}
        />
        <Card
          img={"/esite.jpg"}
          title={"Ecommerce Site"}
          description={"Your online shopping destination"}
          link={"https://github.com/muhammadanascode/primefind"}
        />
      </div>
    </div>
  );
};

export default Projects;
