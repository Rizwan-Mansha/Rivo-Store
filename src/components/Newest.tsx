import { client } from "@/lib/sanity";
import { simplifiedProduct } from "./interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type =='product'] | order(_createdAt desc){
  _id,
  price,
  name,
  "slug": slug.current,
  "categoryName":category->name,
  "imageUrl": image[0].asset->url
  
    
}`;
const data = client.fetch(query);
return data;
}

export default async function Newest() {
    const data:simplifiedProduct[] = await getData();

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Newest Products
            </h2>

            <Link
              className="text-primary flex items-center gap-x-1"
              href="/all">
              See All{" "}
              <span className="">
                <ArrowRight />
              </span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="">
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="text-sm text-gray-700">{product.name}</h3>
                    </Link>

                    <p className="mt-1 text-sm  text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
