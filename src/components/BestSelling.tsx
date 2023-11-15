import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import Slider from "./view/Swiper";
import Link from "next/link";

const getData = async () => {
  const query = `*[_type == 'product' && rating == '5.0']{
        name,
        _id,
        price,
        "slug":slug.current,
        "image": image[0].asset->url
    }`;
  const fetchData = async () => {
    const data = await client.fetch(query);
    return data;
  };
  return await fetchData();
};

const keyWords = [
  { name: "Sale", link: "/Sale" },
  { name: "Hot", link: "/Hot" },
  { name: "New Arrivals", link: "/NewArrivals" },
  { name: "Accessories", link: "/Accessories" },
];


const BestSelling = async () => {
  const data = await getData();
 
  
  return (
    <section className=" max-w-7xl mx-auto mb-32">
      <div className="lg:w-xl lg:mx-16">
        <div className="flex flex-col justify-center items-center">
          <div className="text-5xl font-bold font-serif">Best Selling</div>
         
        </div>
        <div className="flex justify-center gap-x-2 sm:gap-x-8 mx-auto md:gap-x-16 mt-12 font-semibold text-gray-700 hover:text-[#224F34] ">
          {keyWords.map((word) => (
            <li className="list-none ">
              <Link href={word.link}>
                <h3 className="uppercase hover:underline">{word.name}</h3>
              </Link>
            </li>
          ))}
        </div>

        <div className="mx-12">
          <Slider slides={data} />
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
