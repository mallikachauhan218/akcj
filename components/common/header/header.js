import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation';
function Header() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [Login, setLogin] = useState(false)

  const router = useRouter()

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const handleLogin = () => {
    if(Login == true){
      router.push('/')
      localStorage.setItem("LoginCheck" , false) 
      localStorage.setItem('ProductRedirect' , false)
      setTimeout(() => {
        window.location.reload(); 
      }, 1000);
    }else{
      router.push('/login')
    }
  }

  useEffect(() => {
    const getLogin = localStorage.getItem('LoginCheck');
   
    console.log(getLogin , "getLogin");
    
    setLogin(JSON.parse(getLogin))
  }, []);

  console.log(Login , 'Login');
  
  return (
    <>
      <div className='header1' >
        <div className='container'>
          <div className='flex flex-wrap gap-3 justify-between items-center'>

            <div className='flex gap-3 items-center'>
            
            {/* <Link href="https://www.instagram.com/akcjcapital/" target='_blank' className='text-white'><FaXTwitter  style={{fontSize:"20px"}}/></Link> */}
            <Link href="https://www.instagram.com/akcjcapital/" target='_blank' className='text-white'><FaInstagram  style={{fontSize:"20px"}} /></Link>
            <Link href="https://www.linkedin.com/company/104794069/admin/dashboard/" target='_blank' className='text-white'> <FaLinkedin  style={{fontSize:"20px"}}/></Link>
            <Link href="https://www.facebook.com/profile.php?id=61566185276487" target='_blank' className='text-white'><FaFacebook  style={{fontSize:"20px"}}/></Link>
           
            
            </div>

            <div className='flex gap-3 items-center'>
              <div className='flex items-center gap-3'>
                <Link href={Login == true ? '/dashboard' : '/signup'} className='bg-white text-[#A71E28] rounded-[32px] px-[16px] py-[8px] f16 font-semibold'>{Login == true ? "Dashboard" : "Subscribe"}</Link>
                <button className='rounded-[32px] px-[16px] py-[8px] f16  font-semibold text-white border-white border-[1.6px]' onClick={handleLogin}>{Login == true ? 'Log Out' : 'Login'}</button>
              </div>
              {/* <div style={{height:"30px",border:"0.5px solid white"}}></div>
              <button className="searchBtn" type='button' onClick={openSearchModal}><IoSearch style={{fontSize:"24px"}}/></button> */}
            </div>
          </div>
        </div>
      </div>
        <nav className="navbar navbar-expand-lg bg-[#1A2A5B] header2 py-0" >
          <div className="container">
            <Link className="navbar-brand" href="/"><Image src={"/images/logo.svg"} width={152} height={50} alt='logo' className='img-fluid' /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" navbar-collapse my-lg-0 my-4 " id="navbar2">
              <ul className="navbar-nav gap-4 ml-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex items-center ">
                  <div className="dropdown">
                    <button className=" dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      About Us
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/why-akcj">Why AKCJ Capital</Link></li>
                      {/* <li><Link className="dropdown-item" href="#">Why We Are</Link></li> */}
                      <li><Link className="dropdown-item" href="/story">Story</Link></li>
                      <li><Link className="dropdown-item" href="/team">Team</Link></li>
                    </ul>
                  </div>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text-[16px] text-white"  href="/who-we-are">Who We Are</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link text-[16px] text-white"  href="/product-and-services">Product & Services</Link>
                </li>
                {/* <li className="nav-item d-flex items-center ">
                  <div className="dropdown">
                    <button className=" dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product & Services
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="#">Action</Link></li>
                      <li><Link className="dropdown-item" href="#">Another action</Link></li>
                      <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                  </div>
                </li> */}

                {/* <li className="nav-item d-flex items-center ">
                  <div className="dropdown">
                    <button className=" dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Investment Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="#">Action</Link></li>
                      <li><Link className="dropdown-item" href="#">Another action</Link></li>
                      <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                  </div>
                </li> */}
              
              
                <li className="nav-item d-flex items-center ">
                  <div className="dropdown">
                    <button className=" dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/blogs">Blogs</Link></li>
                      <li><Link className="dropdown-item" href="/podcasts">Podcasts</Link></li>
                      <li><Link className="dropdown-item" href="/sample-report">Sample Report</Link></li>
                      <li><Link className="dropdown-item" href="/newsletter">Newsletter</Link></li>
                      <li><Link className="dropdown-item" href="/faq">FAQ</Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" href="/contact-us">Contact Us</Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
     
        {/* <Modal show={searchModalOpen} onHide={closeSearchModal} className="search-modal position-fixed top-0">
        <Modal.Body className="d-flex flex-column align-items-center ">
          <button className="close-button" onClick={closeSearchModal}>▲</button>
          <input type="text" placeholder="Search..." className="search-input" />
        </Modal.Body>
      </Modal> */}

      {/* <style jsx>{`
        .search-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          transition: transform 0.3s ease-in-out;
        }
        .search-input {
          margin-top: 20px;
          padding: 10px;
          width: 80%;
          border-radius: 5px;
          border: none;
        }
        .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
       */}
    </>
  )
}

export default Header