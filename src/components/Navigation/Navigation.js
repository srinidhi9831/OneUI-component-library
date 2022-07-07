

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
            <li>{props.children}</li>
        </ul>
    );
}


export function Logo(props){
    return(
        <span class="logo">{props.children}</span>
    );
}