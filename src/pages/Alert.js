import { Alert, Snippet, SnippetHtml, SnippetJs } from "../Components/Components";
import { useCart } from "../Context/cart-context";

export default function AlertComponent(){

  const {page}=useCart();
    return(

        <>
        <h1 class="mb-3">Alert</h1>
        <p class="main-text">
          Alerts can be used to show a message to the user.
        </p>
          {page==11 && AlertDanger()}
          {page==12 && AlertInfo()}
          {page==13 && AlertPrimary()}
          {page==14 && AlertSecondary()}
          {page==15 && AlertSuccess()}
      </>
    );
}
export function AlertSuccess(){

  return(

    <section class="my-2 section-component">
    <h2 class="my-2" id="alert-success">Success Alert</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <Alert className="alert-success-solid">
        Hey!👋 I'm a Success Alert.
        </Alert>
        <Alert className="alert-success-outline">
        Hey!👋 I'm a Success Alert.
        </Alert>
      </div>

      <SnippetHtml>    
{`<div class="alert alert-success-solid">
Hey!👋 I'm a Success Alert
</div>
<div class="alert alert-success-outline">
Hey!👋 I'm a Success Alert
</div>


`}
</SnippetHtml> 

    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippet shows the implementation of Alert using React Component.
          The Alert components has className prop to give color for the alert.</p>
          <div class="component-container">
<SnippetJs>
{`<Alert className="alert-success-solid">
    Hey!👋 I'm a Success Alert.
 </Alert>
 <Alert className="alert-success-outline">
    Hey!👋 I'm a Success Alert.
 </Alert>
        

`}
</SnippetJs>
          </div>
      </article>
  </section>
  
        
  
  );

}

export function AlertSecondary(){

  return(
    <section class="my-2 section-component">
    <h2 class="my-2" id="alert-secondary">Secondary Alert</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
            <div class="component-container">
      <div>
        <Alert className="alert-secondary-solid">
          Hey!👋 I'm a Secondary Alert
        </Alert>
        <Alert className="alert-secondary-outline">
          Hey!👋 I'm a Secondary Alert
        </Alert>
      </div>

    <SnippetHtml>    
{`<div class="alert alert-secondary-solid">
Hey!👋 I'm a Secondary Alert
</div>
<div class="alert alert-secondary-outline">
Hey!👋 I'm a Secondary Alert
</div>


`}
      </SnippetHtml> 
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippet shows the implementation of Alert using React Component.
          The Alert components has className prop to give color for the alert.</p>
          <div class="component-container">
<SnippetJs>
{`<Alert className="alert-secondary-solid">
     Hey!👋 I'm a Secondary Alert
  </Alert>
  <Alert className="alert-secondary-outline">
     Hey!👋 I'm a Secondary Alert
  </Alert>
        

`}
</SnippetJs>
          </div>
      </article>
  </section>
  );

}



export function AlertDanger(){

  return(
<section class="my-2 section-component">
          <h2 class="my-2" id="alert-danger">Danger Alert</h2>
          <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
          <div class="component-container">
            <div>
              <Alert className="alert-danger-solid">
                Hey!👋 I'm a Danger Alert
              </Alert>
              <Alert className="alert-danger-outline">
                Hey!👋 I'm a Danger Alert
              </Alert>
            </div>

            <SnippetHtml>   
{`<div class="alert alert-danger-solid">
  Hey!👋 I'm a Danger Alert
</div>
<div class="alert alert-danger-outline">
  Hey!👋 I'm a Danger Alert
</div>


`}
              </SnippetHtml>  
          </div>
          </article>
          <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippet shows the implementation of Alert using React Component.
          The Alert components has className prop to give color for the alert.</p>
          <div class="component-container">
<SnippetJs>
{`<Alert className="alert-danger-solid">
    Hey!👋 I'm a Danger Alert
   </Alert>
  <Alert className="alert-danger-outline">
    Hey!👋 I'm a Danger Alert
  </Alert>
        

`}
</SnippetJs>
          </div>
      </article>
        </section>
  );
}

export function AlertInfo(){

  return(
    <section class="my-2 section-component">
    <h2 class="my-2" id="alert-info">Info Alert</h2>

    <article class="my-2">
      <h3>html</h3>
      <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <Alert className="alert-info-solid">
          Hey!👋 I'm a Info Alert
      </Alert>
  <   Alert className="alert-info-outline">
         Hey!👋 I'm a Info Alert
      </Alert>
      </div>

     <SnippetHtml>     
{`<div class="alert alert-info-solid">
Hey!👋 I'm a Info Alert
</div>
<div class="alert alert-info-outline">
Hey!👋 I'm a Info Alert
</div>


`}
       </SnippetHtml> 
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippet shows the implementation of Alert using React Component.
          The Alert components has className prop to give color for the alert.</p>
          <div class="component-container">
<SnippetJs>
{`<Alert className="alert-info-solid">
    Hey!👋 I'm a Info Alert
   </Alert>
  <Alert className="alert-info-outline">
    Hey!👋 I'm a Info Alert
  </Alert>
        

`}
</SnippetJs>
          </div>
      </article>
  </section>
  );
}
export function AlertWarning(){

  return(
    <section class="my-2 section-component">
    <h2 class="my-2" id="alert-warning">Warning Alert</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <Alert className="alert-warning-solid">
    Hey!👋 I'm a warning Alert
   </Alert>
  <Alert className="alert-warning-outline">
    Hey!👋 I'm a warning Alert
  </Alert>
      </div>

      <SnippetHtml>     
{`<div class="alert alert-warning-solid">
Hey!👋 I'm a Warning Alert
</div>
<div class="alert alert-warning-outline">
Hey!👋 I'm a Warning Alert
</div>


`}
       </SnippetHtml> 
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippet shows the implementation of Alert using React Component.
          The Alert components has className prop to give color for the alert.</p>
          <div class="component-container">
<SnippetJs>
{`<Alert className="alert-warning-solid">
    Hey!👋 I'm a warning Alert
   </Alert>
  <Alert className="alert-warning-outline">
    Hey!👋 I'm a warning Alert
  </Alert>
        

`}
</SnippetJs>
          </div>
      </article>
  </section>
  );
}
export function AlertPrimary(){

  return(
    <section class="my-2 section-component">
    <h2 class="my-2" id="alert-primary">Primary Alert</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <Alert className="alert-primary-solid">
          Hey!👋 I'm a Primary Alert
        </Alert>
        <Alert className="alert-primary-outline">
          Hey!👋 I'm a Primary Alert
        </Alert>
      </div>

     <SnippetHtml>     
{`<div class="alert alert-primary-solid">
Hey!👋 I'm a Primary Alert
</div>
<div class="alert alert-primary-outline">
Hey!👋 I'm a Primary Alert
</div>


`}
      </SnippetHtml>
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippet shows the implementation of Alert using React Component.
          The Alert components has className prop to give color for the alert.</p>
          <div class="component-container">
<SnippetJs>
{` <Alert className="alert-primary-solid">
     Hey!👋 I'm a Primary Alert
   </Alert>
   <Alert className="alert-primary-outline">
     Hey!👋 I'm a Primary Alert
    </Alert>
        

`}
</SnippetJs>
          </div>
      </article>
  </section>
  

  );
}