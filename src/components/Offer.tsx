import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import OfferImage from '../../public/elegant-woman-straw-hat-isolated 2.png'

const Offer = () => {
  return (
    <section className="max-w-7xl mb-32 ">
      <div className="relative mx-auto flex flex-col  md:flex-row justify-center items-center bg-gray-200 w-[80vw]  md:w-[800px] lg:w-[1050px]  md:h-96 md:mx-auto lg:mx-auto">
        <div className="flex-1">
          <div className="absolute top-80 md:top-36 md:left-6 lock">
          </div>

          <div className="md:ml-10 z-0 flex justify-center">
            <Image
              src={OfferImage}
              alt="Offer Image"
              className="md:h-96 object-contain"
            />
          </div>
        </div>

        <div className="flex-1  mx-3 order-last md:order-none text-gray-800 max-md:mt-32  mb-12">
          <h4 className="text-3xl font-semibold text-center sm:text-start">
            Exclusive offer
          </h4>
          <p className="text-md mt-5 font-medium">
            Unlock the ultimate style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on our latest New Arrivals
          </p>
          <div className="flex gap-x-5 ">
            <div className="bg-gray-300 w-16 h-16 mt-5 flex items-center justify-center flex-col ">
              <p className="text-lg font-semibold">06</p>
              <p className="">Days</p>
            </div>
            <div className="bg-gray-300 w-16 h-16 mt-5 flex items-center justify-center flex-col ">
              <p className="text-lg font-semibold">18</p>
              <p className="">Hours</p>
            </div>
            <div className="bg-gray-300 w-16 h-16 mt-5 flex items-center justify-center flex-col ">
              <p className="text-lg font-semibold">48</p>
              <p className="">Min</p>
            </div>
          </div>
          <Button className="text-white bg:text-primary hover: mt-5 w-32">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Offer
