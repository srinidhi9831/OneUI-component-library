import { NavLink } from "react-router-dom";
import '../Pages/documentation.css';
import github from '../Image/github-logo.png'
//import { Link } from "react-router-dom";
import Navigation, { Item, Logo, NavItem } from '../components/Navigation/Navigation';
import { NavigationReactSnippet } from "../Iframes";
import { useCart } from "../Context/cart-context";

export function NavigationBar(){ 
    const {setPage}=useCart();
    const getActiveStyle = ({ isActive }) => {
    
    
        return ({color: isActive ? "red" : "black" })
}


const pageReset=()=>{setPage(1)}
    return(
      
   <Navigation >
        <Logo>one<span className='bg-primary'>UI</span></Logo>
        <NavItem>
            <Item><NavLink onClick={pageReset} style={getActiveStyle} to="/">Home</NavLink></Item>
            <Item><NavLink onClick={pageReset} style={getActiveStyle} to="/getstarted">GetStarted</NavLink></Item>
            <Item> <NavLink onClick={pageReset} style={getActiveStyle} to="/docs">Documentation</NavLink></Item>
            <Item> <a style={{color:"black"}}href="https://github.com/srinidhi9831/OneUI-component-library.git" target="_blank" rel="noreferrer" ><img class="footer-icons" src={github} alt="github_logo"/> </a></Item>
             
             
            
           
             
        </NavItem>
    </Navigation>


    )
}


export default function Navigationcomponent(){
    return(
        <div className='gap'>
   
            <div>
                <h3 class="typo-32px font-semibold"id="navigation">Navigation</h3>
                <p class="typo-16px font-light">navigation can be implemented with different background colour.</p>
                </div>
                <div>
                <div class="component-items-container card-shadow">   
                   
                    <Navigation className="bg-yellow">
                          <Logo>Logo</Logo>
                     <NavItem>
                        <Item><span>Home</span></Item>
                        <Item><span>Products</span></Item>
                        <Item> <span>About Us</span></Item>   
                    </NavItem>
                     </Navigation>
                </div>

                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/tG1Wmi9JRryNdjRkCp1p"style={{width: "597px", height: "335px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Navigation"></iframe>
                </div>
                <div class="component-items-container">
            {NavigationReactSnippet}
                   </div>
              </div>


        </div>
    );
}