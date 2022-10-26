//import React,{useState , useEffect} from 'react';
import './MainView.css';
import Star from '../Logo/Star Logo.svg';

const MainView = ({productImage,productName,oldPrice,newPrice}) => {
    
  return (
    <>
    
<div className="Main-group">
    <div className="Sub-main">
    </div>
    
    <img className="Rectangle" src={productImage} alt="Product"  />
    
    <div className="Description">
        <p className="Product-name">{productName}</p>
        
        <section className='Star-ratings'><img src={Star} alt="ratings" />
        <img src={Star} alt="ratings" />
        <img src={Star} alt="ratings" />
        <img src={Star} alt="ratings" />
        <img src={Star} alt="ratings" /></section>
        <p className="Original-price">{oldPrice}/-</p>
        <p className="New-price">{newPrice}/-</p>

    </div>
    
        <button className='btn-primary'><p className="cart"> Add To Cart</p></button>


    

    </div>






              </>
  )
}

export default MainView