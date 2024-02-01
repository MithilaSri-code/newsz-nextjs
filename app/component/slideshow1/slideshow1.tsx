import { Button, Grid, Menu, MenuItem } from "@mui/material";
import "./slideshow1.css";
import HomeIcon from '@mui/icons-material/Home';


import React, { useState, useEffect } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Container } from "@mui/system";

import { Link } from "react-router-dom";
import Slider from "../slidebar/Slider";
import { ClassNames } from "@emotion/react";




const Slideshow1 = () => {
    
    return(

    <Grid container className="slideshow1">
           <div className="home">
            
            < HomeIcon fontSize="large" />
            
            </div>
           
           <div className="slider">
           <Slider />
           
            </div>

            
           
            
           

</Grid>





        );
};

export default Slideshow1;