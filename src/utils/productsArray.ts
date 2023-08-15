
export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    category: string
}

const productsArray:Product[] = [
    {
        id:1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: "/images/1.webp",
        category: "phone"
    },
    {
        id:2,
        title: 'iPhone 94 Pro',
        description: 'This is iPhone 94 Pro',
        type: 'phone',
        capacity: '64',
        price: 18000,
        image: "/images/2.webp",
        category: "phone"
    },
    {
        id:3,
        title: 'iPhone 74 Pro',
        description: 'This is iPhone 74 Pro',
        type: 'phone',
        capacity: '64',
        price: 71000,
        image: "/images/3.webp",
        category: "phone"
    },
    {
        id:4,
        title: 'iPhone 64 Pro',
        description: 'This is iPhone 64 Pro',
        type: 'phone',
        capacity: '64',
        price: 16000,
        image: "/images/4.webp",
        category: "phone"
    },
    {
        id:5,
        title: 'iPhone 35 Pro',
        description: 'This is iPhone 35 Pro',
        type: 'phone',
        capacity: '64',
        price: 15000,
        image: "/images/5.webp",
      category: ""
    },
    {
        id:6,
        title: 'iPhone 44 Pro',
        description: 'This is iPhone 44 Pro',
        type: 'phone',
        capacity: '64',
        price: 11000,
        image: "/images/6.webp",
        category: ""
    },
]
export const getProductsObject=(array:Product[]) => 
array.reduce((object,product)=>({...object,[product.id]:product}),{})


export default productsArray