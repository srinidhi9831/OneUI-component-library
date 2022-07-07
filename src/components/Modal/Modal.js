

export default function Modal(){
    return(
        <div class="modal-container">
            <div class="modal-content">
                <div class="modal-header">header</div>
                content of modal 
                <div class="modal-footer">
                    <button>okay</button><button>close</button>
                </div>
            </div>
            
        </div>
    );
}

export function ModalHeader({props}){
    return(
        <div class="modal-header">{props.children}</div>
    );
}

export function ModalContent({props}){
    return(
        <div> {props.children} </div>
    );
}

export function ModalFooter({props}){
    return(
        <div className="modal-footer"> {props.children} </div>
    );
}