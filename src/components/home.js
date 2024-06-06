import React, { useEffect, useState } from 'react'
import './home.css'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";
import { Link } from 'react-router-dom'
import Homeproduct from './homeProduct'

const Home = ({addToCart}) => {
const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
const [newProduct, setNewProduct] = useState([])
const [topProduct, setTopProduct] = useState([])
const [featuredProduct, setFeaturedProduct] = useState([])
const filterProduct = filterType =>{
    const prodResult = Homeproduct.filter(
        (prod) =>(
             prod.type === filterType
        )
    )
    setTrendingProduct(prodResult)
} 
const allTrandingProducts = ()=>{
    setTrendingProduct(Homeproduct)
}

useEffect(() => 
  {
      productCategory()
  },[])

const productCategory = () =>{
    const newProdResult = Homeproduct.filter(
        (prod) =>(
             prod.type === 'new'
        )
    )
    
    setNewProduct(newProdResult)
    const topProdResult = Homeproduct.filter(
        (prod) =>(
             prod.type === 'top'
        )
    )
    
    setTopProduct(topProdResult)
    const featuredProdResult = Homeproduct.filter(
        (prod) =>(
             prod.type === 'featured'
        )
    )
    setFeaturedProduct(featuredProdResult)
}


  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first odder</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrandingProducts()}>
                    trending product
                  </h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filterProduct("new")}>New</h3>
                  <h3 onClick={() => filterProduct("featured")}>Featured</h3>
                  <h3 onClick={() => filterProduct("top")}>top selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((homeProd) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={homeProd.image} alt=""></img>
                            <div className="icon">
                              <div className="icon_box">
                                <AiFillEye />
                              </div>
                              <div className="icon_box">
                                <AiFillHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{homeProd.Name}</h3>
                            <p>${homeProd.price}</p>
                            <button onClick={() => addToCart(homeProd)} className="btn">Add to cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button>Show More</button>
              </div>
            </div>

            <div className="right_box">
              <div className="right_container">
                <div className="testimonial">
                  <div className="head">
                    <h3>our testmonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img src="image/T1.avif" alt="testmonial"></img>
                    </div>
                    <div className="info">
                      <h3>stephan robot</h3>
                      <h4>web designer</h4>
                      <p>
                        Duis faucibus enim vitae nunc molestie, nec facilisis
                        arcu pulvinar nullam mattisr nullam mattis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>newsletter</h3>
                  </div>
                  <div className="form">
                    <p>join our malling list</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    ></input>
                    <button>subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <BiLogoFacebook />
                      </div>
                      <div className="icon">
                        <BiLogoTwitter />
                      </div>
                      <div className="icon">
                        <BiLogoInstagram />
                      </div>
                      <div className="icon">
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src="image/Multi-Banner-1.avif" alt="banner"></img>
              </div>
              <div className="box">
                <img src="image/Multi-Banner-2.avif" alt="banner"></img>
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt=""></img>
                <img src="image/Multi-Banner-4.avif" alt=""></img>
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {
                newProduct.map(
                    (newProd) =>{
                        return(
                            <>
                            <div className='productbox'>
                              <div className='img-box'>
                                <img src={newProd.image} alt=''></img>
                              </div>
                              <div className='detail'>
                                <h3>{newProd.Name}</h3>
                                <p>$ {newProd.price}</p>
                                <div className='icon'>
                                  <button><AiFillEye /></button>
                                  <button><AiFillHeart /></button>
                                  <button onClick={() => addToCart(newProd)}><AiOutlineShoppingCart /></button>
                                </div>
                              </div>
                            </div>
                            </>
                        )
                    }
                )
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((featuredProd) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={featuredProd.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{featuredProd.Name}</h3>
                        <p>$ {featuredProd.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addToCart(featuredProd)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((topProd) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={topProd.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{topProd.Name}</h3>
                        <p>$ {topProd.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addToCart(topProd)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home