import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
function Navbar (){
  return(
     <div>
    <div id="navbardiv">
            <div id="divoflogo"><Link to="/"><img id="imgLogo" src="https://cdn-icons-png.flaticon.com/512/909/909314.png" alt="pic"></img></Link></div>
            <div className="object-nav"><Link className="linktopages" to={"/navbar"} > Homepage</Link></div>
            <div className="object-nav"><Link className="linktopages" to={"/navbar/info"} > My information</Link></div>
            <div className="object-nav"><Link className="linktopages" to={"/navbar/mytemplate"} > My templates</Link></div>       
        </div>
    <Outlet></Outlet>
    </div> 
  )
}
export default Navbar;