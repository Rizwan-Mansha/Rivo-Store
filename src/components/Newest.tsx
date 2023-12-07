import { client} from "@/lib/sanity";
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
        <div className="max-w-7xl mx-auto mb-24 mt-24">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="text-5xl font-bold px-8 font-serif text-gray-800">
                Newest Products
              </div>
              <p className="text-lg font-lg py-8 px-8 sm:px-2 text-gray-900">
                Welcome to the latest addition to our collection.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 max max-sm:w-5/6  mx-[9%]    md:justify-center  gap-x-4">
            {data.slice(0, 8).map((product: any) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square overflow-hidden rounded-md mb-4 bg-gray-200 group-hover:opacity-75 ">
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover    lg:h-full lg:w-full"
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

          <div className="flex justify-center items-center mt-12">
            <Link href="/AllProducts">
              <div className="w-40 h-12 bg-primary flex justify-center items-center rounded-md text-white ">
                See all
                <ArrowRight className="ml-1 w-8 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
}
