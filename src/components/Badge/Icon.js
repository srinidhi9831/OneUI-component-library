

export default function Icon(props){
    return(
        <span class={`badge ${props.className}`}>{props.children}</span>
    );
}



export function IconTop(props){
    return(
        <span class={`badge badge-icon ${props.className}`}>{props.children}</span>
    );
}

export function IconBottom(props){
    return(
        <span class={`badge badge-avatar ${props.className}`}>{props.children}</span>
    );
}