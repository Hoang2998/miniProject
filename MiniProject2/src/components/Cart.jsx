import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cart = useSelector(pro => pro.productReducer.cart)
  return (
    <>
      {
       <table style={{width:"100%",textAlign:"center"}}>
          <thead>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {
              cart.map((item,index)=>{
                return <tr key={index}>
                  <td>{index+1}</td>
                  <td><img src={item.image} alt="" width={150} height={100}/></td>
                  <td>{item.productName}</td>
                  <td>{item.price} $</td>
                  <td>
                    {item.quantity}
                  </td>
                  <td> {item.quantity * item.price } $</td>
                  <td> <button>delete</button></td>
                </tr>
              })
            }
          </tbody>
       </table>
      }
    </> 
  )
}
