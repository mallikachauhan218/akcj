import Banner from '@/components/banner/banner'
import Contactform from '@/components/common/contact/contactform'
import Footer from '@/components/common/footer/footer'
import Header from '@/components/common/header/header'
import Image from 'next/image'
import React from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Referafriend() {
  const [phone, setPhone] = React.useState("");

  const handleMobileNumber = (value) => {
    setPhone(value);
  }
  return (
    <>
        <Header/>
        <Banner title={"Refer a Friend"} bannerClass={"blog_banner"}/>
        <div className='container py-[60px]'>
            <div className='f56 fw_700 mb-[20px]'>
                Refer a Friend
            </div>

            <div className='f18'>
            Thank you for taking the time to refer a company/founder. Your recommendation adds value to our investment decision-making process. If you have any questions on whom/which company to recommend, please email us at info@akcjventures.com.
            </div>
            <div className='f18 mt-[20px]'>
            When you refer a founder/company, we are committed to assessing whether we can proceed with the investment and inform you of our decision.
            </div>

            <div className="row mx-0 flex items-center g-5">
            
        <div className="col-12 p-0">
        <div className="border-[1px] border-[#c2c2c2] py-[32px] my-[60px] px-[48px]">
            <Contactform />
        </div>
        </div>
    </div>
        </div>
        <Footer/>
    </>
  )
}

export default Referafriend