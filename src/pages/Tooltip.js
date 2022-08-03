import { SnippetJs, ToolTipButton, ToolTipLeft, ToolTipRight } from "../Components/Components";

export default function ToolTipComponent({page}){

    return(

<>
        <h1 class="mb-3">Tooltip</h1>
        <p class="main-text">
          Tooltip can be used to show user some information, when user hovers
          the pointer over an item, without clicking it, and a tooltip may
          appear—a small "hover box" with information about the item being
          hovered over.
        </p>

        {page===55 && ToolTipLeftComp()}

        {page===56 && ToolTipRightComp()}

      </>
    );

}

export function ToolTipRightComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="right-tooltip">Right Tooltip</h2>


    <article class="my-2">
<h3>html</h3>
<p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div class="flex ml-5">
        <ToolTipButton className="mx-0p5">
          <i class="far fa-heart m-auto"></i>
           <ToolTipRight>add to wishlist</ToolTipRight>
        </ToolTipButton>
        <ToolTipButton className="bg-red-50 mx-0p5">
          <i class="fas fa-heart m-auto"></i>
           <ToolTipRight>remove from wishlist</ToolTipRight>
        </ToolTipButton>
    
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<button class="card-icon-btn tooltip">
  <i class="far fa-heart m-auto"></i>
  <span class="tooltip-right tooltip-text">
    add to wishlist
  </span>
</button>

<button class="bg-red-50 card-icon-btn tooltip">
  <i class="fas fa-heart m-auto"></i>
  <span class="tooltip-right tooltip-text">
    remove from wishlist
  </span>
</button>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
<div class="component-container">
  <SnippetJs>
{` <ToolTipButton>
      <i class="far fa-heart m-auto"></i>
      <ToolTipRight>add to wishlist</ToolTipRight>
    </ToolTipButton>
    <ToolTipButton className="bg-red-50">
      <i class="fas fa-heart m-auto"></i>
      <ToolTipRight>remove from wishlist</ToolTipRight>
    </ToolTipButton>
    
    
    `}
  </SnippetJs>
  </div>
</article>
  </section>;
}

export function ToolTipLeftComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="left-tooltip">Left Tooltip</h2>


    <article class="my-2">
<h3>html</h3>
<p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div class="flex ml-5">
        <ToolTipButton className="mx-0p5">
          <i class="far fa-heart m-auto"></i>
           <ToolTipLeft>add to wishlist</ToolTipLeft> 
        </ToolTipButton>
        <ToolTipButton className="bg-red-50 mx-0p5">
          <i class="fas fa-heart m-auto"></i>
           <ToolTipLeft>remove from wishlist</ToolTipLeft> 
        </ToolTipButton>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<button class="card-icon-btn tooltip">
  <i class="far fa-heart m-auto"></i>
  <span class="tooltip-left tooltip-text">
    add to wishlist
  </span>
</button>

<button class="bg-red-50 card-icon-btn tooltip">
  <i class="fas fa-heart m-auto"></i>
  <span class="tooltip-left tooltip-text">
    remove from wishlist
  </span>
</button>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
<div class="component-container">
  <SnippetJs>
{`<ToolTipButton>
      <i class="far fa-heart m-auto"></i>
      <ToolTipLeft>add to wishlist</ToolTipLeft> 
  </ToolTipButton>
  <ToolTipButton className="bg-red-50">
      <i class="fas fa-heart m-auto"></i>
      <ToolTipLeft>remove from wishlist</ToolTipLeft> 
  </ToolTipButton>
  
  
  `}
  </SnippetJs>
  </div>
</article>
  </section>;
}
