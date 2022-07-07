export default function Badge(props){

    return(
        <>
        <button class={`badge-container ${props.className}`}>
            {props.children}
        </button>
        </>
    );
}

export  function BadgeRound(props){

    return(
        <>
        <button class={`badge-container avatar-round ${props.className}`}>
            {props.children}
        </button>
        </>
    );
}