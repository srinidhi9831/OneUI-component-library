
    import {TableColor,CompContainerTable} from "../Pagecomponents/Color";

//import {CompContainerTable,}
export default function Color(){


    return(
        
        <>
        <h1 class="mb-3">Color</h1>
        <p class="main-text">
          These are some color variable that are present in the
          <em>Posh UI</em>. You can use these in your custom <em>CSS</em> files.
          Use it like this,
        </p>

        <div class="component-container my-2">
          <pre class="pre-code intro-pre">
              <code class="language-css">
{`
.poshui-demo {
  color: var(--COLOR-AMBER-500);
  background: var(--COLOR-AMBER-200);
}


`}
              </code>
            </pre>
        </div>

        {/* <!-- Amber & Blue Color Starts --> */}

        <section class="my-2 section-component">
          <h2 class="my-2" id="amber-blue">Amber <em>&</em> Blue</h2>
                    
             <CompContainerTable>
                <TableColor 
                Heading={["Variable Name","Variable Value","Color"]}
                 body={
                    [[<span>--COLOR-AMBER-200</span>,<span>#fde68a</span>,<div class='color-view amber-200'></div>],
                 [<span>--COLOR-AMBER-400</span>,<span>#fbbf24</span>,<div class="color-view amber-500"></div>],
                 [<span>--COLOR-AMBER-500</span>,<span>#f59e0b</span>,<div class="color-view amber-500"></div>],
                 [<span>--COLOR-AMBER-600</span>,<span>#d97706</span>,<div class="color-view amber-600"></div>]]}></TableColor>

                 <TableColor Heading={["Variable Name","Variable Value","Color"]}
                 body={
                    [[<span>--COLOR-BLUE-50</span>,<span>#eff6ff</span>,<div class="color-view blue-50"></div>],
                 [<span>--COLOR-BLUE-300</span>,<span>#93c5fd</span>,<div class="color-view blue-300"></div>],
                 [<span>--COLOR-BLUE-500</span>,<span>#3b82f6</span>,<div class="color-view blue-500"></div>],
                 [<span>--COLOR-BLUE-800</span>,<span>#1e40af</span>,<div class="color-view blue-800"></div>]]}></TableColor>
             </CompContainerTable>
        </section>

        {/* <!-- Amber & Blue Color Ends -->

        <!-- Cyan & Red Color Starts --> */}

        <section class="my-2 section-component">
          <h2 class="my-2" id="cyan-red">Cyan <em>&</em> Red</h2>
              <CompContainerTable>
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-CYAN-50</span>,<span>#ecfeff</span>,<div class="color-view cyan-50"></div>],
                    [<span>--COLOR-CYAN-200</span>,<span>#a5f3fc</span>,<div class="color-view cyan-200"></div>],
                    [<span>--COLOR-CYAN-500</span>,<span>#06b6d4</span>,<div class="color-view cyan-500"></div>],
                    [<span>--COLOR-CYAN-600</span>,<span>#0891b2</span>,<div class="color-view cyan-600"></div>],
                ]}
                />
              
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-RED-50</span>,<span>#fadddd</span>,<div class="color-view red-50"></div>],
                    [<span>--COLOR-RED-200</span>,<span>#fecaca</span>,<div class="color-view red-200"></div>],
                     [<span>--COLOR-RED-500</span>,<span>#ef4444</span>,<div class="color-view red-500"></div>],
                    [<span>--COLOR-RED-600</span>,<span>#dc2626</span>,<div class="color-view red-600"></div>]
                ]}
                />
              </CompContainerTable>
           
        </section>

        {/* <!-- Cyan & Red Color Starts -->

        <!-- Glossy Blue & Lime Color Starts --> */}

        <section class="my-2 section-component">
          <h2 class="my-2" id="glossyblue-lime">Glossy Blue <em>&</em> Lime</h2>


          <CompContainerTable>
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-GLOSSY-BLUE-100</span>,<span>#cfdef9</span>,<div class="color-view glossy-blue-100"></div>],
                    [<span>--COLOR-GLOSSY-BLUE-500</span>,<span>#0d5be1</span>, <div class="color-view glossy-blue-500"></div>],
                     [<span>--COLOR-GLOSSY-BLUE-700</span>,<span>#0a49b4</span>,<div class="color-view glossy-blue-700"></div>] 
                ]}
                />
             
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-LIME-200</span>,<span>#d9f99d</span>,<div class="color-view lime-200"></div>],
                    [<span>--COLOR-LIME-500</span>,<span>#84cc16</span>,<div class="color-view lime-500"></div>],
                    [<span>--COLOR-LIME-600</span>,<span>#65a30d</span>,<div class="color-view lime-600"></div>]
                ]}
                />
              </CompContainerTable>
            
        </section>

        {/* <!-- Glossy Blue & Lime Color Starts -->

        <!-- Stone & Yellow Color Starts --> */}

        <section class="my-2 section-component">
          <h2 class="my-2" id="stone-yellow">Stone <em>&</em> Yellow</h2>


          <CompContainerTable>
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-STONE-50</span>,<span>#454444</span>,<div class="color-view stone-50"></div>],
                    [ <span>--COLOR-STONE</span>,<span>#333</span>,<div class="color-view stone"></div>]
                ]}
                />
              
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-YELLOW</span>,<span>#ffd814</span>,<div class="color-view yellow"></div>],
                    [<span>--COLOR-YELLOW-600</span>,<span>#f4cf13</span>,<div class="color-view yellow-600"></div>]
                ]}
                />
              </CompContainerTable>

        </section>

        {/* <!-- Stone & Yellow Color Starts -->

        <!-- Gray & Overlay Color Starts --> */}

        <section class="my-2 section-component">
          <h2 class="my-2" id="gray-overlay">Gray <em>&</em> Overlay</h2>




          <CompContainerTable>
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-GRAY-500</span>,<span>#6b7280</span>,<div class="color-view gray-500"></div>]
                ]}
                />
             
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-OVERLAY</span>,<span>rgba(51, 65, 85, 0.5)</span>,<div class="color-view overlay"></div>]
                ]}
                />
              </CompContainerTable>

        </section>

        {/* <!-- Gray & Overlay Color Starts -->

        <!-- Shadow Light & White Color Starts --> */}

        <section class="my-2 section-component">
          <h2 class="my-2" id="shadowlight-white">
            Shadow Light <em>&</em> White
          </h2>


          <CompContainerTable>
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-SHADOW-LIGHT</span>,<span>rgba(149, 157, 165, 0.2)</span>,<div class="color-view shadow-light"></div>]
                ]}
                />
              
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-WHITE</span>,<span>#fff</span>,<div class="color-view white"></div>]
                ]}
                />
              </CompContainerTable>            
           
        </section>

        {/* <!-- Shadow Light & White Color Starts -->

        <!-- Slate Starts --> */}

        <section class="my-2 section-component">
          <h2 class="my-2" id="slate">Slate</h2>


          <CompContainerTable>
                <TableColor  Heading={["Variable Name","Variable Value","Color"]}
                body={[
                    [<span>--COLOR-SLATE-50</span>,<span>#f8fafc</span>,<div class="color-view slate-50"></div>],
                    [<span>--COLOR-SLATE-300</span>,<span>#cbd5e1</span>,<div class="color-view slate-300"></div>],
                    [<span>--COLOR-SLATE-400</span>,<span>#94a3b8</span>,<div class="color-view slate-400"></div>],
                    [<span>--COLOR-SLATE-500</span>,<span>#64748b</span>,<div class="color-view slate-500"></div>],
                    [<span>--COLOR-SLATE-600</span>,<span>#475569</span>,<div class="color-view slate-600"></div>],
                    [<span>--COLOR-SLATE-700</span>,<span>#334155</span>,<div class="color-view slate-700"></div>]
                ]}
                />
              </CompContainerTable>
        </section>
      </>
    );
;}