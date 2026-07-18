import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Fixedcontactbutton() {
    const router = useRouter();
    
    // Check if the current path starts with '/dashboard'
    const isDashboardPage = router.pathname.startsWith('/dashboard');

    const redirectToContact = () => {
        router.push('/contact-us'); // Redirect to the contact page
    };

    return (
      <div 
        onClick={redirectToContact} 
        className='arrow_card'
        style={{
            position: 'fixed',
            top: '35%',
            right: '36px', // Position at the right edge
            transform: 'rotate(-90deg)', // Rotate the button -90 degrees counterclockwise
            cursor: 'pointer',
            padding: '8px 32px', // Set padding
            backgroundColor: '#A71E28',
            color: 'white',
            borderRadius: '5px',
            display: isDashboardPage ? 'none' : 'flex', // Hide on dashboard pages
            alignItems: 'center', // Vertically center the text
            justifyContent: 'center', // Horizontally center the text
            textAlign: 'center', // Center the text
            borderRadius: '24px 24px 0 0',
            zIndex: '5000',
            transformOrigin: 'top right', 
        }}
      >
        <div className='f16 fw_600 me-1 text-capitalize'>
        Get in touch
        </div>
        <div className='arrow_img'>
            <Image src='/images/search_arrow.svg' alt='Arrow' width={20} height={20} />
        </div>
      </div>
    );
}

export default Fixedcontactbutton;