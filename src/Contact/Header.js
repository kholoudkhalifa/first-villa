import React from 'react'
import Navbar from '../Navbar';

export default function Header() {
  return (
    <div>
         {/* <!-- ***** Header Area Start ***** --> */}
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Navbar/>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}
      
    </div>
  )
}
