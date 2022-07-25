

export default function Navigation(props){
    return(
      
     <div class={`navbar ${props.className}`}>
       {props.children}
    </div>
    )
}


export function NavItem(props){
    return(
        <ul>
            {props.children}
        </ul>
    );
}

export function Item(props){
    return(
        <li>{props.children}</li>
    );
}


export function Logo(props){
    return(
        <span class="logo">{props.children}</span>
    );
}