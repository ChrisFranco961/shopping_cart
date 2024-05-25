import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";


export function Store(info){
 
    let hello=useOutletContext()
    
    
    const url = "https://fakestoreapi.com/products/";
    const [data,setData]=useState([])

  const fetchInfo = () => {
    return fetch(url) 
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo()
  }, []);

    return <div id="cardcontainer"> 
         {data.map((each)=>{
        return <div
         key={each.id} id={each.id} className="card">
             <img className="cardimage" src={each.image} alt="" />
             <p>{each.title}</p>
             <p>{each.price}</p>
             <button id="add" onClick={()=>{
                hello[2][1](hello[2][0]+1)
                hello[0][1](hello[0][0]+each.price)
                hello[1][1]([...hello[1][0],each])
                console.log(hello[2][0])
                }
             }>Add to Cart</button>           
         </div>
     })}
   </div>
  
    
}