
export default function Introduction(){
  
    return(
        <>
        <h1 class="mb-3">Introduction</h1>
        <p class="main-text">
          One UI is a continuously developing Component Library, built using
          <em>React Js</em>. You can use it to build awesome
          UI layouts. To know more about it, look at its
          <a
            href="/"
            target="_blank"
          >
            <span class="link intro-github">GitHub</span>
          </a>
          repo.
        </p>

        <section class="my-2 section-component">
          <h2 class="my-2" id="quick-start">Quick Start</h2>

          <article class="my-2">
            <h3>CSS</h3>

            <p class="my-2 section-text">
              To start using the components in your project, Copy-paste the
              stylesheet
              <code class="language-html hljs language-xml">&lt;link&gt; </code>
              into your
              <code class="language-html hljs language-xml">{`<head>`}</code>
              before all other stylesheets to load our CSS.
            </p>

            <div class="component-container">
              <pre class="pre-code intro-pre">
                <code class="language-html"> 
{`
<link
   rel="stylesheet"
   href="https://poshui-components.netlify.app/css/main.css"
/>


`}
                </code>
              </pre>
            </div>
          </article>

          <article class="my-2">
            <h3>JS</h3>

            <p class="my-2 section-text">
              Many of Posh UI components, like Modal, Toast, and Mobile
              Navigation require the use of JavaScript to function. For proper
              functioning of those, Copy-paste the following
              <code class="language-html hljs language-xml">&lt;script&gt;</code>
              near the end of your pages, right before the closing
              <code class="language-html hljs language-xml">&lt;/body&gt;</code>
              tag, to enable them.
            </p>

            <div class="component-container">
              <pre class="pre-code intro-pre">
                <code class="language-html">
{`

<script 
   src="https://poshui-components.netlify.app/js/main.js> 
 </script>
  
 
`}         
                </code>
              </pre>
            </div>
          </article>
        </section>
      </>
    );
}