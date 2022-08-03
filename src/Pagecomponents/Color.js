
export function CompContainerTable(props){

    return(
        <div class="component-container">
            <div style={{backgroundColor:"white"}} class="fs-1p5 grid grid-cols-2 p-1">
                 {props.children}
                 </div>
            </div>
    );
}

export function Table(props){
    return(
        <table class="m-0p5 text-left">
                 {props.children}
            </table>
    );
}

export function Heading(props){

    return(
       <thead>
        <tr>
          {props.children}
        </tr>
       </thead>
    );
}

export function HeadingItem(props){

    return(
       
        <th>
          {props.children}
        </th>
      
    );
}

export function TableBody(props){

    return(
       <tbody>
        <tr>
        {props.children}
        </tr>
       </tbody>
    );
}

export function TableBodyItem(props){

    return(
      <td>
 {props.children}
      </td>
       
        
    );
}
export function TableColor(props){
   
    return(
        <table className="m-0p5 text-left">
            <thead>
                <tr>
                {
                    props.Heading.map((val,i)=> <th>{val}</th>)
                }
                </tr>
            </thead>
            <tbody>
                {
                    props.body.map((val)=>{
                        return(
                           <tr>
                           {val.map((v)=><td>{v}</td>)}
                           </tr>
                            )
                        
                    })
                }
            </tbody>
        </table>
    );
}





