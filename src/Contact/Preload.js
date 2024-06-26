import React, { Component } from 'react'

export class Preload extends Component {
  render() {
    return (
      <div>
        {/* <!-- ***** Preloader Start ***** --> */}
  <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  {/* <!-- ***** Preloader End ***** --> */}
        
      </div>
    )
  }
}

export default Preload
