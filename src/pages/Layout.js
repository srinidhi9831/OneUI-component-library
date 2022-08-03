import { GridItem, GridThreeColumn, GridThreeRow, GridTwoColumn, GridTwoRow, SnippetHtml, SnippetJs } from "../Components/Components";

export default function Layout({page}){

    return(
        <>
         <h1 class="mb-3">CSS Grid</h1>
        <p class="main-text">
          CSS Grid can be used to structure elements in rows and columns.
        </p>
          {page==7 && TwoColoumnGridComp()}
          {page==8 && TwoRowGridComp()}
          {page==9 && ThreeColoumnGridComp()}
          {page==10 && ThreeRowGridComp()}
        </>
    );
}


export  function TwoColoumnGridComp(){

    return(
        <section class="my-2 section-component">
        <h2 class="my-2" id="two-columns">Two Columns Grid</h2>
        <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>

        <div class="component-container">
          <div>
            <GridTwoColumn>
                <GridItem>Grid Item One</GridItem>
                <GridItem>Grid Item Two</GridItem>
            </GridTwoColumn>
          </div>

      <SnippetHtml>
{`<div class="grid grid-cols-2">
  <div>Grid Item One</div>
  <div>Grid Item Two</div>
</div>


`}
      </SnippetHtml>
        </div>
        </article>
        <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
            <div class="component-container">
                <SnippetJs>
{`<GridTwoColumn>
                <GridItem>Grid Item One</GridItem>
                <GridItem>Grid Item Two</GridItem>
            </GridTwoColumn>
            
            
            `}
                </SnippetJs>
            </div>
            </article>
      </section>
    );
}

export  function TwoRowGridComp(){

    return(
        <section class="my-2 section-component">
          <h2 class="my-2" id="two-rows">Two Rows Grid</h2>


          <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
          <div class="component-container">
            <div>
                <GridTwoRow>
                    <GridItem>Grid Item One</GridItem>
                    <GridItem>Grid Item Two</GridItem>
                </GridTwoRow>
            </div>

            <SnippetHtml>
{`<div class="grid grid-rows-2">
  <div>Grid Item One</div>
  <div>Grid Item Two</div>
</div>


`}
      </SnippetHtml>
          </div>
          </article>
          <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
            <div class="component-container">
                <SnippetJs>
{`<GridTwoRow>
                    <GridItem>Grid Item One</GridItem>
                    <GridItem>Grid Item Two</GridItem>
                </GridTwoRow>
                
                
                `}
                </SnippetJs>
            </div>
            </article>
        </section>
    );
}

export  function ThreeColoumnGridComp(){

    return(
        <section class="my-2 section-component">
        <h2 class="my-2" id="three-columns">Three Columns Grid</h2>


        <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
        <div class="component-container">
          <div>
            <GridThreeColumn>
                   <GridItem>Grid Item One</GridItem>
                    <GridItem>Grid Item Two</GridItem>
                    <GridItem>Grid Item Three</GridItem>
            </GridThreeColumn>
          </div>

          <SnippetHtml>
{`<div class="grid grid-cols-3">
  <div>Grid Item One</div>
  <div>Grid Item Two</div>
  <div>Grid Item Three</div>
</div>


`}
      </SnippetHtml>
        </div>
        </article>
        <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
            <div class="component-container">
                <SnippetJs>
{` <GridThreeColumn>
                   <GridItem>Grid Item One</GridItem>
                    <GridItem>Grid Item Two</GridItem>
                    <GridItem>Grid Item Three</GridItem>
            </GridThreeColumn>
            
            
            `}
                </SnippetJs>
            </div>
            </article>
      </section>
    );
}

export  function ThreeRowGridComp(){

    return(
        <section class="my-2 section-component">
        <h2 class="my-2" id="three-rows">Three Rows Grid</h2>


        <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
        <div class="component-container">
          <div>
            <GridThreeRow>
                   <GridItem>Grid Item One</GridItem>
                    <GridItem>Grid Item Two</GridItem>
                    <GridItem>Grid Item Three</GridItem>
            </GridThreeRow>
          </div>

          <SnippetHtml>
{`<div class="grid grid-rows-3">
  <div>Grid Item One</div>
  <div>Grid Item Two</div>
  <div>Grid Item Three</div>
</div>


`}
      </SnippetHtml>
        </div>
        </article>
        <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
            <div class="component-container">
                <SnippetJs>
{`  <GridThreeRow>
                   <GridItem>Grid Item One</GridItem>
                    <GridItem>Grid Item Two</GridItem>
                    <GridItem>Grid Item Three</GridItem>
            </GridThreeRow>
            
            
            `}
                </SnippetJs>
            </div>
            </article>
      </section>
    );
}