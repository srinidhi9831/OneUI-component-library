
import  { AvatarLarge, AvatarLargeRound, AvatarMedium, AvatarMediumRound, AvatarSmall, AvatarSmallRound } from '../components/Avatar/Avatar';
import { AvatarReactSnippet } from '../Iframes';
import logo from '../Image/image01.png'

export default function Avatarcomponent(){
    return(
        <div class="gap">
        <h2 class="typo-32px font-semibold" id="avatar">Avatar</h2>
        <p class="typo-16px font-light"> an avatar is a graphical representation of a user or the user's character or persona,it is also called as user pic or profile picture</p>
            <div class="component-items-container card-shadow">
            
                <AvatarSmallRound image={logo} />
                <AvatarMediumRound image={logo} />
                <AvatarLargeRound image={logo} />
                <AvatarSmall image={logo} />
                <AvatarMedium image={logo} />
                <AvatarLarge image={logo} />
              
            </div>
            <div class="component-items-container">
                <iframe src="https://carbon.now.sh/embed/jWaDrXi9UzKcsRVdSucb" style={{width: "555px", height: "298px",border:0, transform: "scale(1)", overflow:"hidden"}}sandbox="allow-scripts allow-same-origin" title='Avatar'></iframe>
            </div>
            <div class="component-items-container">
            {AvatarReactSnippet}
        </div>
       </div>
    );
}