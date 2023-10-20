import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const email = "anassohail34343@gmail.com";

  return (
    <div className="w-full h-screen flex flex-col items-center mt-12" id="contact">
      <div className="lg:w-1/2 h-16">
        <p className="text-center mt-4 font-semibold text-gray-600">
          Get in touch
        </p>
        <p className="text-center font-semibold text-4xl">Contact Me</p>
        <div className="w-80 m-auto mt-8 p-4">
          <p className="text-gray-700 text-justify">
            We value your feedback and are here to assist you in any way we can.
            If you have any queries or require further information about our
            products or services, please don&rsquo;t hesitate to reach out to us. Our
            dedicated support team is ready to provide answers to your questions
            and address any concerns you may have. Your satisfaction is our top
            priority, and we are committed to ensuring that your experience with
            us is smooth and enjoyable. So, if you ever find yourself in need of
            assistance, please feel free to contact us. We&rsquo;re just a message or
            a call away, eager to help and provide the support you deserve.
          </p>
        </div>
        <div className=" w-full lg:w-1/2 m-auto mt-4 h-32 border-2 border-black rounded-3xl">
          <div className="flex justify-start mt-4 mx-4">
            <p>
              <MdEmail className="text-2xl" />
            </p>
            <a href={`mailto:${email}`} className="text-gray-700">
              {email}
            </a>
          </div>
          <div className="flex justify-start mt-4 mx-4">
            <p>
              <MdEmail className="text-2xl" />
            </p>
            <p className="text-gray-700">
              <Link href={"https://www.linkedin.com/in/anas-sohail-038026262/"}>
                LinkedIn
              </Link>
            </p>
          </div>
          <div className="flex justify-start mx-4 mt-4">
            <p>
              <MdEmail className="text-2xl" />
            </p>
            <p className="text-gray-700">
              <Link href="tel:+923242650627">+923242650627</Link>
            </p>
          </div>
        </div>
        <div className="className=w-1/2 m-auto mt-12 h-24 text-center">
          <p className="text-sm text-gray-700">
            Copyright&copy;2023 Anas Sohail. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
