import {useNavigate} from "react-router-dom"

import cart from "./assets/cart.png"
import { useState } from "react"
export function Home(){
 const usenavigate=useNavigate()
 const[Cost,setCost]=useState(0)

 
    return <div id="homecontainer">

<p id="hometitle">Welcome to the home of affordable shopping</p>
        <img id="cartimage" src={cart} alt="shopping-cart" />
      <button onClick={(event)=>{
event.target.className="clicked"
onanimationend=()=>{event.target.className=""
    usenavigate("Shopping/store")
}
       
       }} type="button">Shop !</button>
    </div>
      
       
}