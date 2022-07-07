
export default function Modalcomponent(){
    return(
        <div class="gap">
        
        <div>
                <h3 class="typo-32px font-semibold"id="modal">Modal</h3>
                <p class="typo-16px font-light">Modals are created with fixed position.</p>
        </div>
        <div>
                <div class="component-items-container card-shadow">   
                    <div class="modal-container" style={{position: "static",height:"30rem"}}>
                        <div class="modal-content card-shadow">
                            <div class="modal-header">header</div>
                            This is content of modal, and modal are
                            <div class="modal-footer">
                                <button class="bg-green">okay</button><button class="bg-red">close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/nZUq3QcYWUp1Lcv53Y3V" style={{width: "538px", height: "372px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
              </div>

        </div>
    );
}