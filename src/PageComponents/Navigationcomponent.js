import { NavLink } from "react-router-dom";
import '../Pages/documentation.css';
//import { Link } from "react-router-dom";
import Navigation, { Logo, NavItem } from '../components/Navigation/Navigation';
import { NavigationReactSnippet } from "../Iframes";

export function NavigationBar(){
    return(
      
   <Navigation >
        <Logo>one<span className='bg-primary'>UI</span></Logo>
        <NavItem>
             <NavLink style={getActiveStyle} to="/">Home</NavLink>
             <NavLink style={getActiveStyle} to="/getstarted">GetStarted</NavLink>
             <NavLink style={getActiveStyle} to="/docs">Documentation</NavLink>
             <a style={{color:"black"}}href="https://github.com/srinidhi9831/OneUI-component-library.git" target="_blank" rel="noreferrer" >Github </a>
             
        </NavItem>
    </Navigation>


    )
}
const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black"
  });

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
                        <span>Home</span>
                        <span>Products</span>
                        <span>About Us</span>
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