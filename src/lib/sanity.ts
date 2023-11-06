import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "bmazggnr",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const builder = ImageUrlBuilder(client);


export function urlFor(source:any){
    return builder.image(source);
}
