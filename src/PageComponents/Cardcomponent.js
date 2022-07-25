import { CardHorizantal, CardShadow, CardVertical, CardWithBadge, CardWithDismiss, CardWithTextOnly, CardWithTextOverlay } from "../components/Card/Card";
import { CardHorizantalReactSnippet, CardShadowReactSnippet, CardVerticalReactSnippet, CardWithBadgeReactSnippet, CardWithDismissReactSnippet, CardWithTextOnlyReactSnippet, CardWithTextOverlayReactSnippet } from "../Iframes";
import image01 from '../Image/image01.png'
//import waterImage from '../Image/water.jpg'

export default function Cardcomponent(){
    return(
     <div class="gap">
      <div>
                    <h2 class="typo-32px font-semibold"id="card">Cards</h2>
                    <p class="typo-16px font-light">cards provide a flexible and extensible content container with multiple variants and options.</p>
              </div>
              {/* <!-- cards with badges--> */}

              <div>
                <h3 class="typo-24px font-regular">cards with badges</h3>
                <div class="component-items-container card-shadow">
                    <CardWithBadge title="this is title" content=" this is card with only text and a badge on top" badgeValue="20" />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/sByGEp7CzKMdXSnYlP85"style={{width: "445px", height: "279px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="CardWithBadge"></iframe>
                </div>
                <div class="component-items-container">
               {CardWithBadgeReactSnippet}
        </div>
              </div>

              {/* <!-- cards with dismiss--> */}

              <div>
                <h3 class="typo-24px font-regular">cards with dismiss</h3>
                <div class="component-items-container card-shadow">
                    <CardWithDismiss title="this is title" content=" this is card with only text and a dismiss button" />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/YHXTgJflYlCATqHWmQhM"style={{width: "681px", height: "260px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="CardWithdismiss"></iframe>
                </div>
                <div class="component-items-container">
            {CardWithDismissReactSnippet}
        </div>
              </div>

               {/* <!-- cards with text overlay--> */}

               <div>
                <h3 class="typo-24px font-regular">cards with text overlay</h3>
                <div class="component-items-container card-shadow">
                    <CardWithTextOverlay title=" this is title" content="this is card with image and card with text overlay." image={image01} />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/n15QaFB8SBiLH5FBCEwU" style={{width: "546px", height: "316px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="CardWithtextoverlay"></iframe>
                </div>
                <div class="component-items-container">
            {CardWithTextOverlayReactSnippet}
        </div>
              </div>

               {/* <!-- Text only cards--> */}

               <div>
                <h3 class="typo-24px font-regular">Text only cards</h3>
                <div class="component-items-container card-shadow">
                    <CardWithTextOnly title=" this is title" content=" this is card with only text , text only card." />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/3kOfY5gEFqpk9vwtpUr2"style={{width: "420px", height: "260px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Cardtextonly"></iframe>
                </div>
                <div class="component-items-container">
            {CardWithTextOnlyReactSnippet}
        </div>
              </div>
               {/* <!-- vertical cards--> */}

               <div>
                <h3 class="typo-24px font-regular">vertical cards</h3>
                <div class="component-items-container card-shadow">
                    <CardVertical title="this is title" content="this is card with vertically aligned with image ,title and content." image={image01} />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/QBn86f4jnpLJWw0qLtd7"style={{width: "513px", height: "353px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Cardvertical"></iframe>
                </div>
                <div class="component-items-container">
            {CardVerticalReactSnippet}
        </div>
              </div>
              {/* <!-- horizontal cards--> */}

              <div>
                <h3 class="typo-24px font-regular">horizontal cards</h3>
                <div class="component-items-container card-shadow">
                   
                    <CardHorizantal title="this is title" content="this is card with horizontally aligned with image ,title and content." image={image01} />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/JqVHn6IMVUpYsIfPozki"style={{width:"529px", height: "353px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Cardhorizontal"></iframe>
                </div>
                <div class="component-items-container">
            {CardHorizantalReactSnippet}
        </div>
              </div>
               {/* <!-- shadow cards--> */}
            <div>
                <h3 class="typo-24px font-regular">cards with shadow </h3>
                <div class="component-items-container card-shadow">
                  
                    <CardShadow title="this is title" content=" this is card with only text and shadow , card with shadow." image={image01} />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/MNMmwcFZYCUeCMrVBHt8"style={{width: "538px", height: "316px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="CardWithshadow"></iframe>
                </div>
                <div class="component-items-container">
            {CardShadowReactSnippet}
        </div>
            </div>
     </div>
    );
}