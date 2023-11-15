import Image from "next/image";
import React from "react";
import HeroImage from "/public/Hero.png";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";

const getData = () => {
  const query = `*[_type == 'designClothes'][0...4]{
        "image": image.asset->url,
        category,
        imageDescription,
  }`;
  const fetchData = async () => {
    const data:DataInterface[] = await client.fetch(query);
    return data;
  };
  const FetchedData = fetchData();
  return FetchedData;
};

interface DataInterface{
  image:string,
  category: string,
  imageDescription: string
}
const DesignCloth = async () => {
  const data = await getData();
  return (
    <section className="  max-w-7xl mx-auto mb-24">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl text-gray-900 md:text-5xl font-bold px-8 sm:px-2">
            Designer Clothes For You
          </div>
          <p className=" text-gray-800 text-lg  lg:text-xl py-8 px-8 max-w-[85%]  sm:px-2">
            Immerse yourself in the world of luxury fashion with our
            meticulously crafted designer clothes!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 max max-sm:w-5/6  mx-[9%]    md:justify-center  gap-x-4">
          {data.map((product: DataInterface, idx:number) => (
            <div key={idx} className="aspect-square overflow-hidden rounded-md mb-4 bg-gray-200 group-hover:opacity-75 ">
              <Image
                src={product.image}
                alt="Best Selling"
                className="bg-green-100 w-full h-full object-cover "
                width={400}
                height={400}
              />

              <div className="px-6 flex flex-col  items-center ">
                <h3 className="mt-8 text-base font-semibold pb-1.5 ">
                  {product.category}
                </h3>
                <div className="flex  gap-x-12  mx-auto">
                  <p className="">{product.imageDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignCloth;
