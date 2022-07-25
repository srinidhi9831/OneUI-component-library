import { useCart } from "../Context/cart-context";



export default function Buttonpagenav(){
    const {page,setPage}=useCart();


const btnNextHandler=()=>setPage((val)=>val+1);
const btnPreviousHandler=()=>setPage((val)=>val-1);




    return(
        <div className='next-previous-btn-container'>
        { (page>1) && <button className="bg-primary card-shadow" onClick={()=>btnPreviousHandler()}> previous </button>}
       { (page<11) && <button className="bg-primary btn-next card-shadow" onClick={()=>btnNextHandler()}> next </button>}
        
        </div>
    );
}



       
