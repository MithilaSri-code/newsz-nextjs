
import React from 'react';
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import "./newsarea2.css";
import Image from "next/image";
import newsz2  from ".//../../../public/assets/newsz2.png";
import Link from 'next/link';
import Screennews from "../screennews/screennews";
import WeatherComponent from "../weather/weather";

const Newsarea2 = () => {
    return (
        <Grid container className='newsareaB'>
             <Grid item xs={6} className="newsareaB1">


             <Link href="../screennews/screennews.tsx">
             <Image src={newsz2} className="newsz1"  alt="newsz1" />
</Link>

              
                       
             <a href="../screennews/screennews.tsx" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2>රියැදුරු පාසල්වල ප්‍රමිතිය නංවන්න පියවර</h2>
                </a>
                
             
             
  </Grid>
  
  <Grid item xs={3} className="newsareaB2">
  <WeatherComponent />
  </Grid>
            
            
        </Grid>
    );
};

export default Newsarea2;