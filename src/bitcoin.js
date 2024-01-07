import React from 'react'

function Bitcoin() {
  return (
    <div className='min-h-screen bg-slate-50'>
        <div className='hidden md:block md:w-full h-[60px] bg-orange-400 text-white  font-semibold md:flex items-center justify-center '>
        Bitcoin.org needs your support!
        </div>
        <div className='flex flex-wrap md:justify-evenly px-4 py-2 mt-3 justify-between'>
            <div className='flex items-center text-4xl font-bold italic'>
                 <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png' className=' w-10 h-10'></img>
                 <span className='font-funky ml-2 opacity-65'>bitcoin</span>
            </div>
            <ul className='md:flex hidden '>
                <li className=' mx-[10px] cursor-pointer italic'>Intoduction</li>
                <l1 className=' mx-[10px] cursor-pointer italic'>Production</l1>
                <l1 className=' mx-[10px] cursor-pointer italic'>Comminity</l1>
                <l1 className=' mx-[10px] cursor-pointer italic'>Development</l1>
                <l1 className=' mx-[10px] cursor-pointer italic'>FAQ</l1>
            </ul>
            <div className='md:block hidden'>
                English
            </div>
            <div className='md:hidden'>
                <a className=' text-4xl' href='#'>&#8801;</a>
            </div>
           </div>
           <div className='w-full md:h-[200px]  flex flex-wrap items-center justify-center md:text-[50px] mt-[60px] p-7 text-[30px] '>
                <div className='text-center opacity-90'>
                    Bitcoin is an innovative payment <br />network and a new kind of money.
                </div>
           </div>

    </div>
  )
}

export default Bitcoin