import Button, { ButtonfloatingAction, ButtonIcon } from "../components/Button/Button";
import plusIcon from '../Image/plus_icon.png';
import homeIcon from '../Image/home_icon.png'
import { ButtonFloatingActionReactSnippet, ButtonIconReactSnippet, ButtonOutlineReactSnippet, ButtonPrimaryReactSnippet } from "../Iframes";

export default function Buttoncomponent(){
    return(
        <div class="gap">
        <div>
            <h2 class="typo-32px font-semibold" id="button">Buttons</h2>
            <p class="typo-16px font-light">Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        </div><div>
                <h3 class="typo-24px font-regular">filled buttons</h3>
                <div class="component-items-container card-shadow">
                   
                    <Button className="bg-blue">primary</Button>
                    <Button className="bg-green">success</Button>
                    <Button className="bg-yellow">warning</Button>
                    <Button className="bg-red">alert</Button>
                    <Button className="bg-black">dark</Button>
                    <Button className="bg-gray">light</Button>
                

                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/kmILYPVxnswch2aHjjFR" style={{width: "521px", height: "298px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Button"></iframe>
                </div>
                <div class="component-items-container">
            {ButtonPrimaryReactSnippet}
        </div>
            </div>
           {/* button ends */}

           {/* link button */}

            <div>
                <h3 class="typo-24px font-regular">outline buttons</h3>
                <div class="component-items-container card-shadow">
                    <Button className="bg-link-blue">primary</Button>
                    <Button className="bg-link-green">success</Button>
                    <Button className="bg-link-yellow">warning</Button>
                    <Button className="bg-link-red">alert</Button>
                    <Button className="bg-link-black">dark</Button>
                    <Button className="bg-link-gray">light</Button>


                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/rxkUO1lmKCY852lTv2SI"style={{width: "563px", height: "298px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="ButtonLink"></iframe>
                </div>
                <div class="component-items-container">
            {ButtonOutlineReactSnippet}
        </div>
            </div>
            {/* link button ends*/}

   {/* <!-- floating-action-button --> */}

             <div>
                <h3 class="typo-24px font-regular">Floating action buttons</h3>
                <div class="component-items-container card-shadow">

                    <ButtonfloatingAction className="bg-red" image={plusIcon} />
                    <ButtonfloatingAction className="bg-green" image={plusIcon} />
                    <ButtonfloatingAction className="bg-yellow" image={plusIcon} />
                

                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/DCwpRlTyf5ybR06eFMJN"style={{width: "546px", height: "353px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="ButtonFloatingAction"></iframe>
                </div>
                <div class="component-items-container">
            {ButtonFloatingActionReactSnippet}
        </div>
            </div>
            {/* <!-- floating-action-button --> */}
{/* 
            <!-- icon button --> */}

            <div>
                <h3 class="typo-24px font-regular">Icon buttons</h3>
                <div class="component-items-container card-shadow">
                    <ButtonIcon className="bg-red" image={homeIcon} />
                    <ButtonIcon className="bg-green" image={homeIcon} />
                    <ButtonIcon className="bg-yellow" image={homeIcon} />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/ZGbbTe3SGEMy88pgJvOU"style={{width: "445px", height: "353px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="ButtonIcon"></iframe>
                </div>
                <div class="component-items-container">
            {ButtonIconReactSnippet}
        </div>
            </div>
            </div>
    );
}