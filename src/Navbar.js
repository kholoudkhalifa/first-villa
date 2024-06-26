import React from 'react'
import { Link } from 'react-scroll';
import { useCart } from 'react-use-cart'

export default function Navbar() {
  const{totalItems}= useCart();
  return (
    <div>
          <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" className="logo">
                        <h1>Villa</h1>
                    </a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><a href="/">Home</a></li>
                      <li><a href="/propert">Properties</a></li>
                      <li><a href="/details">Property Details</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="/features">Features</a></li>
                      <li><a href="/product">Products</a></li>
                      <li><a href="/cart"><i class="fa-solid fa-cart-plus"></i> cart page ({totalItems})
                      </a></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
      
    </div>
  )
}
