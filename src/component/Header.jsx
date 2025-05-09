import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className='shadow-md py-2 px-6'> 
            <div className='flex items-center justify-between w-full '>
                <div className='flex-1'>
                    <Link to={'/'} className='text-2xl font-bold text-gray-700 hover:text-blue-500'>Lates
                       
                    </Link>
                </div>

                <div className='flex justify-center  flex-1'>
                    <Link to={'/cate'} className='text-2xl font-bold text-gray-700 hover:text-blue-500'>Cate</Link>
                </div>

              
            </div>
        </header>
    </>
  )
}

export default Header