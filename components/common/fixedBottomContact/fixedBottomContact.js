import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

function FixedBottomContact() {
    const router = useRouter();
    const [mobile, setMobile] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleMobileNumber = (value) => {
        setMobile(value);
    }
    
    // Check if the current path starts with '/dashboard'
    const isDashboardPage = router.pathname.startsWith('/dashboard');

    const redirectToContact = () => {
        router.push('/contact-us'); // Redirect to the contact page
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <div 
        onClick={redirectToContact} 
        className={`arrow_card ${isVisible ? 'slide-up' : ''}`}
        style={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            left: 0,
            cursor: 'pointer',
            padding: '10px 32px', 
            backgroundColor: '#1A2A5B',
            color: 'white',
            borderRadius: '0',
            display: isDashboardPage ? 'none' : 'flex', 
            zIndex: '5000',
            transition: 'transform 1s ease', // Add transition for smooth effect
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)', // Slide effect
        }}
      >
        <div className='container'>
            <div className='flex justify-center gap-4 items-center'>
                <div className='f20 text-white'>Book Your<br/> Appointment Now</div>

                <PhoneInput
                      country="in"
                      value={mobile}
                      onChange={handleMobileNumber}
                      inputProps={{
                        name: "number",
                        required: true,
                        autoFocus: true,
                      }}
                      inputClass="phonenumber_input border-0 rounded-0"
                      containerStyle={{
                        width: "400px",
                        backgroundColor: "white",
                      }}
                      inputStyle={{
                        width: "100%",
                        padding: "16px 45px",
                        borderRadius: "4px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                        borderRadius: "12px",
                        backgroundColor: "white",
                      }}
                      className="form-input"
                      enableSearch={true}
                      placeholder='Enter your mobile number'
                    />
                
                <button type='button' className='arrow_card flex items-center bg-[#A71E28] px-4 py-2 rounded-4'>
                    <div className='f16'>Book Appointment</div>
                    <div className='arrow_img'>
                        <Image src='/images/search_arrow.svg' alt='Arrow' width={20} height={20} className=''/>
                    </div>
                </button>
            </div>
        </div>
      </div>
    );
}

export default FixedBottomContact;