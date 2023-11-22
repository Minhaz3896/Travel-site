import React, {useState} from 'react'
import{data} from '../Data/data.js'



const Food = () => {  
    console.log(data); 
    const [foods, setFoods] = useState(data) 

    // Filter Food types
    const filterType =(catagory) => {
        setFoods(
            data.filter((item) => {
                return item.category === catagory;
            })
        )
    }

    // Filter Prices
    const filterprice =(price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

  return (
    
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-center text-4xl'>Our Menu</h1>
        {/* Filter */}
        <div className=' flex flex-col lg:flex-row justify-between'>
            {/* Type */}
            
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('indian')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Indian</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            
            {/* Price */}
            
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterprice("$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>$</button>
                    <button onClick={() => filterprice("$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterprice("$$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterprice("$$$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        

        {/* All Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map ((item,index) => (
                <div key={index} className='border shadow-lg hover:scale-95 duration-300'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-yellow-500 text-white p-1 rounded'>{item.price}</span>
                        </p>
                    </div>
                </div>
                
                

            )) }
        
        </div>
    </div>
  )
}

export default Food