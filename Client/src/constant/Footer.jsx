import React from "react";
import { TechNoob } from "../data/assets";
// import { footerLinks } from '../data/contact';

import { BsTwitter, BsInstagram} from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const footerItems = [
    {
      id: "1",
      item: "General",
    },
    {
      id: "2",
      item: "Terms Of Use",
    },
    {
      id: "3",
      item: "Privacy Policy",
    },
    {
      id: "4",
      item: "Security Policy",
    },
    {
      id: "5",
      item: "Careers",
    },
    {
      id: "6",
      item: "Support",
    },
  ];

  return (
    <div className="flex flex-col justify-center p-5 sm:p-10 items-center bg-[#3A3A3A] text-[#F5EFFB] h-[600px] w-full sm:h-[70vh]">
      <div className="flex flex-col sm:flex-row justify-start items-center  sm:h-auto w-full  gap-5 sm:mt-[3rem]">
        <div className="flex justify-center items-center w-full">
          <div className=" flex flex-col items-center justify-start w-full gap-y-4">
            <img src={TechNoob} alt="logo" className="w-[190px] h-[36px]" />

            <p className="text-sm w-[60%] sm:w-[35%] text-center text-[#F8F8F8]">
              Integrated People Platform for HR, Benefits, and Payroll. Drive
              better engagement and keep track of the indices that help your
              business grow.
            </p>

            <div className="flex gap-5 text-2xl text-white">
              {/* <BsWhatsapp className=''/> */}
              <BsTwitter className="cursor-pointer" />
              {/* <FaFacebookF/> */}
              <BsInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col sm:flex-row justify-start items-start sm:w-[700px]'>
                {footerLinks.map((footerLink, i) => (
                  <div key={i} className='flex flex-col justify-start items-start w-full mb-4'>
                    <h2 className='font-bold text-[20px] '>{footerLink.title}</h2>
                    <div className=''>
                      <ul className='list-none mt-4'>
                        {footerLink.links.map((link, i) => (
                            <li key={i} className='font-normal text-white hover:text-blue-400 cursor-pointer text-sm mb-2 '>{link.name}</li>
                            ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div> */}
      </div>

      <div className="mt-[50px] sm:mt-[90px] sm:flex flex-col justify-center items-center w-full">
        <div className="h-[1px] w-full sm:w-[80vw] bg-[#878E99] mb-3  " />

        <div className="flex flex-row flex-wrap mb-5">
          {footerItems.map((footerItem, i) => (
            <div
              key={i}
              className={`flex ${
                i !== footerItem.length - 1 ? "mr-4" : "mr-0"
              }  items-center justify-center`}
            >
              <p key={i} className="text-sm">
                {footerItem.item}
              </p>
              {i !== footerItems.length - 1 ? (
                <div className="h-[13px] w-[2px] ml-3 bg-[#878E99]" />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        <p className="text-sm">
          © Copyright 2020 Layers INC. All Rights Reserved. , #1, Lekki 1,
          Lagos, Nigeria
        </p>
      </div>
    </div>
  );
};

export default Footer;
