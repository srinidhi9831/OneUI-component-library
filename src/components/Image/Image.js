

 <img class="img-responsive" src="../image-resourse/water.jpg"></img>

 export function ImageResponsive(props){
    return(
        <img class="img-responsive" src={props.image} />
    );
 }

 export function ImageRound(props){
    return(
        <img style={{height:props.height,width:props.width}} class="img-round-container" src={props.image} />
    );
 }