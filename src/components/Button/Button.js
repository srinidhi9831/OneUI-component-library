export default function Button(props){

    return(
        
        <button className={props.className}>
            {props.children}
        </button>       
    );
}

export function ButtonfloatingAction(props){
    return(
        <button class={`btn-floating-action ${props.className}`}>
           <img src={props.image} alt=""/>
        </button>
    );
}

export function ButtonIcon(props){
    return(
        <button class={`btn-icon ${props.className}`}>
            <img src={props.image} alt=""/>
        </button>
    );
}