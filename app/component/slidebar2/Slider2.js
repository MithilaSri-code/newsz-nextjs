"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./format2.css";


let productsp = [
    {
        id: 1,

        brand: "වාහන ආනයනය...",


    },
    {
        id: 2,
        brand: "ලොව ප්‍රමුඛපෙලේ...",

    },
    {
        id: 3,
        brand: "මැද පෙරදිග යුධ බිමේ...",

    },
    {
        id: 4,
        brand: "සකර්බර්ග්ට සැත්කමක්...",

    },
    {
        id: 5,
        brand: "ලංකාවට අමිහිරි පරාජයක්...",

    },
    {
        id: 6,
        brand: "විශේෂාංග",

    },
    {
        id: 7,
        brand: "සාකච්ඡා",

    },
    {
        id: 8,
        brand: "ගොසිප්",

    },
    {
        id: 9,
        brand: "විඩියෝ",

    },
    {
        id: 10,
        brand: "පාරිසරික පුවත්",

    },
    {
        id: 11,
        brand: "Ausi News",

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

const Slider2 = () => {
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
                items: 4,
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
                <ul id="owl-carousel-ul" className="owl-carousel1 owl-loaded owl-drag">
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
                            ? productsp.map((product1) => {
                                return (
                                    <div
                                        id="featuredProducts"
                                        className="item float-left w-100"
                                        key={product1.name}
                                    >
                                        <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                                            
                                                <a className="product1 float-left" href={product1.url}>
                                                    <span className="image text-center">

                                                    </span>
                                                    <span className="w-100 text-center mt-1 ">
                                                        <h5 className="brand text-capitalize float-left">
                                                            {product1.brand}
                                                        </h5>
                                                        <span className="name">{product1.name}</span>
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
export default Slider2;