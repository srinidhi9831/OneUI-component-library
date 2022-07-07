import { ImageResponsive, ImageRound } from '../components/Image/Image';
import waterImage from '../Image/water.jpg';

export default function Imagecomponent(){


    return(
        <div class="gap">
        <div>
                <h2 class="typo-32px font-semibold"id="image">Images</h2>
                <p class="typo-16px font-light">Images are made responsive and images can be round, round images takes the size of the container.</p>
              </div>

              <div>
                <h3 class="typo-24px font-regular">Responsive images </h3>
                <div class="component-items-container card-shadow">
                    <ImageResponsive image={waterImage} />
                    
                 </div>
                 <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/edIF6etVdqlPyWSVzAu7" style={{width: "462px", height: "205px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Imageresponsive"></iframe>
                 </div>     
              </div>    

              <div>
                <h3 class="typo-24px font-regular">Round images</h3>
                <div class="component-items-container card-shadow">
                    {/* <div class="img-round-container" style="height: 250px;width: 250px;">
                        <img  src="../image-resourse/image01.png">
                    </div> */}
                    <ImageRound image={waterImage} height="250px" width="250px" />
                    {/* <div class="img-round-container" style="height: 200px;width: 200px;">
                        <img  src="../image-resourse/image01.png">
                    </div>
                    <div class="img-round-container" style="height: 150px;width: 150px;">
                        <img  src="../image-resourse/image01.png">
                    </div> */}
                    <ImageRound image={waterImage} height="200px" width="200px" />
                    <ImageRound image={waterImage} height="150px" width="150px" />
                </div>
                <div class="component-items-container">
                    <iframe src="https://carbon.now.sh/embed/4IAny0rMkHvuMTSPC5uK"style={{width:"428px", height: "242px", border:0, transform: "scale(1)", overflow:"hidden"}} sandbox="allow-scripts allow-same-origin" title="Imageround"></iframe>
                </div>
             </div>
        </div>
    );
}