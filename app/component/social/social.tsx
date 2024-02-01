import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";
import "./social.css";


const Social = () => {
return(
<div className="socailicon">


         
        <div className="facebook" >
        <a href={"https://web.facebook.com/zxteamlk?_rdc=1&_rdr"}>
          <FacebookIcon />
          
          
          </a>
          </div>

          <div className="twitter" >
          <a href={"https://twitter.com/NewszLk"}>
            <TwitterIcon />
          </a>
          </div>

          <div className="linkedin" >
          <a href={"https://www.linkedin.com/in/newsz-lk-648b8623a/"}>
            <LinkedInIcon />
            
          </a>
          </div>

<div className="instagram" >
          <a href={"https://www.instagram.com/newszlk/"}>
            <InstagramIcon />
           
          </a>
          </div>

          

          <div className="telegram" >
          <a href={"https://t.me/+m6Rc9lrhBVpiMjY1"}>
            <TelegramIcon />
            
          </a>
          </div>


          <div className="youtube" >
            
          <a href={"https://www.youtube.com/@newszlk5509/featured"}>
            <YouTubeIcon />
            
          </a>
          </div>
          </div>




    )
};

export default Social;