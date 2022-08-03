import {useState} from "react"

export function Alert(props){

    return(
        <div class={`alert ${props.className}`}>
               {props.children}
              </div> 
    )
}
export function SnippetHtml(props){
  return(
    <pre class="pre-code">
    <code class="language-html"> 
      {props.children}
    </code>
    </pre> 
  );
}
export function SnippetJs(props){
  return(
    <pre class="pre-code">
    <code class="language-jsx"> 
      {props.children}
    </code>
    </pre> 
  );
}
export function Avatar(props){

    return(
        <img
        loading="lazy"
        class={`avatar ${props.className}`}
        src={props.src}
        alt={props.alt || ""}
      />
    )
    
}

export function BadgeIcon(props){

    return(
 <button class={`badge-btn ${props.className}`}>
        {props.children}    
</button>
    )
    
}

export function BadgeCount(props){

    return(         
  <span class={`badge-count ${props.className}`}>{props.children}</span>

    )
    
}

export function BadgeStatus(props){

    return(         
  <span class={`badge-status ${props.className}`}>{props.children}</span>

    )
    
}
export function BadgeAvatar(props){

    return(         
        <div class="badge">
        <img loading="lazy" class="avatar" src={props.src} alt={props.alt || ""} />        
          {props.children}
      </div>

    )
    
}

<BadgeIcon>
        <i class="fas fa-shopping-cart"></i>
           <BadgeCount  className="bg-lime-500">9+</BadgeCount>
        </BadgeIcon>



export function Button(props){

    return(         
        <button onClick={props.onClick} class={`btn ${props.className}`}>{props.children}</button>
    )
    
}
export function ButtonLink(props){

    return(         
        <a href={props.href}>
  <button onClick={props.onClick} class={`btn btn-rounded ${props.className}`}>{props.children}</button>
    </a>
    )
    
}

export function ButtonIcon(props){

    return(         
        <button class={`btn btn-squared ${props.className}`}>
        {props.children}
      </button>
    )
    
}


export function ButtonFloatingAction(props){

    return(         
        <a href={props.href || "/"}>
        <button onClick={props.onClick} class={`btn-floating ${props.className}`}>
          {props.children}
        </button>
      </a>
    )
    
} 
export function CardHeading(props){

    return(
<h1 class="card-head">{props.children}</h1>
    );
    }

    export function CardBoody(props){

        return(
            <p class="card-text">{props.children}</p>
        );
        }

        export function CardFooterHorizontal(props){

            return(
     <div class="card-horizontal-footer">
       {props.children}
    </div>
            );
            }

    
export function CardHorizontal(props){

    return(         
        <div class="card card-horizontal">
     <img loading="lazy" class="card-horizontal-img" src={props.src} alt={props.alt || ""} />

  <div>
  {props.children}
  </div>
</div>
    )
    
} 

export function CardHeaderVertical(props){

    return(
<div class="card-vertical-header">
{props.children}
  </div>
    );
    }

    export function CardFooterVertical(props){

        return(
<div class="card-vertical-footer">
    {props.children} 
  </div>
        );
        }

        export function CardImageVertical(props){

            return(
<img loading="lazy" class="card-vertical-img" src={props.src} alt={props.alt} />
            );
}
export function CardImageHorizontal(props){

    return(
<img loading="lazy" class="card-horizontal-img" src={props.src} alt={props.alt} />
    );
}


export function CardVertical(props){

 return(
                    <div class="card card-vertical">
                  {props.children} 
                    </div>
     );
}

export function CardTextOverlay(props){

    return(
        <div class="card card-text-overlay card-vertical">
                     {props.children} 
                       </div>
        );
   }

   export function CardBadgeLeft(props){
    return(
      <span class="status-badge text-center w-6p5">
         {props.children}
        </span>
    );
   }

   export function CardIconButton(props){
    return(
         <button class={`card-icon-btn ${props.className}`}>
          {props.children}
       </button>
    );
   }

   export function CardTextOverlayContent(props){

    return(
        <span class="card-vertical-img overlay-content">
                  {props.children} 
                </span>
     
        );
   }

   export function CardTextOverlayBody(props){

    return(
        <div class="card-text-overlay-row">
                  {props.children} 
                </div>
     
        );
   }

   export function CardDismiss(props){

    return(
        <div class="card card-dismiss">
                  {props.children} 
                </div>
     
        );
   }
   export function CardDismissIcon(props){

    return(
        <button class="card-icon-btn ml-auto">
     {props.children} 
  </button>
     
        );
   }

   export function ImageRound(props){

    return(
        <img loading="lazy" class={`img img-round ${props.className}`} src={props.src} alt={props.alt}/>
     
        );
   }

   export function ImageSquare(props){

    return(
        <img loading="lazy" class={`img img-square ${props.className}`} src={props.src} alt={props.alt}/>
     
        );
   }

   export function ImageResponsive(props){

    return(
<div class="img-container">
       <img loading="lazy" class={`img-responsive ${props.className}`} src={props.src} alt={props.alt}/>
</div>

      
     
        );
   }

   export function InputText(props){

    return(
        <div class="textarea-container">
        <textarea
          class="textarea"
          placeholder={props.placeholder}
        ></textarea>
      
        {props.children}
      </div>

      
     
        );
   }

   export function InputForm(props){

    return(
        <form class="form">
{props.children}
</form>
        );
   }

   export function Input(props){

    return(
        <input
        class={`input ${props.className}`}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
        );
   }
   export function ListItem(props){

    return(
      
        <li>{props.children}</li>
       
        );
   }

   export function ListOrdered(props){

   return(
    (props.reversed===true && (<ol reversed className={props.className}>{props.children}</ol>)) || <ol className={props.className}>{props.children}</ol>
    
    )
   }
   export function ListUnOrdered(props){

    return(
     <ul>
        {props.children}
     </ul>
     
     )
    }

  //  export function ListNumbered(props){
  //  (props.children.map((v)=>console.log(v)))
  //   return(
  //       <ol>
  //       {props.children}
  //     </ol>
  //       );
  //  }
   export function ListCheckbox(props){
    
     return(
        <label class="cursor-ptr" for={props.for}>
        <input
        class="cursor-ptr mr-1"
        type="checkbox"
        name={props.name}
        id={props.id || props.for || ""}
      />
         {props.children}
         </label>
         );
    }

    export function ListRadio(props){
    
        return(
           <label class="cursor-ptr" for={props.for}>
           <input
           class="cursor-ptr mr-1"
           type="radio"
           name={props.name}
           id={props.id || ""}
         />
            {props.children}
            </label>
            );
       }


       export function ListStacked(props){
    
        return(
           <ul class="stacked-list">
            {props.children}
            </ul>
            );
       }

       export function ListStackedIcon(props){
    
        return(
            <span class="translate-y">
                {props.children}
          </span>
        
           
            );
       }

       export function ListStackedItem(props){
    
        return(
            <li class="shadow-light">
            <a href={props.href || "#0"} className={(props.viewed===true)?"viewed":""}>
            {props.children}
            </a>
          </li>
            );
       }

       export function Modal(props){
    
        return(
          <div class={`modal ${props.className}`}>
            {props.children}
            </div>
            );
       }

       export function ModalHeader(props){
    
        return(
          <div class="modal-head">
            {props.children}
            </div>
            );
       }
       export function ModalBody(props){
    
        return(
          <p class="modal-body">
            {props.children}
            </p>
            );
       }
       export function ModalFooter(props){
    
        return(
          <div class="modal-foot">
            {props.children}
            </div>
            );
       }

       export function RatingStar(props){
    
        return(
          <span class={(props.filled===true)?"rating-star filled":"rating-star"}> &#9733; </span>
            );
       }

       export function RatingStarLive(props){
    
        return(
          <fieldset class="ratings">
                   {props.children}
            </fieldset>
            );
       }

       export function RatingStarRadio(props){
    
        return(
          <>
          <input type="radio" name="rating" id={props.id || props.for || ""} />
          <label for={props.for} class={props.half===true?"half-star":""}>
            &#9733;
             </label>
             </>
            );
       }

       export function Slider(props){
    const[val,setval]=useState(props.value || 0)
        return(
          <input
  type="range"
  min={props.min}
  max={props.max}
  value={val}
  step={props.step}
  class="slider"
  onChange={(val)=>setval(val)}
/>
            );
        }

export function Toast(props){
    
          return(
            <div class={`toast ${props.className}`}>
               {props.children}
              </div>
              );
          }
export function ToastHeader(props){
    
            return(
              <div class="toast-head">
              {props.children}
            </div>
                );
}

export function ToastBody(props){
    
  return(
    <p class="toast-msg">
        {props.children}
   </p>
      );
}





export function ToastStacked({children}){


  return(
    <ul class="toast-fixed">
     {children}
</ul>
    );
}

export function ToastStackedItem({children}){


  return(
    <li class="mt-1">
     {children}
</li>
    );
}

export function ToolTipLeft(props){


  return(
    <span class="tooltip-left tooltip-text">
      {props.children}
  </span>
    );
}


export function ToolTipRight(props){


  return(
    <span class="tooltip-right tooltip-text">
      {props.children}
  </span>
    );
}

export function ToolTipButton(props){


  return(
    <button class={`card-icon-btn tooltip ${props.className}`}>
    {props.children}
</button>
    
  
    );
}





export function NavigationContainer(props){


  return(
    <div class="navbar-container">
    {props.children}
</div>
    
  
    );
}

export function NavigationContent(props){


  return(
    <nav class="navbar-align px-2 py-1">
    {props.children}
</nav>
    
  
    );
}

export function NavSection(props){


  return(
    <div class={`navbar-align ${props.className}`}>
    {props.children}
</div>
    
  
    );
}

export function NavLogo(props){


  return(
    <img
    loading="lazy"
    class="img-brand-logo"
    src={props.src}
    alt={props.alt || "image"}
  />
    
  
    );
}

export function NavSearchBar(props){


  return(
    <form class="navbar-form">
      <input type="text" placeholder={props.placeholder} />
          <button type="submit">
               <i class="fas fa-search"></i>
            </button>
      </form>
    
  
    );
}

export function NavBreakPoint(props){


  return(
    <div class={`navbar-md-container ${props.className}`}>
           {props.children}
      </div>
    
  
    );
}

export function NavBreakPointCont(props){


  return(
    <div class="navbar-sm-container relative">
           {props.children}
      </div>
    
  
    );
}

export function NavBreakPointList(props){


  return(
    <ul class="d-none navbar-sm-list">
           {props.children}
      </ul>
    
  
    );
}

export function NavBreakPointListItem(props){


  return(
    <li class="my-1">
           {props.children}
      </li>
    
  
    );
}


export function GridItem(props){
  return(
    <div class={props.className}>{props.children}</div>
  )
}


export function GridTwoRow(props){
  return(
    <div class={`grid grid-rows-2 ${props.className}`}>{props.children}</div>
  )
}

export function GridThreeRow(props){
  return(
    <div class={`grid grid-rows-3 ${props.className}`}>{props.children}</div>
  )
}



export function GridThreeColumn(props){
  return(
    <div class={`grid grid-cols-3 ${props.className}`}>{props.children}</div>
  )
}
export function GridTwoColumn(props){
  return(
    <div class={`grid grid-cols-2 ${props.className}`}>{props.children}</div>
  )
}


export function Cod({children}){
  return <code class="language-html hljs language-xml">{children}</code>
}














        





   

   
    

   
   


 
              

            

 
   

            









