import Modal, { ModalContent, ModalFooter, ModalHeader } from "../components/Modal/Modal";
import { ModalReactSnippet } from "../Iframes";

export default function Modalcomponent(){
    return(
        <div >
        
        <div>
                <h3 class="typo-32px font-semibold"id="modal">Modal</h3>
                <p class="typo-16px font-light">Modals are created with fixed position.</p>
        </div>
        <div>
                <div class="component-items-container card-shadow">   
                    <Modal style={{position: "static",height:"30rem"}}>
                        <ModalHeader>header</ModalHeader>
                        <ModalContent> This is content of modal, and modal are</ModalContent>
                        <ModalFooter>
                        <button class="bg-green">okay</button><button class="bg-red">close</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/nZUq3QcYWUp1Lcv53Y3V" style={{width: "538px", height: "372px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Modal"></iframe>
                </div>
                <div class="component-items-container">
            {ModalReactSnippet}
        </div>
              </div>

        </div>
    );
}