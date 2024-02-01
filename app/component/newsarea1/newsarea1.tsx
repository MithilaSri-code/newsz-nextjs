
import React from 'react';
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import "./newsarea1.css";
import Image from "next/image";
import newsz1  from ".//../../../public/assets/newsz1.png";
import Link from 'next/link';
import Screennews from "../screennews/screennews";


const Newsarea1 = () => {
    return (
        <Grid container className='newsareaA'>
             <Grid item xs={6} className="newsareaA1">


             <Link href="../screennews/screennews.tsx">
             <Image src={newsz1} className="newsz1"  alt="newsz1" />
</Link>

              
                       
             <a href="../screennews/screennews.tsx" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2>එයාර්පෝට් 3ක් ඉන්දියානු සමාගමකට</h2>
                </a>
                
             
             
  </Grid>
  
  <Grid item xs={3} className="newsareaA2">
  <h1>නරඹන්න</h1>
  </Grid>
            
            
        </Grid>
    );
};

export default Newsarea1;