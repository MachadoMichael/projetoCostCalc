import React from 'react'
import FoodBox from './Foodbox'

export default function PainelFood() {
  return (
    <div className='container'>
      <div className='ingredientes'>
        <select>
          <option>Burger</option>
          <option>Fries</option>
          <option>Pizza</option>
        </select>
      </div>
      <div id='boxes'>
        <FoodBox />
      </div>
    </div>

  )
}
