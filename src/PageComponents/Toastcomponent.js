import { Toast } from "../components/Toast/Toast";
import { ToastReactSnippet } from "../Iframes";



export default function Toastcomponent(){

    return(
        <div className="gap">
        <div>
                <h3 class="typo-32px font-semibold"id="toast">Toast</h3>
                <p class="typo-16px font-light">Toast are same as alert but it displays for few seconds and it disappears.</p>
              </div>
              <div>
                <div class="component-items-container card-shadow">   
                    {/* <div class="toast"style={{position: "static"}}>this is toast </div> */}
                    <Toast style={{position: "static"}}>this is toast </Toast>
                </div>
                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/YKIQRKIS7Kt70waWHuMP"style={{width: "395px", height: "205px", border:0, transform: "scale(1)", overflow:"hidden"}}sandbox="allow-scripts allow-same-origin" title="Toast"></iframe>
                </div>
                <div class="component-items-container">
            {ToastReactSnippet}
        </div>
              </div>
        </div>
    );
}