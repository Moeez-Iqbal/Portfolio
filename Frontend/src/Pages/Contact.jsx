import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

import {
  IoPersonSharp,
  IoCall,
  IoSend,
  IoLocation,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center m-24">
        <h1 className="text-1xl text-gray-400">Feel Free to Contact Me</h1>
        <div className="flex justify-center gap-4 mt-4">
          <h1 className="text-3xl text-white font-bold">Get In</h1>
          <h1 className="text-3xl text-orange-500 font-bold">Touch</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-40">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-4 ml-8 md:ml-36">
          <h1 className="text-3xl text-white font-semibold">Contact Me</h1>
          <ContactForm />
          <button className="bg-orange-500 p-2 w-30 text-white rounded-lg hover:bg-slate-800 transform transition-transform duration-300 hover:-translate-y-2 font-semibold flex items-center justify-center mt-4">
            <span className="ml-2">Send</span>
            <IoSend />
          </button>
        </div>

        <div className="md:w-1/2 md:pl-4 ml-8 md:ml-36">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Contact Info
          </h1>
          <div className="flex flex-col mt-4">
            <ContactInfo
              icon={
                <IoPersonSharp className="text-3xl text-white hover:text-orange-500" />
              }
              details="Moeez Iqbal"
            />
            <ContactInfo
              icon={
                <IoCall className="text-3xl text-white hover:text-orange-500" />
              }
              details="03044096036"
            />
            <ContactInfo
              icon={
                <IoMdMail className="text-3xl text-white hover:text-orange-500" />
              }
              details="moeeziqbalmughal@gmail.com"
            />
            <ContactInfo
              icon={
                <IoLocation className="text-3xl text-white hover:text-orange-500" />
              }
              details="Lahore, Pakistan"
            />
          </div>
          <div className="mt-8">
            <div className="flex gap-4">
              <h1 className="text-gray-400 text-2xl font-semibold">
                Social ________
              </h1>
              <a
                href="https://www.linkedin.com/in/Moeez-Iqbal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://github.com/Moeez-Iqbal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://twitter.com/MoeezIqbal16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoTwitter className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://www.facebook.com/moeez.iqbal.50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://wa.me/+923044096036"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
