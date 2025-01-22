import { StaticImageData } from "next/image";
import product1 from "../../../../public/images/home/cover.png"
import product2 from "../../../../public/images/home/product-cover-5 (1).png"
import product3 from "../../../../public/images/home/product-cover-5 (2).png"
import product4 from "../../../../public/images/home/product-cover-5 (3).png"
import product5 from "../../../../public/images/home/product-cover-5 (4).png"
import product6 from "../../../../public/images/home/product-cover-5 (6).png"
import product7 from "../../../../public/images/home/product-cover-5 (7).png"
import product8 from "../../../../public/images/home/product-cover-5 (8).png";


export type ProductCardData = {

    image: string | StaticImageData
    title: string,
    category: string,
    prices: string,
  newPrices: string,
    id?:number
}

export const productCard: ProductCardData[] = [
  {
    image: product1 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:0
  },
  {
    image: product2 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:1
  },
  {
    image: product3 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:2
  },
  {
    image: product4 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:3
  },
  {
    image: product5 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:4
  },
  {
    image: product6,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:5
  },
  {
    image: product7 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:6
  },
  {
    image: product8 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices: `$${6.48}`,
    id:7
  },
];


