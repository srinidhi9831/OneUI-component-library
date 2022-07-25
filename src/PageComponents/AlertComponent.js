import Alert from '../components/Alert/Alert';
import { AlertFilledReactSnippet, AlertFilledSnippet, AlertOutlineReactSnippet } from '../Iframes';

export default function Alertcomponent(){
    return(
      
        <div class="gap">
        
        <h2 class="typo-32px font-semibold" id="alert">Alert</h2>
        <p class="typo-16px font-light">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        <div class="component-items-container card-shadow">
            <Alert className="bg-green">This is success alert </Alert>
            <Alert className="bg-yellow">This is warning alert</Alert>
            <Alert className="bg-red">This is error alert</Alert>
            <Alert className="bg-blue">This is primary alert</Alert>

        </div>
        <div class="component-items-container">
            {AlertFilledSnippet}
            {/* {AlertFilledReactSnippet} */}
        </div>
        <div class="component-items-container">
            {AlertFilledReactSnippet}
        </div>

        <div class="component-items-container card-shadow">
              <Alert className="bg-link-green">This is success outline alert </Alert>
              <Alert  className="bg-link-green">This is success outline alert </Alert>
            <Alert className="bg-link-yellow">This is warning outline alert</Alert>
            <Alert className="bg-link-red">This is error outline alert</Alert>
            <Alert className="bg-link-blue">This is primary outline alert</Alert>
        </div>
        <div class="component-items-container">
            <iframe title='AlertOutline'
            src="https://carbon.now.sh/embed/akwRUVCACAD14BbcdmAl"style={{width: "765px", height: "409px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin"></iframe>
        </div>
        <div class="component-items-container">
            {AlertOutlineReactSnippet}
        </div>
       </div>
    )
}



