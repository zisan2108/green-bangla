import React from 'react'
import clock from "../assets/img/Icon.png"
import email from "../assets/img/Ic.png"
import phone from "../assets/img/Ico.png"

export const Footer = () => {
  return (
    <div className='bg-[#091242] text-base-content'>
    <footer className="footer p-10 bg-[#091242] text-base-content">
  <aside>
    <span className='text-3xl '>GreenBangla <br />Courier Service</span>
    <p>Greeen Bangla Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title text-2xl">Pages</h6> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Team</a>
    <a className="link link-hover">Our Project</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Contact</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-2xl">Utility</h6> 
    <a className="link link-hover">Style Guide</a>
    <a className="link link-hover">Changelog</a>
    <a className="link link-hover">Licenses</a>
    <a className="link link-hover">Protected</a>
    <a className="link link-hover">Not Found</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-2xl">Subscribe</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn bg-[#FFB629] hover:bg-[#86682c] join-item text-black">Subscribe</button>
      </div>
    </fieldset>
  </nav>
  
</footer>

<hr />


{/* ------------------------Down Footer------------------------ */}

<div className='container mx-auto  grid grid-cols-1 sm:grid-cols-4 mt-3 gap-3'>
          <div className='text-white  text-[14px] m-4 '>
            <p >@2024 All Right Reserved</p>
          </div>
      
          <div className="text-white flex h-16 mr-2 sm:h-10 md:h-14 justify-start items-center">
          <img src={clock} alt="image"></img>
          <div className="ml-3 relative mt-2 sm:text-[12px]">
            <p>Sat-Thus:09-18</p>
            <p>Friday Closed</p>
          </div>
        </div>

        <div className="text-white flex h-16 mr-2 sm:h-10 md:h-14 justify-start items-center">   
          <img src={email} alt="image"></img>
          <div className="ml-1 relative mt-2 md:text-[12px]">
            <p>
              Email<br></br>greenbangla@gmail.com
            </p>
          </div>
        </div>

        <div className="text-white flex h-16 mr-2 sm:h-10  md:h-14 justify-start items-center">
          <img src={phone} alt="image"></img>
          <div className="ml-3 relative mt-2 sm:text-[12px]"> 
            <p>
              Call Us<br></br>01712345678
            </p>
          </div>
        </div>

       </div>

       <br></br>

</div>
  )
}
