import blackpanther from "../assets/jpegs/black-panther.jpg"
import spider from "../assets/jpegs/spider-man.jpg"
import marvel from "../assets/jpegs/marvel.jpg"
import { BadgeAvatar, BadgeCount, BadgeIcon, BadgeStatus, SnippetJs } from "../Components/Components"

export default function BadgeComponent({page}){

    return(

        <>
        <h1 class="mb-3">Badge</h1>
        <p class="main-text">
          Badge can be used to show either status of the user (online, or
          offline) or you can use it show notification count.
        </p>

      

        {page===18 && BadgeOnIcon()}

        

        {page===19 && BadgeOnAvatar()}

        
      </>
    );
}

function BadgeOnAvatar() {
  return (<section class="my-2 section-component">
    <h2 class="my-2" id="badge-avatar">Badge on Avatars</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <BadgeAvatar src={marvel}>
          <BadgeStatus className="bg-lime-500" />
        </BadgeAvatar>
        <BadgeAvatar src={spider}>
          <BadgeStatus className="bg-red-500" />
        </BadgeAvatar>
        <BadgeAvatar src={blackpanther}>
          <BadgeStatus className="bg-slate-400" />
        </BadgeAvatar>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<div class="badge">
  <img loading="lazy" class="avatar" src="..." alt="..." />        
  <span class="badge-status bg-lime-500"></span>
</div>

<div class="badge">
  <img loading="lazy" class="avatar" src="..." alt="..." />        
  <span class="badge-status bg-red-500"></span>
</div>

<div class="badge">
  <img loading="lazy" class="avatar" src="..." alt="..." />
  <span class="badge-status bg-slate-400"></span>
</div>


`}
        </code>
      </pre>
    </div>
    </article>
<article class="my-2">
    <h3>React</h3>
    <p class="my-2 section-text">To use Badge on Avatar in React use the below code snippet.
    BadgeAvatar component takes src and alt props for image and BadgeStatus component takes 
    className prop for status color.</p>
    <div class="component-container">
      <pre class="pre-code">
        <code class="language-html">
{`  <BadgeAvatar src=" " alt=" ">
      <BadgeStatus className="bg-lime-500" />
    </BadgeAvatar>
      <BadgeAvatar src=" " alt=" "}>
    <BadgeStatus className="bg-red-500" />
      </BadgeAvatar>
    <BadgeAvatar src=" " alt=" ">
      <BadgeStatus className="bg-slate-400" />
    </BadgeAvatar>


`}
        </code>
      </pre>
    </div>

</article>
  </section>);
}

function BadgeOnIcon() {
  return (<section class="my-2 section-component">
    <h2 class="my-2" id="badge-icon">Badge on Icons</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <BadgeIcon className="mx-1">
           <i class="fas fa-home"></i>
           <BadgeCount  className="bg-amber-500">9</BadgeCount>
        </BadgeIcon>
        <BadgeIcon  className="mx-1">
        <i class="fas fa-shopping-cart"></i>
           <BadgeCount  className="bg-lime-500">9+</BadgeCount>
        </BadgeIcon>
        <BadgeIcon  className="mx-1">
           <i class="fas fa-bell"></i>
           <BadgeCount  className="bg-red-500">99+</BadgeCount>
        </BadgeIcon>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<button class="badge-btn">
  <i class="fas fa-home"></i>
  <span class="badge-count bg-amber-500">9</span>
</button>

<button class="badge-btn">
  <i class="fas fa-shopping-cart"></i>
  <span class="badge-count bg-lime-500">9+</span>
</button>

<button class="badge-btn">
  <i class="fas fa-bell"></i>
  <span class="badge-count bg-red-500"> 99+ </span>
</button>  


`}

        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code Snippet shows React component for Badge on Icon.
            BadgeIcon takes children prop for the Icon and BadgeCount takes className prop for the color.</p>
    <div class="component-container">
   <SnippetJs>
    {` <BadgeIcon>
           <i class="fas fa-home"></i>
           <BadgeCount  className="bg-amber-500">9</BadgeCount>
        </BadgeIcon>
        <BadgeIcon>
        <i class="fas fa-shopping-cart"></i>
           <BadgeCount  className="bg-lime-500">9+</BadgeCount>
        </BadgeIcon>
        <BadgeIcon>
           <i class="fas fa-bell"></i>
           <BadgeCount  className="bg-red-500">99+</BadgeCount>
        </BadgeIcon>
        

`}
   </SnippetJs>

    </div>
    </article>
  </section>);
}
