


export default function Typography({page}){


    return(

        <>
        <h1 class="mb-3">Typography</h1>
        <p class="main-text">
          Use Typography to format text content on your web site.
        </p>

        

        {page===3 && TypoDisplayComp()}
        {page===4 && TypoHeadingComp()}
        {page===5  && typoAlignmentComp()}
        {page===6  && TypoInlineTextComp()}
      </>
    );
}

export function TypoDisplayComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="display">Display</h2>

    <div class="component-container">
      <div>
        <p class="fs-xs">Extra Small One UI</p>
        <p class="fs-sm">Small One UI</p>
        <p class="fs-md">Medium One UI</p>
        <p class="fs-lg">Large One UI</p>
        <p class="fs-xl">Extra Large One UI</p>
        <p class="fs-xxl">Extra Extra Large One UI</p>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<p class="fs-xs">Extra Small One UI</p>
<p class="fs-sm">Small One UI</p>
<p class="fs-md">Medium One UI</p>
<p class="fs-lg">Large One UI</p>
<p class="fs-xl">Extra Large One UI</p>
<p class="fs-xxl">Extra Extra Large One UI</p>


`}
        </code>
      </pre>
    </div>
  </section>;
}

export function TypoHeadingComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="headings">Headings</h2>

    <div class="component-container">
      <div>
        <h6 class="my-0p5">h6. One UI heading</h6>
        <h5 class="my-0p5">h5. One UI heading</h5>
        <h4 class="my-0p5">h4. One UI heading</h4>
        <h3 class="my-0p5">h3. One UI heading</h3>
        <h2 class="my-0p5">h2. One UI heading</h2>
        <h1 class="my-0p5 fs-3">h1. One UI heading</h1>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<h6 class="my-0p5">h6. One UI heading</h6>
<h5 class="my-0p5">h5. One UI heading</h5>
<h4 class="my-0p5">h4. One UI heading</h4>
<h3 class="my-0p5">h3. One UI heading</h3>
<h2 class="my-0p5">h2. One UI heading</h2>
<h1 class="my-0p5">h1. One UI heading</h1>


`}
        </code>
      </pre>
    </div>
  </section>;
}

export function typoAlignmentComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="alignment">Alignment</h2>

    <div class="component-container pt-2">
      <div>
        <p class="text-left">Hey!👋 I am Left Aligned 😀</p>
        <p class="text-center">Hey!👋 I am Center Aligned 😀</p>
        <p class="text-right">Hey!👋 I am Right Aligned 😀</p>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<p class="text-left">Hey!👋 I am Left Aligned 😀</p>
<p class="text-center">Hey!👋 I am Center Aligned 😀</p>
<p class="text-right">Hey!👋 I am Right Aligned 😀</p>
                                                     

`}
        </code>
      </pre>
    </div>
  </section>;
}

export function TypoInlineTextComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="inline-text">Inline Text Elements</h2>

    <div class="component-container">
      <div>
        <small class="my-0p5">I am the small text😐</small>
        <p class="my-0p5 text-gray-500">They colored me 😔 in gray</p>
        <p class="my-0p5 text-overline">
          You can see the <em>text-decoration:overline</em>
        </p>
        <p class="my-0p5 text-line-through">
          You can see the <em>text-decoration: line-through</em>
        </p>
        <p class="my-0p5 text-underline">
          You can see the <em>text-decoration: underline</em>
        </p>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<small>I am the small text😐</small>
<p class="text-gray-500">They colored me 😔 in gray</p>
<p class="text-overline">
  You can see the <em>text-decoration:overline</em>
</p>
<p class="text-line-through">
  You can see the <em>text-decoration: line-through</em>
</p>
<p class="text-underline">
  You can see the <em>text-decoration: underline</em>
</p>


`}
        </code>
      </pre>
    </div>
  </section>;
}
