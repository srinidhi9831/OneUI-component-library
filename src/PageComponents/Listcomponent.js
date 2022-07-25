import { List, ListItem, ListItemStacked, ListStacked } from "../components/Lists/Lists";
import { ListNormalReactSnippet, ListStackedReactSnippet } from "../Iframes";



export default function Listcomponent(){

    return(
        <div class="gap">
        
        <div>
                <h2 class="typo-32px font-semibold"id="lists">Lists</h2>
                <p class="typo-16px font-light">Lists are used to stack the items, list items can be nested by adding icons and content. </p>
              </div>
              <div>
                <h3 class="typo-24px font-regular">Normal list</h3>
                <div class="component-items-container card-shadow">
    
                    <List>
                        <ListItem>item 01</ListItem>
                        <ListItem>item 02</ListItem>
                        <ListItem>item 03</ListItem>
                        <ListItem>item 04</ListItem>
                        <ListItem>item 05</ListItem>
                    </List>
                </div>
                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/P9lCfwi0se5vaXZ1z6sj"style={{width: "589px", height: "279px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Listnormal"></iframe>
                </div>
                <div class="component-items-container">
            {ListNormalReactSnippet}
        </div>
              </div>


              <div>
                <h3 class="typo-24px font-regular">Stacked list</h3>
                <div class="component-items-container card-shadow">

                    <ListStacked>
                        <ListItemStacked>item 01</ListItemStacked>
                        <ListItemStacked>item 02</ListItemStacked>
                        <ListItemStacked>item 03</ListItemStacked>
                        <ListItemStacked>item 04</ListItemStacked>
                        <ListItemStacked>item 05</ListItemStacked>
                    </ListStacked>

                </div>


                <div class="component-items-container ">
                    <iframe src="https://carbon.now.sh/embed/pt9Sc8PyPY2uHwJpgzXz" style={{width: "546px", height: "279px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Liststacked"></iframe>
                </div>
                <div class="component-items-container">
            {ListStackedReactSnippet}
        </div>
              </div>
        
        </div>
    );
}