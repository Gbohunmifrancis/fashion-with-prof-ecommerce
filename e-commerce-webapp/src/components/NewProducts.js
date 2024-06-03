import React from 'react'

const ProductsData = [
    {
        img:"/vintage.jpg",
        title: "Vintage Men Shirt",
        desc: "An affordable vintage to elevate your Steeze level🤗",
        rating: "5",
        price: "45",

    },
    {
        img:"/cartier",
        title: "Cartier Men Wristwatch",
        desc: "Diamond-like stones Cartier Watch",
        rating: "5",
        price: "89",

    },
    {
        img:"/watch-1.jpg",
        title: "Standard Watch for Men",
        desc: "Digital Watch",
        rating: "4",
        price: "14",

    },
    {
        img:"/watch-2.jpg",
        title: "Standard watch for Men",
        desc: "Digital Watch",
        rating: "5",
        price: "15",

    },
    {
        img:"/sports.jpg",
        title: "Sports Boot",
        desc: "Boots for all Football Lovers",
        rating: "3",
        price: "28",

    },
    {
        img:"/skirts-1.jpg",
        title: "Women Skirts",
        desc: "Deeper-life Skirts for our Sisters",
        rating: "5",
        price: "20",

    },
    {
        img:"shirt-1.jpg",
        title: "Men Shirt",
        desc: "Men Shirt: Elevate your swag",
        rating: "5",
        price: "27",

    },
    {
        img:"/pants.jpg",
        title: "Men's Pants",
        desc: "Men's Pants In Different colors",
        rating: "2",
        price: "23",

    },
    {
        img:"/jacket-1.jpg",
        title: "Men's Jacket",
        desc: "Men's Pants In Different colors",
        rating: "2",
        price: "23",

    },
    {
        img:"/nike.jpg",
        title: "Unisex Nike Shoe",
        desc: "Black Nike Shoe",
        rating: "2",
        price: "77",

    },
    {
        img:"/ashluxe.jpg",
        title: "Men's",
        desc: "Designer for Men",
        rating: "4",
        price: "32",

    },
]

const NewProducts = () => {
  return (
    <div>
      <div>
        <h2>New Products</h2>
        <div>
            {
                ProductsData.((item, index)=> {

                })
            }
        </div>
      </div>
    </div>
  )
}

export default NewProducts
