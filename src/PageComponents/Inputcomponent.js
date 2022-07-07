import { Input } from "../components/Input/Input";
import { Label } from "../components/Input/Label";



export default function Inputcomponent(){

    return(
        <div class="gap">

         <div>
            <h2 class="typo-32px font-semibold"id="inputs">Inputs</h2>
            <p class="typo-16px font-light">Inputs can have different styles based on validation. </p>
         </div>
              <div>
                <h3 class="typo-24px font-regular">Textbox</h3>
                <div class="component-items-container card-shadow">
                    <div class="input-container">
                        <Label for="username">Username *</Label>
                        <Input type="text" name="username" placeholder="enter user name" id="username" />
                    </div>
                    <div class="input-container">
                        <Label for="password">Username *</Label>
                        <Input type="password" name="password" placeholder="enter password" id="password" />
                    </div>
                </div>
                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/nJyI1Qb3Y4xQQVWpMDq9" style={{width: "614px", height: "260px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
             </div>

             <div>
                <h3 class="typo-24px font-regular">Input with validation</h3>
                <div class="component-items-container card-shadow">
                <div class="input-container">
                    
                    <Label className="label-error" for="password">Password *</Label>
                        <Input className="input-error" type="password" name="password" placeholder="enter password" id="password" />

                </div>
                <div class="input-container">
                
                    <Label className="label-success" for="password">Password *</Label>
                    <Input className="input-success" type="password" name="password" placeholder="enter password" id="password" />

                </div>
                <div class="input-container">
                    <Label className="label-warning" for="password">Password *</Label>
                    <Input className="input-warning" type="password" name="password" placeholder="enter password" id="password" />

                </div>
    
                </div>
                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/VOrwwSzEf4uP5M5u7hdY" style={{width: "656px", height: "409px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
             </div>


        </div>
    );
}