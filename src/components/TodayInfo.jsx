import React from 'react'

const TodayInfo = () => {
  return (
    <div className=''>
      <h2 className='text-2xl font-bold p-7'> OverView</h2>
      <span className='text-secondary text-h5 bg-opacity-10 p-7 rounded mr-20'>
        {new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }) }
      </span>
    </div>
  )
}

export default TodayInfo
