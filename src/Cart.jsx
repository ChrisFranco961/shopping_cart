import { useOutletContext } from "react-router-dom"



export function Cart(){
    let info=useOutletContext()
    let cost=info[0][0]
    let setcost=info[0][1]
    let array=info[1][0]
    let setarray=info[1][1]
    return <div id="cartcontain">
        {array.map((each,index,array)=>{
            return <div id="cartcard">
             <img id="cartimg" src={each.image} alt="" />
             <p id="carttitle">{each.title}</p>
             {console.log(each)}
             <p id="cartpriceeach">{each.price}$</p>
             <button onClick={()=>{
                info[2][1](info[2][0]-1)
                setarray(array.filter(item=>item !==each))
             }}>Remove</button>
           
            </div>
        })}
         <p id="total">Total Cost: {Math.round(cost*10)/10} $</p>
         <button id="checkout" onClick={()=>{
            setcost(0)
            setarray([])
            info[2][1](0)
    
         }}>Checkout</button>
    </div>
         

}