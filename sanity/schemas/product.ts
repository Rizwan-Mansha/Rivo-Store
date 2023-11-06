export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'image',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {source: 'name'},
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name:"price_id",
      title:"Stripe Pyment Id",
      type:"string"
    },
    {
      name: 'category',
      title: 'Category of Product',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
