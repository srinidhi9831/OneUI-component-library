import { useEffect } from "react";
import { useCart } from "../Context/cart-context";
import AlertComponent from "../pages/Alert";
import AvatarComponent from "../pages/Avatar";
import BadgeComponent from "../pages/Badge";
import ButtonComponent from "../pages/Button";
import CardComponent from "../pages/Card";
import Color from "../pages/Color";
import ImageComponent from "../pages/Image";
import InputComponent from "../pages/Input";
import Introduction from "../pages/Introduction";
import Layout from "../pages/Layout";
import ListComponent from "../pages/List";
import ModalComponent from "../pages/Modal";
import { NavigationComp } from "../pages/Navigation";
import RatingComponent from "../pages/Rating";
import Sidenav from "../pages/Sidenav";
import SliderComponent from "../pages/Slider";
import ToastComponent from "../pages/Toast";
import ToolTipComponent from "../pages/Tooltip";
import Typography from "../pages/Typography";
export default function Documentation(){

    useEffect(()=>addhljs())
const {page}=useCart();


    <NavigationComp pagre={page}/>

return(
      <>
    <Sidenav/>
    <main class="main-docs">
         
        {(page===1) && <Introduction page={page}/>}
        {(page===2) &&<Color page={page}/>}
       { (page>=3 && page<=6) &&<Typography page={page}/>}
       { (page>=7 && page<=10) &&<Layout page={page}/>}
        {(page>=11 && page<=15) &&<AlertComponent page={page}/>}
        {(page>=16 && page<=17) && <AvatarComponent page={page}/>}
        {(page>=18 && page<=19) &&<BadgeComponent page={page}/>}
        {(page>=20 && page<=24) &&<ButtonComponent page={page}/>}
        {(page>=25 && page<=28) &&<CardComponent page={page}/>}
        {(page>=29 && page<=31) && <ImageComponent page={page}/>}
        {(page>=32 && page<=34) &&<InputComponent page={page}/>}
        {(page>=35 && page<=44) &&<ListComponent page={page}/>}
        {(page>=45 && page<=46) &&<ModalComponent page={page}/>}
        {(page>=47 && page<=48) && <NavigationComp page={page}/>}
         {(page>=49 && page<=50) &&<RatingComponent page={page}/>}
         {(page===51) &&<SliderComponent page={page}/>}
         {(page>=52 && page<=54) &&<ToastComponent page={page}/>}
         {(page>=55 && page<=56) &&<ToolTipComponent page={page}/>}
         </main>
        
         </>   
        
    );
}


function addhljs(){
    const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js";
script.async = true;
document.body.appendChild(script);
const script2= document.createElement("script");
var inlineCode = document.createTextNode('hljs.highlightAll();');
script2.appendChild(inlineCode)
script2.async = true;
document.body.appendChild(script2);
}