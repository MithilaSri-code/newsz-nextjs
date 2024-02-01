
import "./adarea.css";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import newszmedia from ".//../../../public/assets/newszmedia.gif";

const Adarea = () => {
    
    return(
<Grid container className="adarea">

<a href={"https://chat.whatsapp.com/JrihPm5LgTGKCjI26Di3jY"}>
<Image src={newszmedia} className="newszmedia"  alt="newszmedia" />

</a>
</Grid>
        );
};

export default Adarea;