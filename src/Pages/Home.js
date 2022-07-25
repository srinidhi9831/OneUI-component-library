import './documentation.css';
import { useNavigate } from "react-router-dom";
export default function Home(){

    let navigate = useNavigate();

return(

    <body>

<div class="des-container">
    <h1>Build fast, responsive sites with oneUI</h1>
    <p>Quickly design and customize responsive mobile-first sites with oneUI, front-end open source toolkit, featuring extensive prebuilt components.</p>
    <div>
        <button class="bg-primary btn-bigger card-shadow" onClick={()=>navigate("/getstarted")}>get started</button>
        <button class="bg-link-gray btn-bigger" onClick={()=>navigate("/docs")}>Documentation</button>
    </div>

</div>

</body>


)

}