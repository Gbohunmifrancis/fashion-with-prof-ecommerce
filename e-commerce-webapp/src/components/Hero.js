import React from 'react';
import Slider from 'react-slick';

const Hero = () => {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$30",
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$29",
        },
    ];

    return (
        <div>
            <div>
                <slider {...settings}> 
                    {slideData.map((item)=> {
                        return <Slide
                        key = {item.id}
                        img = {item.img}
                        title = {item.title}
                        mainTitle = {item.mainTitle}
                        price = {item.price}

                        />
                    })}
                </slider>
            </div>
        </div>
    );
};

export default Hero;
