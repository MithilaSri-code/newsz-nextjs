"use client"; 
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";

import logo from "../../assets/images/Logo-Official.png";

import { Link, useNavigate } from "react-router-dom";
import "./clock.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (

    
            <Grid container className="clock"  >
              <h2  className="date">{date.toDateString()}</h2>
              <p className="time">{date.toLocaleTimeString()}</p>
            </Grid>
          


);
};

export default Clock;