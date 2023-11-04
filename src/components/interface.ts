
export interface simplifiedProduct{
    _id:string,
    price:number,
    name:string,
    slug:string,
    imageUrl:string,
    categoryName:string
}

export interface fullProduct {
  _id: string;
  slug: string;
  name: string;
  description:string,
  categoryName: string
  image: any;
  price:string
}