import React from 'react'

function Navbar() {
  return (
    <nav className='bg-rose-500 py-4 mb-12'>
      <div className='max-w-xl mx-auto flex justify-center gap-1'>
        <img src="images/world.png" alt=""/>
        <h2 className='text-rose-50 font-semibold tracking-wide'>my travel journal</h2>
      </div>

    </nav>
  )
}

export default Navbar
