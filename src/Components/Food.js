import React from 'react'

const Food = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-center text-4xl'>Our Menu</h1>
        {/* Filter */}
        <div className=' flex flex-col lg:flex-row justify-between'>
            {/* Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Indian</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chinese</button>
                </div>
            </div>
            
            {/* Price */}
            
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        {/* All Foods */}

        <div>

        </div>
    </div>
  )
}

export default Food