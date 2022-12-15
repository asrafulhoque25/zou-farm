import React from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <div className='header'>
          <div className="container">
            <div className="header-wrapper">
                 <div className="header-left">
                      <div className='brand'>
                          <a href="/" className='brand-img' >
                              <img src={logo} alt="" />
                          </a>
                      </div>
                      <div className='nav-link'>
                          <a href="/" className='nav-item fs-16 text-black' >Home</a>
                          <a href="/Product" className='nav-item fs-16 text-black' >Product</a>
                          <a href="/Team" className='nav-item fs-16 text-black' >Team</a>
                          <a href="/Blog" className='nav-item fs-16 text-black' >Blog</a>
                          <a href="/Contact" className='nav-item fs-16 text-black' >Contact</a>
                      </div>
                 </div>
                  <div className='header-right'>
                        <a href="/sign-up" className='sign-up fs-16 d-flex align-items-center justify-content-center'>
                          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 17C16 13.8031 13.7953 11.0886 10.716 10.0615C12.1887 9.18523 13.1667 7.66092 13.1667 5.92308C13.1667 3.20431 10.7787 1 7.83333 1C4.888 1 2.5 3.20431 2.5 5.92308C2.5 7.70892 3.534 9.26892 5.076 10.1311C2.106 11.2098 0 13.8751 0 17" stroke="#F1F8E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <span>Sign Up</span>
                        </a>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Header