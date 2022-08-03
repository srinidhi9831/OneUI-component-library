import { Cod, Input, InputForm, InputText, SnippetJs } from "../Components/Components";


export default function InputComponent({page}){

    return(

        <>
        <h1 class="mb-3">Input</h1>
        <p class="main-text">
          Input can be used to take input from your user. It can make your site
          more interactive.
        </p>

        {page===32 && InputTextareaComp()}
        {page===33 && InputFormComp()}
        {page===34 && InputFormErrorComp()}

      </>

    );

}

export function InputFormComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="form-input">Form Input</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>

        <InputForm>
           <Input type="email" name="email-id" placeholder="Enter Your Email"/>
           <Input type="password" name="password" placeholder="Enter Your password"/>
           <button class="btn btn-error-solid btn-squared">
            <i class="fas fa-door-open"></i> Log In
          </button>
        </InputForm>

      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<form class="form">
  <input
    class="input"
    type="email"
    name="email-id"
    placeholder="Enter Your Email"
  />
  <input
    class="input"
    type="password"
    name="password"
    placeholder="Enter Your Password"
  />

  <button class="btn btn-error-solid btn-squared">
    <i class="fas fa-door-open"></i> Log In
  </button>
</form>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<InputForm>`}</Cod> is the container for the component
            and users can add customized component inside it.</p>

            <div class="component-container">

              <SnippetJs>
 {`<InputForm>
      <Input type="email" name="email-id" placeholder="Enter Your Email"/>
      <Input type="password" name="password" placeholder="Enter Your password"/>
      <button class="btn btn-error-solid btn-squared">
        <i class="fas fa-door-open"></i> Log In
      </button>
</InputForm>


`}
              </SnippetJs>
            </div>
    </article>
  </section>;
}

export function InputFormErrorComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="error-form-input">Error Form Input</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <InputForm>
           <span class="msg-error">Enter correct Email and Password</span>
           <Input className="input-error" type="email" name="email-id" placeholder="Enter Your Email"/>
           <Input className="input-error" type="password" name="password" placeholder="Enter Your password"/>
           <button class="btn btn-error-solid btn-squared">
            <i class="fas fa-door-open"></i> Log In
          </button>
        </InputForm>
      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<form class="form">
 <span class="msg-error">Enter correct Email and Password</span>

  <input
    class="input input-error"
    type="email"
    name="email-id"
    placeholder="Enter Your Email"
  />
  <input
    class="input input-error"
    type="password"
    name="password"
    placeholder="Enter Your Password"
  />

  <button class="btn btn-error-solid btn-squared">
    <i class="fas fa-door-open"></i> Log In
  </button>
</form>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<InputForm>`}</Cod> is the container for the component
            and users can add customized component inside it.</p>

            <div class="component-container">

              <SnippetJs>
 {` <InputForm>
      <span class="msg-error">Enter correct Email and Password</span>
      <Input className="input-error" type="email" name="email-id" placeholder="Enter Your Email"/>
      <Input className="input-error" type="password" name="password" placeholder="Enter Your password"/>
      <button class="btn btn-error-solid btn-squared">
          <i class="fas fa-door-open"></i> Log In
      </button>
</InputForm>


`}
              </SnippetJs>
            </div>
    </article>
  </section>;
}

export function InputTextareaComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="text-area">Text Area</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>

        <InputText placeholder="Enter Your Message">
        <button class="btn btn-primary-solid btn-squared textarea-btn">
            <i class="fas fa-paper-plane"></i> Send
          </button>
        </InputText>

      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<div class="textarea-container">
   <textarea
    class="textarea"
    placeholder="Enter Your Message">
   </textarea>

  <button class="btn btn-primary-solid btn-squared textarea-btn">
    <i class="fas fa-paper-plane"></i> Send
  </button>
</div>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<InputText>`}</Cod> is the container for the component
            and users can add customized component inside it.</p>

            <div class="component-container">

              <SnippetJs>
 {`<InputText placeholder="Enter Your Message">
      <button class="btn btn-primary-solid btn-squared textarea-btn">
          <i class="fas fa-paper-plane"></i> Send
      </button>
</InputText>


`}
              </SnippetJs>
            </div>
    </article>
  </section>;
}
