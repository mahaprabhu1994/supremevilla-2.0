import React from 'react'
import "./Properties_Container.css"

function Properties_Container() {
  return (
    <div className='Property__container'>
      <div className='Property__image'>
        <img className='property__img' src='./images/interiors1.jpg' alt=''/>
        <div className='price'>₹ 35,00,000</div>
      </div>
      <div className='Property__Title'>
        <h5>House for Sale in Thudiyalur</h5>
      </div>
      <div className='property__discription'>
        <div className='land__area'>Land Area : <span>3 cents</span></div>
        <div className='built-up__area'> Built-up Area : <span>12oo sq.ft</span></div>
        <div className='facing'>Facing : <span>EAST</span></div>
        <div className='position'>
          Position : <span>Ready-to-move</span>
        </div>
      </div>
        
    </div>
  )
}

export default Properties_Container