export default function Alert(props){
 
 //console.log(backg)
    return(
        <div className={`alert ${props.className}`}>
            <span>{props.children}</span><span className="alert-close">X</span>
        </div>
    );
}