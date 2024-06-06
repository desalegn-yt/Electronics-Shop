import React, { useState } from 'react'
import Nav from './components/Nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/rout'
import Footer from './components/footer'
import Homeproduct from './components/homeProduct'
const App = () => {
  const [cart, setCart] = useState([])
  const [shop, setShop] = useState(Homeproduct)
  const [search, setSearch] = useState('')
  const Filter = filterVal =>{
    const prodResult = Homeproduct.filter((prod) =>
    prod.cat === filterVal)
    setShop(prodResult)
  }
  const allCateFilter = () =>{
    setShop(Homeproduct)
  }
  
  const searchProduct = () =>{
    const searchLength = (search || []).length ===0
    if(searchLength){
      alert("Please search something!")
    }else{
    const prodResult = Homeproduct.filter((prod) => 
    prod.cat === search)
    setShop(prodResult)
    }
  }

  const addToCart = (prod) =>{
    const exist = cart.find((ceck) => {
      return ceck.id === prod.id
    })
    if(exist){
      alert('You have already added this product.')
    }else{
    setCart([...cart, {...prod, qty:1}])
  }
  }
  
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchProduct = {searchProduct}/>
    <Rout cart={cart} setCart={setCart} shop = {shop} Filter = {Filter} allCateFilter = {allCateFilter} addToCart = {addToCart}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App