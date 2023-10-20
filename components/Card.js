import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ img, title, description, link }) => {
  return (
    <div className="bg-white shadow-xl my-6 ring-[#038cfc] rounded-lg overflow-hidden">
      <Image
      className="w-96 h-64"
        src={img}
        alt="Card Image"
        width={400}
        height={200}
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">
          {description}
        </p>
        <div className="mt-4">
          <Link href={link} className="text-blue-500 hover:underline">
            view in Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
