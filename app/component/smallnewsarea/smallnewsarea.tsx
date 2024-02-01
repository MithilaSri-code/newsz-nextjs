import "./smallnewsarea.css";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import newsz3  from ".//../../../public/assets/newsz3.png";
import newsz4  from ".//../../../public/assets/newsz4.png";


const Smallnewsarea = () => {
    
    return(
    
<Grid container className="smallnewsarea">
        
        <Grid item xs={6} className="smallnewsareaA1">
        
        <Image src={newsz3} className="smallnewsareaphoto"  alt="newsz3" />
        <h3>පොලිස් අත්අඩංගුවේ සිටි තරුණයෙක් මරුට</h3>
        </Grid>  
        <Grid item xs={6} className="smallnewsareaA1">
        <Image src={newsz3} className="smallnewsareaphoto"  alt="newsz3" />
        <h3>පෙරපාසල් දරුවන්ගේ බර වැඩිවෙයි</h3>
        </Grid> 

        <Grid item xs={6} className="smallnewsareaA1">
        <Image src={newsz3} className="smallnewsareaphoto"  alt="newsz3" />
        <h3>නිදහස් දින පෙරහුරුවේ දී පැරෂුට් අනතුරක්</h3>
        </Grid>
        <Grid item xs={6} className="smallnewsareaA1">
        <Image src={newsz3} className="smallnewsareaphoto"  alt="newsz3" />
        <h3>දයා රත්නායක මව්බිම ජනතා පක්ෂයට</h3>
        </Grid>
        
        
        
        

           
     
        <Grid item xs={6} className="smallnewsareaA1">
     
         <Image src={newsz4} className="smallnewsareaphoto"  alt="newsz4" />
         <h3>සුරාසැල් වසා තැබීම ගැන දැනුම්දීමක්</h3>
         </Grid>
         <Grid item xs={6} className="smallnewsareaA1">
         <Image src={newsz4} className="smallnewsareaphoto"  alt="newsz4" />
         <h3>සුද්දන්ට යන්න කලින් VAT එක අතට</h3>
         </Grid>
         <Grid item xs={6} className="smallnewsareaA1">
         <Image src={newsz4} className="smallnewsareaphoto"  alt="newsz4" />
         <h3>මත්කරල් 31000කට අධික සංඛ්‍යාවක් සමඟ පුද්ගලයෙක්</h3>
         </Grid>
         <Grid item xs={6} className="smallnewsareaA1">
         <Image src={newsz4} className="smallnewsareaphoto"  alt="newsz4" />
         <h3>සජබ විරෝධතාව අද කොළඹදී</h3>     
         
           
             



             
     
         
     
         </Grid>
                  
</Grid>

        );
};

export default Smallnewsarea;