import { useCart } from "../Context/cart-context";


export default function SideNavigation(){
    const {page,setPage}=useCart();
   const getStyle=(val)=>(val===page)?"side-nav-active":"";
    return(
        <div class="side-navigation">
        
        <ul>
           
      
            <li class={`typo-16px ${getStyle(1)}`} onClick={()=>setPage(1)}><span>Alert</span></li>
            <li class={`typo-16px ${getStyle(2)}`} onClick={()=>setPage(2)}> <span>Avatar</span></li>
            <li class={`typo-16px ${getStyle(3)}`} onClick={()=>setPage(3)}> <span>Badge</span></li>
            <li class={`typo-16px ${getStyle(4)}`} onClick={()=>setPage(4)}> <span>Button</span></li>
            <li class={`typo-16px ${getStyle(5)}`} onClick={()=>setPage(5)}> <span>Card</span></li>
            <li class={`typo-16px ${getStyle(6)}`} onClick={()=>setPage(6)}> <span>Image</span></li>
            <li class={`typo-16px ${getStyle(7)}`} onClick={()=>setPage(7)}> <span>Input</span></li>
            <li class={`typo-16px ${getStyle(8)}`} onClick={()=>setPage(8)}> <span>List</span></li>
            <li class={`typo-16px ${getStyle(9)}`} onClick={()=>setPage(9)}> <span>Navigation</span></li>
            <li class={`typo-16px ${getStyle(10)}`} onClick={()=>setPage(10)}> <span>Modal</span></li>
            <li class={`typo-16px ${getStyle(11)}`} onClick={()=>setPage(11)}> <span>Toast</span></li>
            
        </ul>
    </div>
    );
}

