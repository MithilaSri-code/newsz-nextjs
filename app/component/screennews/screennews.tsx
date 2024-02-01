
import Header from "../header/header";
import Footer from "../footer/footer";
import Bottom from "../bottomfooter/bottomfooter";

import React, { useState } from "react";
import Slideshow1 from "../slidebar2/Slider2";
import Slideshow2 from "../slideshow2/slideshow2";





const Screennews = () => {
    
    return(
<main>
<Header />
<Slideshow1 />
<Slideshow2 />




<Footer />
   <Bottom />

   </main>
  );
};

export default Screennews;