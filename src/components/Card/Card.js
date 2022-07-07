


export function CardWithBadge(props){

    return(
        <div className="card card-with-badge">
           <div className="title">
                {props.title}
           </div>
           <div class="content">
           {props.content}
            </div>
            <div class="badge-card">{props.badgeValue}</div>
        </div>
    );

}


export function CardWithDismiss(props){

    return(
        <div class="card">
        <div class="title">
        {props.title}
    <span class="card-close">X</span>
        </div>
        <div class="content">
        {props.content}
        </div>
    </div>
    );

}

export function CardWithTextOverlay(props){

    return(
        <div class="card card-with-image">
        <div class="card-image card-image-overlay">
        <img src={props.image} />
          <div class="title title-overlay">
          {props.title}
           </div>
         </div>
        
        <div class="content">
        {props.content}
        </div>
    </div>
    );

}

export function CardWithTextOnly(props){

    return(
        <div class="card">
        <div class="title">
        {props.title}
        </div>
        <div class="content">
        {props.content}
        </div>
    </div>
    );

}


export function CardVertical(props){

    return(
        <div class="vertical card card-with-image">
        <div class="card-image">
           <img src={props.image} />
        </div>
        <div>
        <div class="title">
        {props.title}
        </div>
    
        <div class="content">
        {props.content}
        </div>
    </div>
    </div>
    );

}


export function CardHorizantal(props){

    return(
        <div class="horizantal card card-with-image">
        <div class="card-image">
        <img src={props.image} />
        </div>
        <div>
        <div class="title">
        {props.title}
        </div>
    
        <div class="content">
        {props.content}
        </div>
    </div>
    </div>
    );

}


export function CardShadow(props){

    return(
        <div class="card card-shadow card-with-image">
        <div class="card-image">
        <img src={props.image} />
    
               <div class="title">
               {props.title}
               </div>
        </div>
        <div class="content">
        {props.content}
        </div>
    </div>
    );

}




