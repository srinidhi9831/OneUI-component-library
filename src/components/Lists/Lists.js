

export function ListItem(props){
    return(
        <li className={`list-item list-item-normal ${props.className}`}>{props.children}</li>
    );
}




export function ListItemStacked(props){
    return(
        <li className={`list-item card-shadow ${props.className}`}>{props.children}</li>
    );
}

export function List(props){
    return(
        <div class="lists-container">
        <ul class="list-group list-group-normal">
            {props.children}  
        </ul> 
    </div>
    );
}

export function ListStacked(props){
    return(
        <div class="lists-container">
        <ul class="list-group card-shadow">
            {props.children}  
        </ul> 
    </div>
    );
}

