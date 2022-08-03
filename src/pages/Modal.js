import { useState } from "react";
import { Button, Cod, Modal, ModalBody, ModalFooter, ModalHeader, SnippetJs } from "../Components/Components";

export default function ModalComponent({page}){

    return(

<>
        <h1 class="mb-3">Modal</h1>
        <p class="main-text">
          Modal can be used for creating dialog boxes, to communicate with user.
        </p>

        {/* <!-- Modal Component Starts --> */}

        {page===45 && ModalComp()}

        {/* <!-- Modal Component Ends -->

        <!-- Modal Demo Starts --> */}

        {page===46 && ModalDemoComp()}

        {/* <!-- Modal Demo Ends --> */}
      </>
    );

}

export function ModalComp() {
  return <section class="my-2 section-component">
    <h2 class="my-2" id="modal-component">Modal Component</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <Modal>
          <ModalHeader>Modal Head</ModalHeader>
          <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
             <Button className="btn-primary-outline">Close</Button>
             <Button className="btn-primary-solid">Save Changes</Button>
          </ModalFooter>
        </Modal>
   
      </div>

      <pre class="pre-code">
        <code class="language-html">
{`<div class="modal">
  <div class="modal-head">Modal Head</div>

  <p class="modal-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>

  <div class="modal-foot">
    <button class="btn btn-primary-outline">Close</button>
    <button class="btn btn-primary-solid">Save Changes</button>
  </div>
</div>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"> <Cod> {`<Modal>`}</Cod> is the container for the component
            and users can add customized component inside it and <Cod> {`<ModalHeader>`}</Cod> 
            for the header , <Cod> {`<ModalBody>`}</Cod> is the content for modal , <Cod> {`<ModalFooter>`}</Cod> 
            is the footer container for modal.</p>
            <div class="component-container">

              <SnippetJs>
{`<Modal>
          <ModalHeader>Modal Head</ModalHeader>
          <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
             <Button className="btn-primary-outline">Close</Button>
             <Button className="btn-primary-solid">Save Changes</Button>
          </ModalFooter>
        </Modal>
        
        
        `} 
              </SnippetJs>
        </div>
        </article>
  </section>;
}

export function ModalDemoComp() {

  const [style,setstyle]=useState("d-none modal-container")
  const showModal=()=> setstyle("modal-container")
  const hideModal=()=> setstyle("d-none modal-container")
  return <section class="my-2 section-component">
    <h2 class="my-2" id="modal-demo">Modal Demo</h2>

    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
    <div class="component-container">
      <div>
        <button onClick={showModal}
          id="modal-demo-btn"
          class="btn btn-primary-solid btn-squared"
        >
          Modal Demo
        </button>

        <div id="modal-container" class={style} onClick={hideModal}>
        <Modal className="mx-auto">
          <ModalHeader>Modal Head</ModalHeader>
          <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
             <Button onClick={hideModal} className="btn-primary-outline">Close</Button>
             <Button className="btn-primary-solid">Save Changes</Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>

      <pre class="pre-code">
        <code class="language-html">
          {`<button
  id="modal-demo-btn"
  class="btn btn-primary-solid btn-squared"
>
  Modal Demo
</button>

<div id="modal-container" class="d-none modal-container">
  <div class="mx-auto modal">
    <div class="modal-head">Modal Head</div>

    <p class="modal-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <div class="modal-foot">
      <button
        id="modal-close-btn"
        class="btn btn-primary-outline"
      >
        Close
      </button>
      <button class="btn btn-primary-solid">Save Changes</button>
    </div>
  </div>
</div>


`}
        </code>
      </pre>
    </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the modal Demo in React.</p>
            <div class="component-container">

              <SnippetJs>
{` const [style,setstyle]=useState("d-none modal-container")
   const showModal=()=> setstyle("modal-container")
   const hideModal=()=> setstyle("d-none modal-container")

   <button onClick={showModal}
          id="modal-demo-btn"
          class="btn btn-primary-solid btn-squared"
        >
          Modal Demo
        </button>

        <div id="modal-container" class={style} onClick={hideModal}>
        <Modal className="mx-auto">
          <ModalHeader>Modal Head</ModalHeader>
          <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
             <Button onClick={hideModal} className="btn-primary-outline">Close</Button>
             <Button className="btn-primary-solid">Save Changes</Button>
          </ModalFooter>
        </Modal>
        </div>
        
        
        `} 
              </SnippetJs>
        </div>
        </article>
  </section>;
}
