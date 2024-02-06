import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='flex justify-between item-center bg-[#26272b] shadow-lg rounded-lg my-8 mx-7 py-7 px-4 transition-transform transform hover:scale-105 hover:transition-transform duration-300 cursor-pointer '>
    <p>{props.coins.market_cap_rank}</p>
      <div className='flex items-center'>
        <img src={props.coins.image} alt='' class="h-10 mr-2 w-auto" />
        <p>{props.coins.name}</p>
      </div>
      <p>{'$'+props.coins.current_price.toLocaleString()}</p>
      <p className='hide-mobile md:block'>${props.coins.market_cap.toLocaleString()}</p>
      <p className='hide-mobile md:block'>${props.coins.total_volume.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem
