import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) => {
  return (
    <div className=' max-w-screen-2xl m-0'>
      <div sm:display-block >
      <div className=' flex justify-between item-center bg-[#26272b] shadow-2xl rounded-lg my-8 mx-7 py-7 px-4 font-bold'>
            <p>#</p>
            <p className='-ml-16'>Coin</p>
            <p>Price</p>
            <p className=''>Market cap</p>
            <p className=''>Volume</p>
        </div>

        {props.coins.map(coins=> {
            return (
                <CoinItem coins={coins} key={coins.id}/>
            )
        })}
      </div>

    </div>
  )
}

export default Coins
