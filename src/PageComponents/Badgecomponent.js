
import homeIcon from '../Image/home_icon.png';
import notificationIcon from '../Image/notification.png'
import image01 from '../Image/image01.png'
import Badge, { BadgeRound } from '../components/Badge/Badge';
import  { IconBottom, IconTop } from '../components/Badge/Icon';
import  { AvatarLarge, AvatarLargeRound, AvatarMediumRound } from '../components/Avatar/Avatar';
import { BadgeAvatarReactSnippet, BadgeIconReactSnippet } from '../Iframes';

export default function Badgecomponent(){
    return(
   <div class="gap">
    
                <h2 class="typo-32px font-semibold"id="badge">Badges</h2>
                <p class="typo-16px font-light"> badges are  used to add additional information to the content like number of messages or notifications.</p>
                
            

            <div>
                <h3 class="typo-24px font-regular">badges on icons</h3> 
                <div class="component-items-container card-shadow">
                    <BadgeRound className="bg-yellow">
                        <AvatarMediumRound image={homeIcon} />
                        <IconTop className="bg-red">20</IconTop>
                    </BadgeRound>

                    <Badge className="bg-violet">
                        <AvatarLargeRound image={notificationIcon} />
                        <IconTop className="bg-green">190 </IconTop>
                    </Badge>

                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/5OPBDTqNIiijfRIBwuUT" style={{width: "614px", height: "335px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="badgeIcon"></iframe>
                </div>
                <div class="component-items-container">
            {BadgeIconReactSnippet}
           </div>
            </div>

            <div>
                <h3 class="typo-24px font-regular">badges on avatars</h3> 
                <div class="component-items-container card-shadow">
                        
            
                    <BadgeRound>
                        <AvatarLargeRound image={image01} />
                        <IconBottom className="bg-red"></IconBottom>
                    </BadgeRound>

                    <Badge>
                        <AvatarLarge image={image01} />
                        <IconBottom className="bg-green"></IconBottom>
                    </Badge>

                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/byDQhUhvCOXEauwGaKVm" style={{width: "631px", height: "335px", border:0, transform: "scale(1)", overflow:"hidden"}}   sandbox="allow-scripts allow-same-origin" title="badgeAvatar"></iframe>
                </div>
                <div class="component-items-container">
            {BadgeAvatarReactSnippet}
        </div>
            </div>
   </div>


    );
}