import { client } from "@/lib/sanity";
import { CategoryInterface } from "../[category]/page";
import Link from "next/link";
import Image from "next/image";

const fetchAllProducts = async () => {
  const query = `*[_type == "product" && category->name == 'Hot' ]{
  _id,
    name,
    description,
    price,
    price_id,
    "image":image[0].asset->url,
    "slug":slug.current,
    "category":category->name
}`;
  const data = await client.fetch(query);
  return data;
};

const page = async () => {
  const data: CategoryInterface[] = await fetchAllProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8 mb-20">
        <div className="flex justify-center items-center py-8">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900">
            {data[0].category}<span className="text-primary"> Products</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product: any) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.image}
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
};

export default page;
