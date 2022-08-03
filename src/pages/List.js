import { Cod, ListCheckbox, ListItem, ListOrdered, ListRadio, ListStacked, ListStackedItem, ListUnOrdered, SnippetJs } from "../Components/Components";

export default function ListComponent({page}){

    return(

<>
        <h1 class="mb-3">List</h1>
        <p class="main-text">List can be used to show a list of items.</p>

        

        {page===35 && ListNumberedComp()}

        {page===36 && ListReversedComp()}

        {page===37 && ListLowerRomanComp()}

        {page===38 && ListLowerAlphaComp()}

        {page===39 && ListDiscComp()}

        {page===40 && ListCircleComp()}

        {page===41 && ListSquareComp()}

        {page===42 && ListCheckboxComp()}

        {page===43 && ListRadioComp()}

        {page===44 && ListNotificationStackComp()}

    
      </>
    );

}

export function ListNumberedComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="numbered">Numbered List</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <ListOrdered>
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ol>
  <li>List Item One</li>
  <li>List Item Two</li>
  <li>List Item Three</li>
</ol>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<ListOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{`<ListOrdered>
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListReversedComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="reversed">Reversed List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <ListOrdered reversed={true}>
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ol reversed>
  <li>List Item One</li>
  <li>List Item Two</li>
  <li>List Item Three</li>
</ol>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<ListOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{`<ListOrdered reversed={true}>
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>`}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListLowerRomanComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="lower-roman">Lower Roman List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <ListOrdered className="list-lower-roman">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ol class="list-lower-roman">
  <li>List Item One</li>
  <li>List Item Two</li>
  <li>List Item Three</li>
</ol>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<ListOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{` <ListOrdered className="list-lower-roman">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListLowerAlphaComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="lower-alpha">Lower Alpha List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <ListOrdered className="list-lower-alpha">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
       
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ol class="list-lower-alpha">
  <li>List Item One</li>
  <li>List Item Two</li>
  <li>List Item Three</li>
</ol>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<ListOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{`<ListOrdered className="list-lower-alpha">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListDiscComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="disc">Disc List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <ListOrdered className="list-disc">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ul class="list-disc">
  <li>List Item One</li>
  <li>List Item Two</li>
  <li>List Item Three</li>
</ul>`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<ListOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{`<ListOrdered className="list-disc">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListCircleComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="circle">Circle List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <ListOrdered className="list-circle">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ul class="list-circle">
  <li>List Item One</li>
  <li>List Item Two</li>
  <li>List Item Three</li>
</ul>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<ListOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{`<ListOrdered className="list-circle">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListSquareComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="square">Square List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <ListOrdered className="list-square">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
       
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ul class="list-square">
  <li>List Item One</li>
  <li>List Item Two</li>
  <li>List Item Three</li>
</ul>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<ListUnOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{` <ListOrdered className="list-square">
          <ListItem>List Item One</ListItem>
          <ListItem>List Item Two</ListItem>
          <ListItem>List Item Three</ListItem>
        </ListOrdered>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListCheckboxComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="category-checkbox">Category Checkbox List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <ListUnOrdered>
          <ListItem>
             <ListCheckbox name="category" for="bobbleheads"> Bobblehead's</ListCheckbox>
          </ListItem>
          <ListItem>
             <ListCheckbox name="category" for="mens-clothing">  Men's Clothing</ListCheckbox>
          </ListItem>
          <ListItem>
             <ListCheckbox name="category" for="kids-clothing"> Kid's Clothing</ListCheckbox>
          </ListItem>
        </ListUnOrdered>
        
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ul>
  <li>
    <label class="cursor-ptr" for="bobbleheads">
      <input
        class="cursor-ptr mr-1"
        type="checkbox"
        name="category"
        id="bobbleheads"
      />
      Bobblehead's
    </label>
  </li>

  <li>
    <label class="cursor-ptr" for="mens-clothing">
      <input
        class="cursor-ptr mr-1"
        type="checkbox"
        name="category"
        id="mens-clothing"
      />
      Men's Clothing
    </label>
  </li>

  <li>
    <label class="cursor-ptr" for="kids-clothing">
      <input
        class="cursor-ptr mr-1"
        type="checkbox"
        name="category"
        id="kids-clothing"
      />
      Kid's Clothing
    </label>
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
            <p class="my-2 section-text"> <Cod> {`<ListUnOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{`  <ListUnOrdered>
          <ListItem>
             <ListCheckbox name="category" for="bobbleheads"> Bobblehead's</ListCheckbox>
          </ListItem>
          <ListItem>
             <ListCheckbox name="category" for="mens-clothing">  Men's Clothing</ListCheckbox>
          </ListItem>
          <ListItem>
             <ListCheckbox name="category" for="kids-clothing"> Kid's Clothing</ListCheckbox>
          </ListItem>
        </ListUnOrdered>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListRadioComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="price-radio">Price Radio List</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
      <ListUnOrdered>
          <ListItem>
             <ListRadio for="low-to-high" name="price" id="low-to-high"> Price - Low to High</ListRadio>
          </ListItem>
          <ListItem>
             <ListRadio  for="high-to-low" name="price" >Price - High to Low</ListRadio>
          </ListItem>
      </ListUnOrdered>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ul>
  <li>
    <label class="cursor-ptr" for="low-to-high">
      <input
          class="cursor-ptr mr-1"
          type="radio"
          name="price"
          id="low-to-high"
      />
      Price - Low to High
    </label>
  </li>

  <li>
    <label class="cursor-ptr" for="high-to-low">
      <input
          class="cursor-ptr mr-1"
          type="radio"
          name="price"
          id="high-to-low"
      />
      Price - High to Low
    </label>
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
            <p class="my-2 section-text"> <Cod> {`<ListUnOrdered>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListItem>`}</Cod> 
            is the container for each item.</p>
            <div class="component-container">

              <SnippetJs>
{`<ListUnOrdered>
          <ListItem>
             <ListRadio for="low-to-high" name="price" id="low-to-high"> Price - Low to High</ListRadio>
          </ListItem>
          <ListItem>
             <ListRadio  for="high-to-low" name="price" >Price - High to Low</ListRadio>
          </ListItem>
      </ListUnOrdered>
      
      
      `}
              </SnippetJs>
            </div>

</article>
  </section>;
}

export function ListNotificationStackComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="notification-stacked">
      Notification Stacked List
    </h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <ListStacked>
          <ListStackedItem>
             New Notification 1
              <span class="translate-y">
                <i class="fas fa-times"></i>
              </span>
          </ListStackedItem>
          <ListStackedItem>
             New Notification 2
              <span class="translate-y">
                <i class="fas fa-times"></i>
              </span>
          </ListStackedItem>
          <ListStackedItem viewed={true}>
          Viewed Notification
          
              <span class="translate-y">
                
              <i class="fas fa-check"></i>
              </span>
          </ListStackedItem>
          <ListStackedItem viewed={true}>
          Viewed Notification
              <span class="translate-y">
              <i class="fas fa-check"></i>
              </span>
          </ListStackedItem>
        </ListStacked>
        
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<ul class="stacked-list">
  <li class="shadow-light">
    <a href="#">
      New Notification 1
      <span class="translate-y">
        <i class="fas fa-times"></i>
      </span>
    </a>
  </li>

  <li class="shadow-light">
    <a href="#">
      New Notification 2
      <span class="translate-y">
        <i class="fas fa-times"></i>
      </span>
    </a>
  </li>

  <li class="shadow-light">
    <a class="viewed" href="#">
      Viewed Notification
      <span class="translate-y">
        <i class="fas fa-check"></i>
      </span>
    </a>
  </li>

  <li class="shadow-light">
    <a class="viewed" href="#">
      Viewed Notification
      <span class="translate-y">
        <i class="fas fa-check"></i>
      </span>
    </a>
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
            <p class="my-2 section-text"> <Cod> {`<ListStacked>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ListStackedItem>`}</Cod> 
            is the container for each stacked item.</p>
            <div class="component-container">

              <SnippetJs>
{`<ListStacked>
          <ListStackedItem href="">
             New Notification 1
              <span class="translate-y">
                <i class="fas fa-times"></i>
              </span>
          </ListStackedItem>
          <ListStackedItem href="">
             New Notification 2
              <span class="translate-y">
                <i class="fas fa-times"></i>
              </span>
          </ListStackedItem>
          <ListStackedItem viewed={true} href="">
          Viewed Notification
              <span class="translate-y">
              <i class="fas fa-check"></i>
              </span>
          </ListStackedItem>
          <ListStackedItem viewed={true} href="">
          Viewed Notification
              <span class="translate-y">
              <i class="fas fa-check"></i>
              </span>
          </ListStackedItem>
        </ListStacked>
        
        
        `}
              </SnippetJs>
            </div>

</article>
  </section>;
}
