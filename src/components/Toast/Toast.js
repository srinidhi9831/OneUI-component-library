//div class="toast"style={{position: "static"}}>this is toast </div>

export function Toast(props){
    return(
        <div class="toast"style={props.style}>{props.children}</div>
    );
}