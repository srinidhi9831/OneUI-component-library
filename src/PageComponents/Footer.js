import github from '../Image/github-logo.png'
import instagram from '../Image/instagram.png'
import linkedin from '../Image/linkedin.png'
import twitter from '../Image/twitter.png'


const gitHubLink=<a href="https://github.com/srinidhi9831/OneUI-component-library.git" target="_blank" rel="noreferrer" ><img class="footer-icons" src={github} alt="github_logo"/></a>

const twitterLink=<a href="https://twitter.com/srinidh9831" target="_blank" rel="noreferrer" ><img class="footer-icons" src={twitter} alt="github_logo"/></a>

const linkedinLink=<a href="https://www.linkedin.com/in/srinidhi9831/" target="_blank" rel="noreferrer" ><img class="footer-icons" src={linkedin} alt="github_logo"/></a>

//const instagramLink=<a href="https://www.instagram.com/srinidhi_kashyap/" target="_blank" rel="noreferrer" ><img class="footer-icons" src={instagram} alt="github_logo"/></a>

export default function Footer(){
    return(
        <div className="footer">
            <div className='row'>
           <div class="footer-icons">{gitHubLink}</div>
           <div class="footer-icons"><img  src={instagram} alt=""/></div>
           <div class="footer-icons">{linkedinLink}</div>
           <div class="footer-icons">{twitterLink}</div>

           {/* <img class="footer-icons" src={instagram} alt=""/>
           <img class="footer-icons" src={linkedin} alt=""/>
           <img class="footer-icons" src={twitter} alt=""/> */}
           </div>
           <div className='row'>
            Developed by srinidhi 
            
           </div>
           <div className='row'>
            
            contact: 9632463435 srinidhi9831@gmail.com
           </div>
        </div>
    );
}

