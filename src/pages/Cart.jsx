import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
  let ctx = useContext(CartContext)
  console.log(ctx.cartItem)
  console.log(ctx)

  const handleDelete=(ans)=>{
      console.log(ans)
      ctx.removeFromCart(ans)
  }

  let arr = [5,20,6,10]

  if(arr.includes(20)){
    console.log("yes")
  }else{
    console.log('no')
  }

  function xyz(ans){
    console.log(ans)
  }

  xyz(9)
  xyz('1bc')
  xyz('abcd')
  return (
    <div>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {ctx.cartItem.map((ele,i)=>{
    return   <tr key={ele.id}>
    <th scope="row">{i+1}</th>
    <td><img style={{height:"100px",width:"100px"}} src={ele.thumbnail} alt="" /></td>
    <td>{ele.title}</td>
    <td>{ele.price}</td>
    <td><button onClick={()=>{ctx.incrementQuantity(ele)}} className='btn btn-success'>+</button> {ele.quantity} <button className='btn btn-success'>-</button></td>
    <td><button onClick={()=>{handleDelete(ele)}} className='btn btn-danger'>Delete item</button></td>
  </tr>
  })}
  
  </tbody>
</table>

    </div>
  )
}

export default Cart
