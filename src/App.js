import React from 'react'

function App() {
  return (
    <div className='min-h-screen bg-slate-950'>
     <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center'>
      <div className='text-2xl text-indigo-700 font-bold'>
        Bitcoin
      </div>
      <ul className='md:flex hidden font-semibold'>
        <li className=' mx-[10px] cursor-pointer'>Home</li>
        <li className=' mx-[10px] cursor-pointer'>Contact Us</li>
        <li className=' mx-[10px] cursor-pointer'>About</li>
      </ul>
      <div className='hidden md:block bg-indigo-700 text-white rounded font-bold cursor-pointer '>Login/SignUp</div>
      <div className='md:hidden'>
        <a className=' text-4xl' href='#'>&#8801;</a>
      </div>
     </nav>
     
    </div>
  )
}

export default App