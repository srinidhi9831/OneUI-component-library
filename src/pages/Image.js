import { ImageResponsive, ImageRound, ImageSquare, SnippetJs } from "../Components/Components";
import stanlee from "../assets/jpegs/stanlee.jpg"
import dosome from "../assets/jpegs/do-something-great.jpg"


export default function ImageComponent({page}){

    return(
        <>
        <h1 class="mb-3">Image</h1>
        <p class="main-text">
          Image can be used to display large picture on the website.
        </p>

       

        {page==29 && ImageRoundComp()}
        {page==30 && ImageSquareComp()}
       {page==31 && ImageResponsiveComp()}

      </>
    );
}

export function ImageSquareComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="img-square">Square Image</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        
        <ImageSquare className="mx-1" src={dosome} alt="image"/>
        <ImageSquare className="mx-1" src={stanlee} alt="image"/>
      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<img loading="lazy" class="img img-square" src="..." alt="..."/>
<img loading="lazy" class="img img-square" src="..." alt="..."/>


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
{`<ImageSquare className="mx-1" src={dosome} alt="image"/>
<ImageSquare className="mx-1" src={stanlee} alt="image"/>


`}
              </SnippetJs>
            </div>
      </article>
  </section>;
}

export function ImageResponsiveComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="img-responsive">Responsive Image</h2>
    <p class="my-2 section-text">
      Resize your browser window, to see its responsiveness.
    </p>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <div class="img-container">
          {/* <!-- .img-container {max-width: 52vw;} --> */}
          <ImageResponsive src={stanlee} alt="stan" />
        </div>
      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<div class="img-container">
  <!-- .img-container {max-width: 52vw;} -->

  <img loading="lazy" class="img-responsive" src="..." alt="..."/>
<div>


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
{` <ImageResponsive src={stanlee} alt="stan" />


`}
              </SnippetJs>
            </div>
      </article>
  </section>;
}

export function ImageRoundComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="img-round">Round Image</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <ImageRound className="mx-1" src={dosome} alt="image"/>
        <ImageRound className="mx-1" src={stanlee} alt="image"/>
      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<img loading="lazy" class="img img-round" src="..." alt="..."/>
<img loading="lazy" class="img img-round" src="..." alt="..."/>


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
{`<ImageRound className="mx-1" src={dosome} alt="image"/>
  <ImageRound className="mx-1" src={stanlee} alt="image"/>
  
  
  `}
              </SnippetJs>
            </div>
      </article>
  </section>;
}
