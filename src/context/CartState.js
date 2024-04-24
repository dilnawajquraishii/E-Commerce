import React, { useState } from 'react'
import CartContext from './CartContext'

const CartState = (props) => {

    const [Navsearch, setNavsearch] = useState("");

    const [cartItem, setcartItem] = useState([]);

    const addtoCart=(ans)=>{
        console.log(ans)
        setcartItem([...cartItem,ans])
        console.log(cartItem)
    }

    const removeFromCart=(ans)=>{
      console.log(ans)
      let filteredArr = cartItem.filter((ele)=>ele.id!==ans.id)
      console.log(cartItem)
      console.log(filteredArr)
      setcartItem(filteredArr)
    }

    const incrementQuantity=(ans)=>{
      console.log(ans)
      let updatedObj = {
        ...ans,
       quantity: ans.quantity + 1,
       price:ans.price +ans.price/ ans.quantity
      }
      console.log(updatedObj)

      let findIndex = cartItem.findIndex((ele)=>ele.id===ans.id)
      console.log(findIndex)
      let copyArr = [...cartItem]
      copyArr[findIndex] = updatedObj

      setcartItem(copyArr)

    }
    const decrementQuantity=()=>{

    }

  return (
    <CartContext.Provider value={{Navsearch,setNavsearch, cartItem,addtoCart,removeFromCart,incrementQuantity,decrementQuantity}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartState
