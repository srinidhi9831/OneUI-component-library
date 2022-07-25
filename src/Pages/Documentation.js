//import './Getstarted.css'
import SideNavigation from '../PageComponents/SideNavigation';
import Alertcomponent from '../PageComponents/AlertComponent';
import Avatarcomponent from '../PageComponents/Avatarcomponent';
import Badgecomponent from '../PageComponents/Badgecomponent';
import Buttoncomponent from '../PageComponents/Buttoncomponent';
import Cardcomponent from '../PageComponents/Cardcomponent';
import Imagecomponent from '../PageComponents/Imagecomponent';
import Inputcomponent from '../PageComponents/Inputcomponent';
import Listcomponent from '../PageComponents/Listcomponent';
import Modalcomponent from '../PageComponents/Modalcomponent';
import Toastcomponent from '../PageComponents/Toastcomponent';
import Navigationcomponent from '../PageComponents/Navigationcomponent';
import Button from '../components/Button/Button';
import Buttonpagenav from '../PageComponents/Nextprevbtcomponent';
import { useEffect } from "react"; 
import { useCart } from '../Context/cart-context';

export default function Documentation(){
    const {page:pageNo}=useCart();

    useEffect(() => {
        window.scrollTo(0, 0)
      })



    return(
     
        <div class="vertical-container">
        <SideNavigation />
        <div class="main-content">
           
           { pageNo===1 && <Alertcomponent />}
           { pageNo===2 &&   <Avatarcomponent />}
           { pageNo===3 && <Badgecomponent />}
           { pageNo===4 && <Buttoncomponent />}
           { pageNo===5 && <Cardcomponent />}
           { pageNo===6 && <Imagecomponent />}
           { pageNo===7 && <Inputcomponent />}
           { pageNo===8 && <Listcomponent />}
           { pageNo===9 && <Navigationcomponent />}
           { pageNo===10 &&  <Modalcomponent />}
           { pageNo===11 &&  <Toastcomponent />}
           
       <Buttonpagenav/>
        </div>
        </div>

       

   
  
     
        
    );
    
}


