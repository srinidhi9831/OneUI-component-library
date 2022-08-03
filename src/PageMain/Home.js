
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/cart-context";
export default function Home ({set}){
  let navigate = useNavigate();
  const{setstylediv}=useCart()
    return(
        <main class="main">
        <div>
          <h1>
            Now design your project faster and better with
            <span class="block">One UI</span>
          </h1>

        
            <button class="btn btn-primary-solid btn-squared btn-home" onClick={()=>{navigate("/docs");setstylediv("container docs m-auto p-2")}}>
              Get Startedd
            </button>
          

          <a
            href="https://github.com/srinidhi9831/OneUI-component-library.git"
            target="_blank"
            rel="noreferrer"
          >
            <button
              class="btn btn-primary-outline btn-squared btn-home btn-home-outline"
            >
              GitHub
            </button>
          </a>
        </div>
      </main>
    );
}