


 export function ImageResponsive(props){
    return(
        <img class="img-responsive" src={props.image} alt=""/>
    );
 }

 export function ImageRound(props){
    return(
        <img style={{height:props.height,width:props.width}} class="img-round-container" src={props.image} alt=""/>
    );
 }