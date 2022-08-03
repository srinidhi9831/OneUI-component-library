import { Button, ButtonFloatingAction, ButtonIcon, ButtonLink, SnippetJs } from "../Components/Components";
import { useCart } from "../Context/cart-context";


export default function ButtonComponent({page}){

    return(
       

      <>
        <h1 class="mb-3">Button</h1>
        <p class="main-text">
          Buttons can be used to make your web page interactive to your user.
          You can use them to take user action.
        </p>

        

        {page==20 && ButtonFilledComp()}

        
        {page==21 && ButtonOutlineComp()}

      
        {page==22 && ButtonLinkComp()}

       
        {page==23 && ButtonIconComp()}


        {page==24 && ButtonFloatingComp()}

       
      </>


    );
}

export function ButtonFloatingComp() {
  return (<section class="my-2 section-component">
    <h2 class="my-2" id="btn-float">Floating Button</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">

      <div>
        <ButtonFloatingAction>
        <i class="fas fa-arrow-up"></i>
        </ButtonFloatingAction>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<a href="#">
  <button class="btn-floating">
    <i class="fas fa-arrow-up"></i>
  </button>
</a>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.The ButtonFloatingAction 
            component has href , className and onClick props and takes children.</p>
    <div class="component-container">
  <SnippetJs>
{`<ButtonFloatingAction>
    <i class="fas fa-arrow-up"></i>
  </ButtonFloatingAction>
        
        
`}
  </SnippetJs>
    </div>
    </article>
  </section>);
}

export function ButtonIconComp() {
  return (
  <section class="my-2 section-component">
    <h2 class="my-2" id="btn-icon">Icon Button</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        
        <ButtonIcon className="btn-error-solid">
              <i class="fas fa-door-open"></i> Log In
        </ButtonIcon>
        <ButtonIcon className="btn-error-outline">
              <i class="fas fa-door-open"></i> Log In
        </ButtonIcon>
      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<button class="btn btn-error-solid btn-squared">
    <i class="fas fa-door-open"></i> Log In
  </button>
  <button class="btn btn-error-outline btn-squared">
    <i class="fas fa-door-open"></i> Log In
  </button>


`}
        </code>
      </pre>
    </div>
</article>

    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.The ButtonIcon component
            takes className prop and children.</p>
    <div class="component-container">
<SnippetJs>
 {`<ButtonIcon className="btn-error-solid">
        <i class="fas fa-door-open"></i> Log In
   </ButtonIcon>
   <ButtonIcon className="btn-error-outline">
        <i class="fas fa-door-open"></i> Log In
   </ButtonIcon>
   
   
   `}
</SnippetJs>
    </div>
    </article>
  </section>
  );
}

export function ButtonLinkComp() {
  return( <section class="my-2 section-component">
    <h2 class="my-2" id="btn-link">Link Button</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <ButtonLink className="btn-primary-solid">
             Link
        </ButtonLink>
        <ButtonLink className="btn-primary-outline">
             Link
        </ButtonLink>
      </div>

      <pre class="pre-code">
        <code class="language-html">

          {`  
<a href="#">
  <button class="btn btn-primary-solid btn-rounded">Link</button>
</a>
<a href="#">
  <button class="btn btn-primary-outline btn-rounded">Link</button>
</a>


`}
        </code>
      </pre>
    </div>
</article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.The ButtonLink component
            takes href , className , onClick and children props.</p>
    <div class="component-container">
<SnippetJs>
{` <ButtonLink className="btn-primary-solid">
      Link
    </ButtonLink>
    <ButtonLink className="btn-primary-outline">
      Link
    </ButtonLink>
    
    
`}
</SnippetJs>
    </div>
    </article>
  </section>);
}

export function ButtonOutlineComp() {
  return (<section class="my-2 section-component">
    <h2 class="my-2" id="btn-outlined">Outlined Primary Buttons</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <Button className="btn-error-outline">Error</Button>
        <Button className="btn-primary-outline">Primary</Button>
        <Button className="btn-secondary-outline">Secondary</Button>
        <Button className="btn-success-outline">Success</Button>
      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<button class="btn btn-error-outline">Error</button>
  <button class="btn btn-primary-outline">Primary</button>
  <button class="btn btn-secondary-outline">Secondary</button>
  <button class="btn btn-success-outline">Success</button>


`}
        </code>
      </pre>
    </div>
</article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.The Button component 
            takes className , onClick and children props.</p>
    <div class="component-container">
<SnippetJs>
{`<Button className="btn-error-outline">Error</Button>
<Button className="btn-primary-outline">Primary</Button>
<Button className="btn-secondary-outline">Secondary</Button>
<Button className="btn-success-outline">Success</Button>


`}
</SnippetJs>
    </div>
    </article>
  </section>);
}

export function ButtonFilledComp() {
  return (<section class="my-2 section-component">
    <h2 class="my-2" id="btn-filled">Filled Primary Buttons</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <Button>Default</Button>
        <Button className="btn-error-solid">Error</Button>
        <Button className="btn-primary-solid">Primary</Button>
        <Button className="btn-secondary-solid">Secondary</Button>
        <Button className="btn-success-solid">Success</Button>
      </div>

      <pre class="pre-code">
        <code class="language-html">

{`<button class="btn">Default</button>
<button class="btn btn-error-solid">Error</button>
<button class="btn btn-primary-solid">Primary</button>
<button class="btn btn-secondary-solid">Secondary</button>
<button class="btn btn-success-solid">Success</button>


`}

        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.The Button component 
            takes className , onClick and children props.</p>
    <div class="component-container">
<SnippetJs>
  {`<Button>Default</Button>
<Button className="btn-error-solid">Error</Button>
<Button className="btn-primary-solid">Primary</Button>
<Button className="btn-secondary-solid">Secondary</Button>
<Button className="btn-success-solid">Success</Button>


`}
</SnippetJs>
    </div>
    </article>
  </section>);
}
