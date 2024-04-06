import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/img/Logo.png'
import icon1 from '../assets/img/Icon.png'
import icon2 from '../assets/img/Ic.png'
import icon3 from '../assets/img/Ico.png'

export default function Header() {
  return (
    <>
   
    <div className="bg-baseColor2">
    <div className="container mx-auto navbar flex-none hidden lg:block h-[160px]">
       <div className='grid grid-flow-col grid-cols-1 gap-10'>
       <div className='m-6'>
          <Link to='/'> <img src={logoImg} alt="LogoImg" /></Link>
        </div>

        <div className='flex '>
            <img src={icon1} alt="Time" />
            <p className='pl-4 '>Mon - Sat 9.00 - 18.00 <br/> Sunday Closed</p>
        </div>
        <div className='flex'>
            <img src={icon2} alt="Email" />
            <p className='pl-4 '>Email <br/> contact@logististics.com</p>
        </div>
        <div className='flex'>
            <img src={icon3} alt="Call" />
            <p className='pl-4 pr-3 '>Call Us <br/> (00) 112 365 489</p>
        </div>
        
        </div>
       </div>

    </div>


    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col  bg-baseColor">
    {/* Navbar */}
    <div className="container mx-auto navbar">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 text-3xl font-bold mx-2 text-white">Green Bangla</div>
      <div className="flex-none hidden lg:block text-white font-bold text-lg">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/catecory'>Category</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>

      </div>
    </div>
    {/* Page content here */}
    
  </div> 
  <div className="drawer-side z-10">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full  bg-baseColor">
      {/* Sidebar content here */}
      <li><Link to='/'>Home</Link></li>
          <li><Link to='/catecory'>Category</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
    </ul>
  
  </div>
</div>

</>
  )
}
