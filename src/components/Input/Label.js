





export function Label(props){
    return(
        <label className={props.className} for={props.for}>{props.children}</label>
    );
}

// export function LabelError(props){
//     return(
//         <label class="input-errorr" for={props.for}>{props.children}</label>
//     );
// }
