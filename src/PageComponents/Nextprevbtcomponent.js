import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Context/cart-context";



export default function Buttonpagenav(){
    const {page,setPage}=useCart();
// const btnNextHandler=()=> {
//     console.log(page);
//     (page<7)?setPage((val)=>val+1):page;
// }

const btnNextHandler=()=>setPage((val)=>val+1);
const btnPreviousHandler=()=>setPage((val)=>val-1);




    return(
        <div className='next-previous-btn-container'>
        { (page>1) && <button className="bg-primary card-shadow" onClick={()=>btnPreviousHandler()}> previous </button>}
       { (page<11) && <button className="bg-primary btn-next card-shadow" onClick={()=>btnNextHandler()}> next </button>}
        
        </div>
    );
}



       
