import { Button, Grid, Menu, MenuItem } from "@mui/material";
import "./slideshow2.css";
import HomeIcon from '@mui/icons-material/Home';


import React, { useState, useEffect } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Container } from "@mui/system";

import { Link } from "react-router-dom";
import Slider2 from "../slidebar2/Slider2";
import { ClassNames } from "@emotion/react";




const Slideshow2 = () => {
    
    return(
       

    <Grid container className="slideshow1">
        
           <div className="hotnews">
            
            <h3>උණුසුම් පුවත්</h3>
            
            </div>
           
           <div className="slider2">
         
           <Slider2 />
            </div>

            
           
            
           

</Grid>





        );
};

export default Slideshow2;