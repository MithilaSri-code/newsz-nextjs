import "./footer.css";
import { Box, Container } from "@mui/system";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "..//..//assets/Logo-Official.png";
import { Link, useNavigate } from "react-router-dom";
import Social from "../social/social";
import Image from "next/image";
import logo4 from ".//../../../public/assets/logo4.png";

const Footer = () => {
    
   
    


    return(
        
<Box >
<hr className="hr"/>
<Grid className="main">

<Grid className="leftgrid">

<h3>
  රටේ ලෝකයේ සිදුවන ප්‍රවෘත්ති වටිනාකමක් ඇති ඕනෑම
සිදුවීමක් නිවැරදිව එසැනින් ඉදිරිපත් කරන සයිබර් අවකාශයේ
විශ්වාසනීයම පුවත් ඉදිරිපත් කරන්නා</h3>

<h3>Powerd By <br/> Newsz.lk</h3>
<div className="bottomlogo">
<Image src={logo4} className="logo4"  alt="logo4" />
</div>

</Grid>


<Grid container justifyContent="center" className="middle">
    <Grid className="categories"   >
<h3>Categories</h3>
<h5>නවතම පුවත් <br/>
ක්‍රීඩා <br/>
ව්‍යාපාරික<br/>
විදෙස්<br/>
දේශපාලන<br/>
විශේෂාංග<br/>
සාකච්ඡා<br/>
ගොසිප්<br/>
විඩියෝ<br/>
පාරිසරික පුවත්</h5>
    </Grid>
    <Grid>
<h3>Quick Links</h3>
<h4>Sign Up<br/>
Sign In<br/>
About Us<br/>
Contact Us<br/>
ePaper<br/>
Archives<br/>
Terms & Conditions<br/>
Privacy Policy</h4>

    </Grid>
</Grid>

<Grid item container className="left">
    
                  <ul>
                  <h4>Contatus Us</h4>
                    <li>
                      
                    +94123456789
                      
                    </li>
                    <li>
                      
                    Australia
                      
                    </li>
                    <li>
                      
                    Colombo
                     
                    </li>
                    <li>
                      
                    Colombo
                      
                    </li>
                  </ul>
                  <div>
                  <Social />
                  </div>
                </Grid>


</Grid>


</Box>


    )
};

export default Footer;