"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

interface SliderInterface {
    _id: string,
    name: string,
    price: string,
    slug: string,
    image: string

}

const Slider = ({ slides }: { slides:  SliderInterface[]}) => {
  const breakpoint = 640;
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      breakpoints={{
        [`@media (max-width: ${breakpoint}px)`]: {
          slidesPerView: 1,
        },
      }}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {
            <div className="relative mt-12 h-[320px] sm:h-96  ">
              <Link href={`product/${slide.slug}`}>
                <div className=" absolute cursor-pointer hover:scale-110 duration-500 ">
                  <div className="">
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      width={300}
                      height={300}
                      className=" w-[420px] object-cover h-72 md:h-80"
                    />
                  </div>

                  {/* <div className="font-semibold text-lg">
                    <h2 className="center">{slide.name}</h2>
                    <p className="center">${slide.price}</p>
                  </div> */}
                </div>
              </Link>
            </div>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
