
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BadgeCount, BadgeIcon, Button, Cod, NavBreakPoint, NavBreakPointCont, NavBreakPointList, NavBreakPointListItem, NavigationContainer, NavigationContent, NavLogo, NavSearchBar, NavSection, SnippetHtml, SnippetJs } from '../Components/Components';
import { Data } from '../Components/Data';
import SearchBar from '../Components/SearchBar';
import logo from "../assets/pngs/logo-bg-stone.png"


export default function Navigation({set}){
  
const headStyledocs=()=>set("container docs m-auto p-2")
const headStylehome=()=>set("container m-auto p-2")
    return (
    <header class="header header-docs">
   
    <a class="link-brand mx-1" href="/">One UI</a>
    
    <nav class="align-i-ctr flex ml-auto">
      <ul>
      <li class="inline-block mx-1">
          <SearchBar placeholder={"search..."} data={Data}/>
        </li>
        <li class="inline-block mx-1 link">
        <a href="#0"><NavLink onClick={headStylehome} to="/">Home</NavLink></a>
        </li>
        <li class="inline-block mx-1 link">
        <NavLink onClick={headStyledocs} to="/docs">Docs</NavLink>
          
        </li>
        <li class="inline-block mx-1 ">
            <a href="#0" className='link'>GitHub</a>
        </li>
      </ul>

      <button class="btn-theme translate-y">
        <i class="far fa-moon"></i>
      </button>
    </nav>
  </header>);
}

export function NavigationComp({page}){
  return(
    <>
    <h1 class="mb-3">Navigation</h1>
        <p class="main-text">
          Navigation can be used to give the user facility to navigate between
          different pages.
        </p>

       

        {page===47 && NavigationDesktopComp() }
        {page===48 && NavigationMobileComp()}


</>
  );
}






export function NavigationDesktopComp(){
 
  const[style,setStyle]=useState("d-none modal-container")
  const show=()=>setStyle("modal-container")
  const Hide=()=>setStyle("d-none modal-container")

  return(
    <section class="my-2 section-component">
    <h2 class="my-2" id="nav">Navigation</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
            <div class="component-container">
            <div>
              <button
              onClick={show}
                id="desktop-one-demo-btn"
                class="btn btn-primary-solid btn-squared"
              >
                Desktop Variation One Demo
              </button>
              <div class={style} onClick={Hide}>
                 <NavigationContainer>
                     <NavigationContent>
                        <NavSection>
                            <NavLogo src={logo}/>
                             LOGO
                        </NavSection>
                        <NavSearchBar placeholder="search..."/>
                        <NavSection>
                             <Button className="navbar-btn-log translate-y">Log In</Button>
                             <BadgeIcon className="mx-2 text-white translate-y">
                             <i class="fas fa-heart"></i>
                                 <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                             <BadgeIcon className="mr-1 text-white translate-y">
                             <i class="fas fa-shopping-cart"></i>
                             <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                        </NavSection>
                     </NavigationContent>
                     <NavBreakPoint>
                        <NavSearchBar placeholder="search..."/>
                        <Button className="navbar-btn-log translate-y">Log In</Button>
                     </NavBreakPoint>
                 </NavigationContainer>
               </div>
              </div>
      <SnippetHtml>

{`<div class="navbar-container">
  <nav class="navbar-align px-2 py-1">
    <div class="navbar-align">
      <img loading="lazy" class="img-brand-logo" src="..." alt="..." />

      <a
        class="brand-name"
        href="https://inclusive-mart.netlify.app"
        target="_blank"
      >
        <span>Inclusive</span>
        <span class="mart-text">Mart</span>
      </a>
    </div>

    <form class="navbar-form">
      <input type="text" placeholder="search for product" />
      <button type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <div class="navbar-align">
      <button class="navbar-btn-log translate-y">Log In</button>

      <a href="#" class="badge-btn mx-2 text-white translate-y">
        <i class="fas fa-heart"></i>
        <span class="badge-count bg-red-500">0</span>
      </a>

      <a href="#" class="badge-btn mr-1 text-white translate-y">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge-count bg-red-500">0</span>
      </a>
    </div>
  </nav>

  <div class="navbar-md-container">
    <form class="navbar-form">
      <input type="text" placeholder="search for product" />
      <button type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
    <button class="navbar-btn-log translate-y">Log In</button>
  </div>
</div>


`}
      </SnippetHtml>
      </div>
    </article>
    <article class="my-2">
            <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"><Cod>{`<NavigationContainer>`}</Cod> is the container for the component.
            <Cod>{`<NavigationContent>`}</Cod> is for Content without breakpoint and <Cod>{`<NavBreakPoint>`}</Cod>
            is for the breakpoint like mobile view.</p>
            <div class="component-container">


              <SnippetJs>
{`<NavigationContainer>
                     <NavigationContent>
                        <NavSection>
                            <NavLogo src={logo}/>
                             LOGO
                        </NavSection>
                        <NavSearchBar placeholder="search..."/>
                        <NavSection>
                             <Button className="navbar-btn-log translate-y">Log In</Button>
                             <BadgeIcon className="mx-2 text-white translate-y">
                             <i class="fas fa-heart"></i>
                                 <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                             <BadgeIcon className="mr-1 text-white translate-y">
                             <i class="fas fa-shopping-cart"></i>
                             <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                        </NavSection>
                     </NavigationContent>
                     <NavBreakPoint>
                        <NavSearchBar placeholder="search..."/>
                        <Button className="navbar-btn-log translate-y">Log In</Button>
                     </NavBreakPoint>
                 </NavigationContainer>
                 
                 
                 `}
              </SnippetJs>
            </div>
    </article>
    </section>
  );
}

export function NavigationMobileComp(){
  const[style,setStyle]=useState("d-none modal-container")
  const show=()=>setStyle("modal-container")
  const Hide=()=>setStyle("d-none modal-container")
  return(
    <section class="my-2 section-component">
    <h2 class="my-2" id="nav">Navigation</h2>


    <article class="my-2">
            <h3>html</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
            <div class="component-container">


         <div>
              <button
               onClick={show}
                id="mobile-one-demo-btn"
                class="btn btn-primary-solid btn-squared"
              >
                Mobile Variation One Demo
              </button>

              
              <div id="mobile-one-container" class={style} onClick={Hide}>
              <NavigationContainer>
                  <NavigationContent>
                     <NavSection>
                         <NavLogo src={logo}/>
                             LOGO
                     </NavSection>
                     <NavSearchBar placeholder="search..."/>
                     <NavSection className="navbar-sm">
                       <Button className="navbar-btn-log translate-y">Log In</Button>
                             <BadgeIcon className="mx-2 text-white translate-y">
                             <i class="fas fa-heart"></i>
                                 <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                             <BadgeIcon className="mr-1 text-white translate-y">
                             <i class="fas fa-shopping-cart"></i>
                             <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                     </NavSection>
                     <NavBreakPointCont>
                          <Button className="btn-sm-navbar translate-y">
                            <i class="fas fa-bars"></i>
                            <i class="fas fa-times d-none"></i>
                           </Button>
                          <NavBreakPointList>
                            <NavBreakPointListItem>
                            <i class="fas fa-heart mx-0p5"></i> Wishlist
                            </NavBreakPointListItem>
                            <NavBreakPointListItem>
                            <i class="fas fa-shopping-cart mx-0p5"></i> Cart
                            </NavBreakPointListItem>
                            <NavBreakPointListItem>
                            <i class="fas fa-door-open mx-0p5"></i> Log In
                            </NavBreakPointListItem>
                          </NavBreakPointList>
                     </NavBreakPointCont>
                  </NavigationContent>
                  <NavBreakPoint className="navbar-sm">
                    <NavSearchBar placeholder="search..."/>
                    <Button className="navbar-btn-log translate-y">Log In</Button>
                  </NavBreakPoint>
              </NavigationContainer>
              </div>
            </div>
      <SnippetHtml>

{`<div class="navbar-container">
  <nav class="navbar-align px-2 py-1">
    <div class="navbar-align">
      <img loading="lazy" class="img-brand-logo" src="..." alt="..." />

      <a
        class="brand-name"
        href="https://inclusive-mart.netlify.app"
        target="_blank"
      >
        <span>Inclusive</span>
        <span class="mart-text">Mart</span>
      </a>
    </div>

    <form class="navbar-form">
      <input type="text" placeholder="search for product" />
      <button type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <div class="navbar-align navbar-sm">
      <button class="navbar-btn-log translate-y">Log In</button>

      <a href="#" class="badge-btn mx-2 text-white translate-y">
        <i class="fas fa-heart"></i>
        <span class="badge-count bg-red-500">0</span>
      </a>

      <a href="#" class="badge-btn mr-1 text-white translate-y">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge-count bg-red-500">0</span>
      </a>
    </div>

    <div class="navbar-sm-container relative">
      <button class="btn-sm-navbar translate-y">
        <i class="fas fa-bars"></i>
        <i class="fas fa-times d-none"></i>
      </button>

      <ul class="d-none navbar-sm-list">
        <li class="my-1">
          <a class="translate-y" href="#">
            <i class="fas fa-heart mx-0p5"></i> Wishlist
          </a>
        </li>
        <li class="my-1">
          <a class="translate-y" href="#">
            <i class="fas fa-shopping-cart mx-0p5"></i> Cart
          </a>
        </li>
        <li class="my-1">
          <a class="translate-y" href="#">
            <i class="fas fa-door-open mx-0p5"></i> Log In
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="navbar-md-container navbar-sm">
    <form class="navbar-form">
      <input type="text" placeholder="search for product" />
      <button type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
    <button class="navbar-btn-log translate-y">Log In</button>
  </div>
</div>


`}
      </SnippetHtml>
      </div>
    </article>
    <article class="my-2">
    <h3>React</h3>
            <p class="my-2 section-text">The below code snippit shows the component usage in React.</p>
            <p class="my-2 section-text"><Cod>{`<NavigationContainer>`}</Cod> is the container for the component.
            <Cod>{`NavigationContent`}</Cod> is for Content without breakpoint,<Cod>{`<NavBreakPointCont>`}</Cod> is for first breakpoint and <Cod>{`NavBreakPoint`}</Cod>
            is for the next breakpoint like mobile view.</p>
            <div class="component-container">
              <SnippetJs>
{`<NavigationContainer>
                  <NavigationContent>
                     <NavSection>
                         <NavLogo src={logo}/>
                             LOGO
                     </NavSection>
                     <NavSearchBar placeholder="search..."/>
                     <NavSection className="navbar-sm">
                       <Button className="navbar-btn-log translate-y">Log In</Button>
                             <BadgeIcon className="mx-2 text-white translate-y">
                             <i class="fas fa-heart"></i>
                                 <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                             <BadgeIcon className="mr-1 text-white translate-y">
                             <i class="fas fa-shopping-cart"></i>
                             <BadgeCount className="bg-red-500">0</BadgeCount>
                             </BadgeIcon>
                     </NavSection>
                     <NavBreakPointCont>
                          <Button className="btn-sm-navbar translate-y">
                            <i class="fas fa-bars"></i>
                            <i class="fas fa-times d-none"></i>
                           </Button>
                          <NavBreakPointList>
                            <NavBreakPointListItem>
                            <i class="fas fa-heart mx-0p5"></i> Wishlist
                            </NavBreakPointListItem>
                            <NavBreakPointListItem>
                            <i class="fas fa-shopping-cart mx-0p5"></i> Cart
                            </NavBreakPointListItem>
                            <NavBreakPointListItem>
                            <i class="fas fa-door-open mx-0p5"></i> Log In
                            </NavBreakPointListItem>
                          </NavBreakPointList>
                     </NavBreakPointCont>
                  </NavigationContent>
                  <NavBreakPoint className="navbar-sm">
                    <NavSearchBar placeholder="search..."/>
                    <Button className="navbar-btn-log translate-y">Log In</Button>
                  </NavBreakPoint>
              </NavigationContainer>
              
              
              `}
              </SnippetJs>
            </div>
    </article>
    </section>
  );
}















// export function NavigationDesktopComp(){

//   return(
//     <section class="my-2 section-component">
//     <h2 class="my-2" id="nav">Navigation</h2>


//     <article class="my-2">
//             <h3>html</h3>
//             <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
//             <div class="component-container">
//       <div>
     
//       </div>
//       <SnippetHtml>

// {``}
//       </SnippetHtml>
//       </div>
//     </article>
//     <article class="my-2">
//             <h3>html</h3>
//             <p class="my-2 section-text">The below code snippit shows the component usage in Html.</p>
//             <div class="component-container">
//               <SnippetJs>
// {``}
//               </SnippetJs>
//             </div>
//     </article>
//     </section>
//   );
// }