import "./header.css";
import { Box, Container } from "@mui/system";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "..//..//assets/Logo-Official.png";
import { Link, useNavigate } from "react-router-dom";
import Image from "next/image";
import images from ".//../../../public/assets/images.png";
import logo4 from ".//../../../public/assets/logo4.png";
import Social from "../social/social";
import Clock from '../clock/clock';




const Header = () => {
    
return(


<Box>
    <Grid item container className="tophead-colorline">

    </Grid>

    <Grid container className="middletop1">
        
   <Grid item xs={4} className="box1">
  < Clock />
  </Grid>
   
   
   <Grid item xs={4} className="box2">
   <Image src={logo4} className="logo4"  alt="logo4" />

   </Grid>   


    <Grid item xs={4} className="box3">

        
        
        <div>
        <Social />     
    </div>

    <div className="logging" >

    
    
    <a href={"https://newsz.lk/signin"} style={{ textDecoration: 'none', color: 'inherit' }}>
    <button className="signin"  >SIGNIN</button></a>
    </div>


    </Grid>
             
          </Grid>
   


<hr className="hr"/>
</Box>


);
};

export default Header;