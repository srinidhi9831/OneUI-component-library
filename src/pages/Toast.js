import { useState } from "react";
import { Cod, SnippetJs, Toast, ToastBody, ToastHeader, ToastStacked, ToastStackedItem } from "../Components/Components";

export default function ToastComponent({page}){

    return(
        <>
        <h1 class="mb-3">Toast</h1>
        <p class="main-text">
          Toast can be used to show notifications to the user.
        </p>

        {page===52 && ToastNotificationComp()}

        {page===53 && <>{<ToastNotificationDemoComp/>}</>}

        {page===54 && <>{<ToastStackedComp/>}</>}
            

      </>

    );

}





export function ToastStackedComp() {

  const[styleSec,setstyleSec]=useState("d-none")
  const[style,setstyle]=useState("d-none")
  const ShowToast=()=>setstyle("")
  const HideToast=()=>setstyle("d-none")
  const clkhandler=()=>{
    ShowToast();
   setTimeout(HideToast,3000);

  }
   
  const ShowToastSec=()=>setstyleSec("")
  const HideToastSec=()=>setstyleSec("d-none")
  const clkhandlerSec=()=>{
    ShowToastSec();
   setTimeout(HideToastSec,3000);
  
  }
  return <section class="my-2 section-component">
    <h2 class="my-2" id="stacked-notification-toast-demo">
      Stacked Notification Toast Demo
    </h2>

    <article class="my-2">
<h3>html</h3>
<p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <button
          onClick={clkhandler}
          id="first-stacked-toast-btn"
          class="btn btn-primary-solid btn-squared"
        >
          First Stacked Toast
        </button>

        <button
        onClick={clkhandlerSec}
          id="second-stacked-toast-btn"
          class="btn btn-primary-solid btn-squared"
        >
          Second Stacked Toast
        </button>
          <ToastStacked>
            <ToastStackedItem>
            <Toast className={style}>
           <ToastHeader>
             Notification from One UI
             <button class="toast-cross" onClick={HideToast}>
              <i class="fas fa-times"></i>
             </button>
           </ToastHeader>
           <ToastBody>
           Hey! Now you can design your project faster and better with One UI.
           </ToastBody>
        </Toast>
            </ToastStackedItem>
            <ToastStackedItem>
            <Toast className={styleSec}>
           <ToastHeader>
             Notification from One UI
             <button class="toast-cross" onClick={HideToastSec}>
              <i class="fas fa-times"></i>
             </button>
           </ToastHeader>
           <ToastBody>
           Hey! Now you can design your project faster and better with One UI.
           </ToastBody>
        </Toast>
            </ToastStackedItem>
          </ToastStacked>
        
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<button
  id="first-stacked-toast-btn"
  class="btn btn-primary-solid btn-squared"
>
  First Stacked Toast
</button>

<button
  id="second-stacked-toast-btn"
  class="btn btn-primary-solid btn-squared"
>
  Second Stacked Toast
</button>

<ul class="toast-fixed">
  <li class="mt-1">
    <div id="stacked-toast-2" class="d-none toast">
      <div class="toast-head">
        Notification from Posh UI
        <button
          id="stacked-toast-2-cross-btn"
          class="toast-cross"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <p class="toast-msg">
        Hey! Now you can design your project faster and better
        with
        <a class="toast-link" href="https://poshui.netlify.app">
          Posh UI
        </a>
      </p>
    </div>
  </li>

  <li class="mt-1">
    <div id="stacked-toast-1" class="d-none toast">
      <div class="toast-head">
        Notification from Posh UI
        <button
          id="stacked-toast-1-cross-btn"
          class="toast-cross"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <p class="toast-msg">
        Hey! Now you can design your project faster and better
        with
        <a class="toast-link" href="https://poshui.netlify.app">
          Posh UI
        </a>
      </p>
    </div>
  </li>
</ul>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"><Cod>{`<ToastStacked>`}</Cod> is the container for stacked toast
             and <Cod>{`<ToastStackedItem>`}</Cod> is container for an Item.</p> 

            <div class="component-container">
              <SnippetJs>
{`const[style,setstyle]=useState("d-none")
  const ShowToast=()=>setstyle("")
  const HideToast=()=>setstyle("d-none")
  const clkhandler=()=>{
   setTimeout(HideToast,3000);
   ShowToast();
   
  }
   const[styleSec,setstyleSec]=useState("d-none")
  const ShowToastSec=()=>setstyleSec("")
  const HideToastSec=()=>setstyleSec("d-none")
  const clkhandlerSec=()=>{
   setTimeout(HideToastSec,3000);
   ShowToastSec();
  }


  <ToastStacked>
    <ToastStackedItem>
        <Toast className={style}>
           <ToastHeader>
               Notification from Posh UI
               <button class="toast-cross" onClick={HideToast}>
                   <i class="fas fa-times"></i>
               </button>
           </ToastHeader>
           <ToastBody>
             Hey! Now you can design your project faster and better with One UI.
           </ToastBody>
        </Toast>
      </ToastStackedItem>
    <ToastStackedItem>
          <Toast className={styleSec}>
            <ToastHeader>
               Notification from Posh UI
               <button class="toast-cross" onClick={HideToastSec}>
                  <i class="fas fa-times"></i>
               </button>
           </ToastHeader>
           <ToastBody>
              Hey! Now you can design your project faster and better with One UI.
           </ToastBody>
        </Toast>
   </ToastStackedItem>
</ToastStacked>


`}
              </SnippetJs>
            </div>
    </article>
  </section>;
}

export function ToastNotificationDemoComp() {

  const[style,setstyle]=useState("d-none toast-fixed")
 const ShowToast=()=>setstyle("toast-fixed")
 const HideToast=()=>setstyle("d-none toast-fixed")
 const clkhandler=()=>{
  setTimeout(HideToast,3000);
  ShowToast();
  
 }
  return <section class="my-2 section-component">
    <h2 class="my-2" id="notification-toast-demo">
      Notification Toast Demo
    </h2>

    <article class="my-2">
<h3>html</h3>
<p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <button
         onClick={clkhandler}
          id="notification-toast-demo-btn"
          class="btn btn-primary-solid btn-squared"
        >
          Toast Demo
        </button>
        
        <Toast className={style}>
           <ToastHeader>
             Notification from One UI
             <button class="toast-cross" onClick={HideToast}>
              <i class="fas fa-times"></i>
             </button>
           </ToastHeader>
           <ToastBody>
           Hey! Now you can design your project faster and better with One UI.
           </ToastBody>
        </Toast>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<button
  id="notification-toast-demo-btn"
  class="btn btn-primary-solid btn-squared"
>
  Toast Demo
</button>

<div id="notification-toast" class="d-none toast toast-fixed">
  <div class="toast-head">
    Notification from Posh UI
    <button id="toast-cross-btn" class="toast-cross">
      <i class="fas fa-times"></i>
    </button>
  </div>

  <p class="toast-msg">
    Hey! Now you can design your project faster and better with
    <a class="toast-link" href="https://poshui.netlify.app">
      Posh UI
    </a>
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
            

            <div class="component-container">
              <SnippetJs>
{`const[style,setstyle]=useState("d-none toast-fixed")
  const ShowToast=()=>setstyle("toast-fixed")
  const HideToast=()=>setstyle("d-none toast-fixed")
  const clkhandler=()=>{
  setTimeout(HideToast,3000);
  ShowToast();
  
  <Toast className={style}>
    <ToastHeader>
        Notification from Posh UI
        <button class="toast-cross" onClick={HideToast}>
            <i class="fas fa-times"></i>
        </button>
    </ToastHeader>
    <ToastBody>
        Hey! Now you can design your project faster and better with One UI.
    </ToastBody>
</Toast>
        
        
        `}
              </SnippetJs>
            </div>
    </article>
  </section>;
}

export function ToastNotificationComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="simple-toast">Notification Toast</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        
        <Toast>
           <ToastHeader>
             Notification from One UI
             <button class="toast-cross">
              <i class="fas fa-times"></i>
             </button>
           </ToastHeader>
           <ToastBody>
           Hey! Now you can design your project faster and better with One UI.
           </ToastBody>
        </Toast>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<div class="toast">
  <div class="toast-head">
    Notification from Posh UI
    <button class="toast-cross">
      <i class="fas fa-times"></i>
    </button>
  </div>

  <p class="toast-msg">
    Hey! Now you can design your project faster and better with
    <a class="toast-link" href="https://poshui.netlify.app">
      Posh UI
    </a>
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
            <p class="my-2 section-text"><Cod>{`<Toast>`}</Cod> is the container for toast
             , <Cod>{`<ToastHeader>`}</Cod> is container for toast header and <Cod>{`<ToastBody>`}</Cod> is 
             the container for toast body.</p> 

            <div class="component-container">
              <SnippetJs>
{` <Toast>
     <ToastHeader>
        Notification from Posh UI
        <button class="toast-cross">
          <i class="fas fa-times"></i>
        </button>
      </ToastHeader>
      <ToastBody>
        Hey! Now you can design your project faster and better with One UI.
      </ToastBody>
</Toast>
        
        
        `}
              </SnippetJs>
            </div>
    </article>
  </section>;
}
