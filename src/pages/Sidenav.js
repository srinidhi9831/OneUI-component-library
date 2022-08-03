import { useCart } from "../Context/cart-context";

export default function Sidenav(){

  const {setPage}=useCart()
    return(
        
        <aside class="aside-left">
        <nav class="aside-container aside-left-container">
      

        <SideNavGroup value="Getting Started" for="getting-started">
               <SideNavItems>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(1)}>Introduction</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(2)}>Color</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(3)}>Display</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(4)}>Headings</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(5)}>Alignment</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(6)}>Inline Text Elements</a></SideNavItem>
               </SideNavItems>
        </SideNavGroup>
        <SideNavGroup value="Layout" for="layout">
               <SideNavItems>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(7)}>Two Columns Grid</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(8)}>Two Rows Grid</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(9)}>Three Columns Grid</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(10)}>Three Rows Grid</a></SideNavItem>
               </SideNavItems>
        </SideNavGroup>
        <SideNavGroup value="Components" for="components">
               <SideNavItems>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(11)}>Danger Alert</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(12)}>Info Alert</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(13)}>Primary Alert</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(14)}>Secondary Alert</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(15)}>Success Alert</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(16)}>Same Avatars</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(17)}>Different Avatars</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(18)}>Badge on Icons</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(19)}>Badge on Avatars</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(20)}>Filled  Buttons</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(21)}>Outlined  Buttons</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(22)}>Link Button</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(23)}>Icon Button</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(24)}>Floating Button</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(25)}>Horizontal Card</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(26)}>Vertical Card</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(27)}>Text Overlay Card</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(28)}>Dismiss Card</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(29)}>Round Image</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(30)}>Square Image</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(31)}>Responsive Image</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(32)}>Text Area</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(33)}>Form Input</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(34)}>Error Form Input</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(35)}>Numbered List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(36)}>Reversed List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(37)}>Lower Roman List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(38)}>Lower Alpha List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(39)}>Disc List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(40)}>Circle List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(41)}>Square List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(42)}>Checkbox List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(43)}>Radio List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(44)}>Stacked List</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(45)}>Modal</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(46)}>Modal Demo</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(47)}>Navigation Desktop</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(48)}>Navigation Mobile</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(49)}>Filled Rating</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(50)}>Live Rating</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(51)}>Slider</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(52)}>Toast</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(53)}>Toast Demo</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(54)}>Stacked Toast</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(55)}>Left Tooltip</a></SideNavItem>
                  <SideNavItem><a href={"#0"} onClick={()=>setPage(56)}>Right Tooltip</a></SideNavItem>
               
                  
               </SideNavItems>
        </SideNavGroup>
          
        </nav>
      </aside>
      
    );
}
function SideNavItems(props){

  return(
<ul class="ml-2">{props.children}</ul>
  )

}
function SideNavItem(props){

  return(
  <li>{props.children}</li>
  )

}

function SideNavGroup(props){

  return(

    <>
     <input type="checkbox" name="left-nav" id={props.for}  />
          <label for={props.for || ""} class="mt-1">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="none"
                stroke="var(--COLOR-TEXT)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 14l6-6-6-6"
              />
            </svg>
           {props.value}
          </label>
          {props.children}

    </>
  );
}