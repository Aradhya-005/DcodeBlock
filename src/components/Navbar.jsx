import React from 'react'
import Logo from  "../assets/logodb-PhotoRoom 1.svg"

function Navbar() {
  return (
   <>
   <nav className='flex justify-between px-10 py-3 bg-[#000000E5] '>
    <div>
        <img src={Logo}/>
    </div>
    <div>
        <button>Signin</button>
    </div>
   </nav>
   
   </>
  )
}

export default Navbar