import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import InputWithButton from "./InputWithButton";

const Shop = ["Products", "Overview", "Pricing", "Releases"];
const Company = ["About Us", "Contact", "News", "Support"];

const Footer = () => {
  return (
    <section className="relative  max-w-7xl h-[500px] sm:h-[450px] lg:h-[360px]  text-gray-800 bg-gray-300 ">
      <div className="lg:flex md:gap-x-32 ">
        <div className="px-6 sm:flex sm:gap-x-24 md:gap-x-32 ">
          <div className="md:my-16 sm:my-12 ">
            <p className=" font-bold font-serif text-2xl mb-4">RizStore</p>
            <p className="text-sm font-serif">Social Media</p>
            <div className=" flex justify-start items-center gap-x-5 my-3">
              <Link
                href="https://www.facebook.com/profile.php?id=100017772258554"
                target="_blank">
                <Facebook />
              </Link>
              <Link href="https://twitter.com/Muhamma60041182" target="_blank">
                <Twitter />
              </Link>
              <Link href={"https://www.instagram.com/riz_mansha/"} target="_blank">
                <Instagram />
              </Link>
            </div>
          </div>

          <div className="sm:my-12  flex  gap-x-20 max-sm:mt-6 md:my-16">
            <div className=" mb-12">
              <h3 className="font-semibold mb-4">SHOP</h3>
              {Shop.map((item, idx) => (
                <li key={idx} className="list-none ">{item}</li>
              ))}
            </div>
            <div className="gap-x-5">
              <h3 className="font-semibold mb-4">COMPANY</h3>
              {Company.map((item,idx) => (
                <li key={idx} className="list-none">{item}</li>
              ))}
            </div>
          </div>
        </div>

        <div className=" md:mb-4 lg:my-16">
          <p className="px-6 font-serif mb-4">STAY UP TO DATE</p>
          <div className="px-4 ">
            <InputWithButton />
          </div>
        </div>
      </div>

      <div className=" items-center my-16 sm:my-12 md:my-0">
        <div className="flex justify-center items-center gap-x-12 md:mb-12">
          <div className="w-80 mx-2 sm:w-[440px] md:w-[650px] h-1 text-lg border-gray-500   border-2"></div>
          <div className="flex gap-x-6">
            <p className="">Terms</p>
            <p className="">Privacy</p>
            <p className="">Cookies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
