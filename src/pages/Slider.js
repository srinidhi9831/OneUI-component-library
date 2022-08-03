import { Slider, SnippetJs } from "../Components/Components";

export default function SliderComponent(){

    return(
<main class="main-docs">
        <h1 class="mb-3">Slider</h1>
        <p class="main-text">
          Slider can be used to take user input based on some range.
        </p>

        {SliderComp()}
      </main>

    );

}

export function SliderComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="input-slider">Input Slider</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <Slider min="1" max="5" value="2" step="0.1" />
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<input
  type="range"
  min="1"
  max="5"
  value="2"
  step="0.1"
  class="slider"
/>


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
{` <Slider min="1" max="5" value="2" step="0.1" />
        
        
        `} 
              </SnippetJs>
        </div>
        </article>
  </section>;
}
