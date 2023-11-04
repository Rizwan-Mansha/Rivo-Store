'use client'
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import React, { useState } from "react";

interface iAppProps {
  images: any;
  name: string;
}

const ImageGallery = ({ images, name }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleBigImage = (image:any)=>{
        setBigImage(image)
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100 ">
            <Image
              src={urlFor(image).url()}
              alt={name}
              width={500}
              height={500}
              className="w-full h-full object-cover object-center cursor-pointer"
            onMouseEnter={()=>handleBigImage(urlFor(image).url())}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-md bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt={name}
          width={1024}
          height={1024}
          className=" object-contain h-full w-full"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-400 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
