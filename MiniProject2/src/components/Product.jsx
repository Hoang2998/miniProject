import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './Product.scss'
import { addCart } from '../store'
export default function Product() {
  const [quantity,setQuantity] = useState(1)
  const products = useSelector(pro => pro.productReducer.products)
  const cart = useSelector(pro => pro.productReducer.cart)
  const dispatch = useDispatch()
  const addToCart = (id) => {
    dispatch(addCart(id))
    
  }
  return (
    <>
      {
        products.map((item,index)=>{
          return <div key={item.id} style={{display:"grid",gridTemplateColumns:"auto auto auto",margin:"1rem",border:"1px solid black",padding:"1rem"}}>
            <div><img src={item.image} alt="" width={200} height={150}/></div>
            <div style={{padding:"0 1rem"}}>
            <h1>{item.productName}</h1>
            <p>{item.title}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <input type="number" placeholder='' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
              <button className='hoverbtn' onClick={()=>{return addToCart(item.productId)}}>{item.price} USD</button>
            </div>
          </div>
        })
      }
    </>
  )
}
