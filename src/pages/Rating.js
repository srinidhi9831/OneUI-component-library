import { Cod, RatingStar, RatingStarLive, RatingStarRadio, SnippetJs } from "../Components/Components";

export default function RatingComponent({page}){

    return(
<>
        <h1 class="mb-3">Rating</h1>
        <p class="main-text">
          Rating can be used to show ratings on the product, or it can also be
          used for taking ratings from the user.
        </p>

        {page===49 && RatingFilledComp()}
        {page===50 && RatingLiveComp()}
      </>

    );

}

export function RatingFilledComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="filled-rating">Filled Rating</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>

    <div class="component-container">
      <div>
        <RatingStar filled={true} />
        <RatingStar filled={true} />
        <RatingStar filled={true} />
        <RatingStar />
        <RatingStar />
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<span class="rating-star filled"> &#9733; </span>
<span class="rating-star filled"> &#9733; </span>
<span class="rating-star filled"> &#9733; </span>
<span class="rating-star"> &#9733; </span>
<span class="rating-star"> &#9733; </span>


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
{` <RatingStar filled={true} />
        <RatingStar filled={true} />
        <RatingStar filled={true} />
        <RatingStar />
        <RatingStar />
        
        
        `} 
              </SnippetJs>
        </div>
        </article>
  </section>;
}

export function RatingLiveComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="live-rating">Live Rating</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <RatingStarLive>
           <RatingStarRadio for="star-5"/>
           <RatingStarRadio half={true} for="star-4-n-half"/>
           <RatingStarRadio for="star-4"/>
           <RatingStarRadio half={true} for="star-3-n-half"/>
           <RatingStarRadio for="star-3"/>
           <RatingStarRadio half={true} for="star-2-n-half"/>
           <RatingStarRadio for="star-2"/>
           <RatingStarRadio half={true} for="star-1-n-half"/>
           <RatingStarRadio for="star-1"/>
        </RatingStarLive>
      
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<fieldset class="ratings">
  <input type="radio" name="rating" id="star-5" />
  <label for="star-5">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-4-n-half" />
  <label for="star-4-n-half" class="half-star">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-4" />
  <label for="star-4">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-3-n-half" />
  <label for="star-3-n-half" class="half-star">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-3" />
  <label for="star-3">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-2-n-half" />
  <label for="star-2-n-half" class="half-star">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-2" />
  <label for="star-2">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-1-n-half" />
  <label for="star-1-n-half" class="half-star">
    &#9733;
  </label>
  <input type="radio" name="rating" id="star-1" />
  <label for="star-1">
    &#9733;
  </label>
</fieldset>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"><Cod>{`<RatingStarLive>`}</Cod> is the container for Rating 
            component.</p>
            <div class="component-container">

              <SnippetJs>
{` <RatingStarLive>
      <RatingStarRadio for="star-5"/>
      <RatingStarRadio half={true} for="star-4-n-half"/>
      <RatingStarRadio for="star-4"/>
      <RatingStarRadio half={true} for="star-3-n-half"/>
      <RatingStarRadio for="star-3"/>
      <RatingStarRadio half={true} for="star-2-n-half"/>
      <RatingStarRadio for="star-2"/>
      <RatingStarRadio half={true} for="star-1-n-half"/>
      <RatingStarRadio for="star-1"/>
</RatingStarLive>
        
        
        `} 
              </SnippetJs>
        </div>
        </article>
  </section>;
}
