import { CardBadgeLeft, CardBoody, CardDismiss, CardDismissIcon, CardFooterHorizontal, CardFooterVertical, CardHeaderVertical, CardHeading, CardHorizontal, CardIconButton, CardImageHorizontal, CardImageVertical, CardTextOverlay, CardTextOverlayBody, CardTextOverlayContent, CardVertical, Cod, SnippetJs } from "../Components/Components";
import blackpanther from "../assets/jpegs/black-panther.jpg"
import captain from "../assets/jpegs/captain-america.jpg"
import spider from "../assets/jpegs/spider-man.jpg"
import ironman from "../assets/jpegs/iron-man.jpg"
import marvel from "../assets/jpegs/marvel.jpg"
import eternals from "../assets/jpegs/eternals.jpg"

export default function CardComponent({page}){

    return(
        <>
        <h1 class="mb-3">Card</h1>
        <p class="main-text">
          Cards can be proved very useful. You can use them to display content
          on an e-commerce app, or on a video library app. You can also use them
          to show user feedback in the form of text-only card on your site.
        </p>

       

        {page==25 && CardHorizontalComp()}

        

        {page==26 && CardVerticalComp()}

      

        {page==27 && CardTextOverlayComp()}

       

        {page==28 && CardDismissShadowComp()}

       
      </>
    );
}

export function CardDismissShadowComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="card-dismiss">Dismiss Card with Shadow</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <CardDismiss>
            <CardDismissIcon> <i class="fas fa-times m-auto"></i></CardDismissIcon>
            <CardHeading>Marvel Heading</CardHeading>
            <CardBoody>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardBoody>
        </CardDismiss>
        


      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<div class="card card-dismiss">
     <button class="card-icon-btn ml-auto">
        <i class="fas fa-times m-auto"></i>
     </button>

  <h1 class="card-head">Marvel Heading</h1>
  <p class="card-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua.
  </p>
</div>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<CardDismiss>`}</Cod> is the container for the component
            and users can add customized component inside it.</p>
    <div class="component-container">
  <SnippetJs>
{`<CardDismiss>
    <CardDismissIcon> <i class="fas fa-times m-auto"></i></CardDismissIcon>
    <CardHeading>Marvel Heading</CardHeading>
    <CardBoody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </CardBoody>
 </CardDismiss>n>
        
        
`}
  </SnippetJs>
    </div>
    </article>
  </section>;
}

export function CardTextOverlayComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="card-text-overlay">Text Overlay Card</h2>
    <p class="my-2 section-text">
      You can hover to see overlay transition
    </p>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>

    <div class="component-container">




      <div>
        
      <CardTextOverlay>
          <CardImageVertical src={eternals}/>
          <CardTextOverlayContent>
             <i class="fas fa-play overlay-play-icon"></i> Play
          </CardTextOverlayContent>
          <CardTextOverlayBody>
              <CardImageHorizontal src={marvel}/>
              <div>
                <CardHeading> Marvel Studios' Eternals | Final Trailer</CardHeading>
                <CardBoody>Marvel Entertainment</CardBoody>
              </div>
          </CardTextOverlayBody>
      </CardTextOverlay>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<div class="card card-text-overlay card-vertical">
  <img loading="lazy" class="card-vertical-img" src="..." alt="..." />

  <span class="card-vertical-img overlay-content">
    <i class="fas fa-play overlay-play-icon"></i> Play
  </span>

  <div class="card-text-overlay-row">
    <img loading="lazy" class="card-horizontal-img" src="..." alt="..." />

    <div>
      <h1 class="card-head">
        Marvel Studios' Eternals | Final Trailer
      </h1>
      <p class="card-text">Marvel Entertainment</p>
    </div>
  </div>
</div>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<CardTextOverlay>`}</Cod> is the container for the component
            and users can add customized component inside it.</p>
    <div class="component-container">
  <SnippetJs>
{`<CardTextOverlay>
     <CardImageVertical src=""/>
          <CardTextOverlayContent>
             <i class="fas fa-play overlay-play-icon"></i> Play
          </CardTextOverlayContent>
          <CardTextOverlayBody>
              <CardImageHorizontal src={marvel}/>
              <div>
                <CardHeading> Marvel Studios' Eternals | Final Trailer</CardHeading>
                <CardBoody>Marvel Entertainment</CardBoody>
              </div>
          </CardTextOverlayBody>
      </CardTextOverlay>
        
        
`}
  </SnippetJs>
    </div>
    </article>
  </section>;
}

export function CardVerticalComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="card-vertical">Vertical Item Card</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">


 
      <div>
      <CardVertical>
        <CardHeaderVertical>
          <CardBadgeLeft> 4+ <i class="fas fa-star"></i></CardBadgeLeft>
          <CardIconButton className="ml-auto"><i class="far fa-heart m-auto"></i></CardIconButton>
        </CardHeaderVertical>
        <CardImageVertical src={marvel}/>
        <CardHeading>Hulk Bobblehead</CardHeading>
        <CardBoody> 
          Elegant Lifestyle Super Hero Incredible Hulk Action Figure
            Limited Edition, Marvel Comics Character
            </CardBoody>
            <CardFooterVertical>
            <span class="current-price"><strong>₹416</strong></span>
            <span class="earlier-price">₹1,780</span>
            <span class="pct-off">76% off</span>
            </CardFooterVertical>
      </CardVertical>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`
 <div class="card card-vertical">
 <div class="card-vertical-header">
   <span class="status-badge text-center w-6p5">
     4+ <i class="fas fa-star"></i>
   </span>

   <button class="card-icon-btn ml-auto">
     <i class="far fa-heart m-auto"></i>
   </button>
 </div>

 <img loading="lazy" class="card-vertical-img" src="..." alt="..." />

 <h1 class="card-head">Hulk Bobblehead</h1>
 <p class="card-text">
   Elegant Lifestyle Super Hero Incredible Hulk Action Figure 
   Limited Edition, Marvel Comics Character
 </p>

 <div class="card-vertical-footer">
   <span class="current-price">
     <strong>₹416</strong>
   </span>
   <span class="earlier-price">₹1,780</span>
   <span class="pct-off">76% off</span>
 </div>
</div>             
              

`}

        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<CardVertical>`}</Cod> is the container for the component
            and users can add customized component inside it.</p>
    <div class="component-container">
  <SnippetJs>
{`<CardVertical>
    <CardHeaderVertical>
        <CardBadgeLeft> 4+ <i class="fas fa-star"></i></CardBadgeLeft>
        <CardIconButton><i class="far fa-heart m-auto"></i></CardIconButton>
    </CardHeaderVertical>
    <CardImageVertical src={marvel}/>
    <CardHeading>Hulk Bobblehead</CardHeading>
    <CardBoody> 
      Elegant Lifestyle Super Hero Incredible Hulk Action Figure
      Limited Edition, Marvel Comics Character
    </CardBoody>
    <CardFooterVertical>
       <span class="current-price"><strong>₹416</strong></span>
       <span class="earlier-price">₹1,780</span>
       <span class="pct-off">76% off</span>
    </CardFooterVertical>
</CardVertical>
        
        
`}
  </SnippetJs>
    </div>
    </article>
  </section>;
}

export function CardHorizontalComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="card-horizontal">Horizontal Text Card</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">


      
      <div>
      <CardHorizontal src={captain}>
         <CardHeading>Captain America</CardHeading>
         <CardBoody>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </CardBoody>
         <CardFooterHorizontal>
              <CardIconButton><i class="far fa-comment m-auto"></i></CardIconButton>
              <CardIconButton><i class="far fa-heart m-auto"></i></CardIconButton>
              <CardIconButton><i class="far fa-share-square m-auto"></i></CardIconButton>
         </CardFooterHorizontal>
      </CardHorizontal>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<div class="card card-horizontal">
  <img loading="lazy" class="card-horizontal-img" src="..." alt="..." />

  <div>
    <h1 class="card-head">Captain America</h1>
    <p class="card-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <div class="card-horizontal-footer">
      <button class="card-icon-btn">
        <i class="far fa-comment m-auto"></i>
      </button>
      <button class="card-icon-btn">
        <i class="far fa-heart m-auto"></i>
      </button>
      <button class="card-icon-btn">
        <i class="far fa-share-square m-auto"></i>
      </button>
    </div>
  </div>
</div>

`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<CardHorizontal>`}</Cod> is the container for the component
            and users can add customized component inside it.</p>
    <div class="component-container">
  <SnippetJs>
{`<CardHorizontal src={captain}>
     <CardHeading>Captain America</CardHeading>
     <CardBoody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardBoody>
      <CardFooterHorizontal>
          <CardIconButton><i class="far fa-comment m-auto"></i></CardIconButton>
          <CardIconButton><i class="far fa-heart m-auto"></i></CardIconButton>
          <CardIconButton><i class="far fa-share-square m-auto"></i></CardIconButton>
      </CardFooterHorizontal>
</CardHorizontal>
        
        
`}
  </SnippetJs>
    </div>
    </article>
  </section>;
}
