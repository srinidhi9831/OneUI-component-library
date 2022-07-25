

export default function Modal(props){
    return(
        <div class="modal-container" style={props.style}>
            <div class="modal-content card-shadow">
                {props.children}
            </div>
            
        </div>
    );
}

export function ModalHeader(props){
    return(
        <div class="modal-header">{props.children}</div>
    );
}

export function ModalContent(props){
    return(
        <div> {props.children} </div>
    );
}

export function ModalFooter(props){
    return(
        <div className="modal-footer"> {props.children} </div>
    );
}