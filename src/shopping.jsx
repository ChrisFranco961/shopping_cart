
import cart from "./assets/carticon.png"
import { Link } from "react-router-dom"
import home from "./assets/homeicon.png"
import { Outlet} from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export function Shopping(){
const [Price,setPrice]=useState(0)
const [Chosen,setChosen]=useState([])
const [Counter,setCounter]=useState(0)
function counter(){
    setTimeout(()=>{ if(document.getElementById('counter').innerHTML>0){
        document.getElementById('counter').className="countervisible"
    }else {
        document.getElementById('counter').className="counter"
    }
        
    })
   
}

    return <div id="shoppingcontainer">
    <div id="header">
          <Link to="store" id="homebutton"><img id="home" src={home} alt="" /></Link>        
        <p>Francis Online Market</p>
        <Link to="cart" id="cartbutton"><img  id="cart" src={cart} alt="" />
        <p id="counter">{Counter}
        {counter()}
        </p></Link>
        </div>
        <Outlet context={[[Price, setPrice],[Chosen,setChosen],[Counter,setCounter]]}  />
    </div>
}