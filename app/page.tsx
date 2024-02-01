
import "./globals.css";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Bottom from "./component/bottomfooter/bottomfooter";
import Body from "./component/body/body";
import React, { useState } from "react";
import Slideshow1 from "./component/slideshow1/slideshow1";
import Slideshow2 from "./component/slideshow2/slideshow2";
import Adarea from "./component/adarea/adarea";
import Newsarea1 from "./component/newsarea1/newsarea1";
import Newsarea2 from "./component/newsarea2/newsarea2";
import Smallnewsarea from "./component/smallnewsarea/smallnewsarea";


import Link from 'next/link';

export default function Home() {
  return (
<main>
<Header />
<Slideshow1 />
<Slideshow2 />

<Adarea />

<Newsarea1 />
<Newsarea2 />
<Smallnewsarea />
   
   <Body />
   <Footer />
   <Bottom />
    </main>
  );
}
