import { useCart } from "../Context/cart-context";
import blackpanther from "../assets/jpegs/black-panther.jpg"
import captain from "../assets/jpegs/captain-america.jpg"
import spider from "../assets/jpegs/spider-man.jpg"
import ironman from "../assets/jpegs/iron-man.jpg"
import marvel from "../assets/jpegs/marvel.jpg"
import { Avatar } from "../Components/Components";

export default function AvatarComponent(){
const {page}=useCart();
    return(
        <>
        <h1 class="mb-3">Avatar</h1>
        <p class="main-text">Avatars can be used for user profile picture.</p>

        {page===16 && AlertSameSized()}

        {page===17 && AlertDifferentSize()}


      </>
    );

}

function AlertDifferentSize() {
  return (<section class="my-2 section-component">
    <h2 class="my-2" id="different-sized">Different Sized Avatars</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
       <Avatar src={blackpanther} className="avatar-xs" />
       <Avatar src={captain} className="avatar-sm mx-1" />
       <Avatar src={spider} />
       <Avatar src={ironman} className="avatar-md mx-1" />
       <Avatar src={marvel} className="avatar-lg" />
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<img loading="lazy" class="avatar avatar-xs" src="..." alt="..." />
<img loading="lazy" class="avatar avatar-sm" src="..." alt="..." />
<img loading="lazy" class="avatar" src="..." alt="..." />
<img loading="lazy" class="avatar avatar-md" src="..." alt="..." />
<img loading="lazy" class="avatar avatar-lg" src="..." alt="..." />


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.The Avatar component
            takes src, className and alt props.Different className for different sizes as shown.</p>
    <div class="component-container">
      

      <pre class="pre-code">
        <code class="language-html">
{`<Avatar src="" alt="" className="avatar-xs" />
  <Avatar src="" alt="" className="avatar-sm" />
  <Avatar src="" alt="" />
  <Avatar src="" alt="" className="avatar-md" />
  <Avatar src="" alt="" className="avatar-lg" />


`}
        </code>
      </pre>
    </div>
    </article>
  </section>);
}

function AlertSameSized() {
  return (<section class="my-2 section-component">
    <h2 class="my-2" id="same-sized">Same Sized Avatars</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <Avatar src={blackpanther}/>
        <Avatar src={captain} className="mx-1"/>
        <Avatar src={spider}/>
        <Avatar src={ironman} className="mx-1"/>
        <Avatar src={marvel}/>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<img loading="lazy" class="avatar" src="..." alt="..." />
<img loading="lazy" class="avatar" src="..." alt="..." />        
<img loading="lazy" class="avatar" src="..." alt="..." />
<img loading="lazy" class="avatar" src="..." alt="..." />
<img loading="lazy" class="avatar" src="..." alt="..." />


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.The Avatar component
            takes src, className and alt props.</p>
    <div class="component-container">
      

      <pre class="pre-code">
        <code class="language-html">
{` <Avatar src="" alt=""/>
   <Avatar src="" alt=""/>
   <Avatar src="" alt=""/>
   <Avatar src="" alt=""/>
   <Avatar src="" alt=""/>


`}
        </code>
      </pre>
    </div>
    </article>
  </section>
  );
}
