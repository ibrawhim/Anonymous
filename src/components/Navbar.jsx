import React from 'react'

const Navbar = () => {
  return (
    <>
        <div>
            <nav className='bg-black py-2 text-white px-10'>
                <ul className='flex justify-between'>
                    <li>ANONYMOUS APP</li>
                    <li>Terms & Conditions</li>
                    <li>FAQs</li>
                    <li>Sign in</li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar