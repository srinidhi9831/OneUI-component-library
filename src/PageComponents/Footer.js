import home_icon from '../Image/home.png'
import github from '../Image/github-logo.png'
import instagram from '../Image/instagram.png'

export default function Footer(){
    return(
        <div className="footer">
           <img class="footer-icons" src={home_icon} alt=""/>
           <img class="footer-icons" src={github} alt=""/>
           <img class="footer-icons" src={instagram} alt=""/>
        </div>
    );
}