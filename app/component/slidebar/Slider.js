"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./format.css";


let productsp = [
    {
        id: 1,

        brand: "නවතම පුවත්",
        url: "https://newsz.lk/categoryView/?id=63d899be0ac0cc74f2fecd3d",

    },
    {
        id: 2,
        brand: "ක්‍රීඩා",
        url: "https://newsz.lk/categoryView/?id=63d89b88a2cb54ad6ccbd6d6",
    },
    {
        id: 3,
        brand: "ව්‍යාපාරික",
        url: "https://newsz.lk/categoryView/?id=63d89b99a2cb54ad6ccbd6d9",
    },
    {
        id: 4,
        brand: "විදෙස්",
        url: "https://newsz.lk/categoryView/?id=63d89be0a2cb54ad6ccbd6df",
    },
    {
        id: 5,
        brand: "දේශපාලන",
        url: "https://newsz.lk/categoryView/?id=63d89bd2a2cb54ad6ccbd6dc",
    },
    {
        id: 6,
        brand: "විශේෂාංග",
        url: "https://newsz.lk/categoryView/?id=63d89beca2cb54ad6ccbd6e2",
    },
    {
        id: 7,
        brand: "සාකච්ඡා",
        url: "https://newsz.lk/",
    },
    {
        id: 8,
        brand: "ගොසිප්",
        url: "https://newsz.lk/",
    },
    {
        id: 9,
        brand: "විඩියෝ",
        url: "https://newsz.lk/",
    },
    {
        id: 10,
        brand: "පාරිසරික පුවත්",
        url: "https://newsz.lk/categoryView/?id=63d8a2b2a2cb54ad6ccbd74c",
    },
    {
        id: 11,
        brand: "Ausi News",
        url: "https://newsz.lk/categoryView/?id=6406ef769d33592ae328237e",
    },

];
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
    const options = {
        margin: 1,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 7,
            },
        },
    };

    return (
        <div className="row no-gutters">
            <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
                id="owl-carousel-products"
            >
                <h3 className="text-center">
                    <span className="heading float-left w-100"></span>
                </h3>
                <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={4}
                        nav={true}
                        navText={[
                            '<img src="/images/Arrow_left.png" />',
                            '<img src="/images/Arrow_right.png" />',
                        ]}
                        dots={true}
                        animateIn={true}
                        {...options}
                    >
                        {productsp && productsp.length > 0
                            ? productsp.map((product) => {
                                return (
                                    <div
                                        id="featuredProducts"
                                        className="item float-left w-100"
                                        key={product.name}
                                    >
                                        <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                                           
                                                <a className="product float-left" href={product.url} >
                                                    <span className="image text-center">

                                                    </span>
                                                    <span className="w-100 text-center mt-1 ">
                                                        <h5 className="brand text-capitalize float-left">
                                                            {product.brand}
                                                        </h5>
                                                        <span className="name">{product.name}</span>
                                                        <strong className="itemPrice p-0">

                                                        </strong>
                                                    </span>
                                                </a>
                                            
                                        </div>
                                    </div>
                                );
                            })
                            : ""}
                    </OwlCarousel>
                </ul>
            </div>
        </div>
    );
};
export default Slider;