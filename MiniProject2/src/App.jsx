import React from 'react'
import { Routes,Route } from 'react-router-dom'
import store from './store'
import Product from './components/Product'
import Cart from './components/Cart'
import Header from './components/Header'
export default function App() {
  return (
    <>
<Header></Header>
    <Routes>
     <Route path='/' element={<Product></Product>}></Route>
     <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    </>
  )
}
