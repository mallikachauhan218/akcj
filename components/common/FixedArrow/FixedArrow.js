import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

function FixedArrow({onClick}) {
    const router = useRouter();
    
    // Check if the current path starts with '/dashboard'
    const isDashboardPage = router.pathname.startsWith('/dashboard');

    return (
      <div 
        onClick={onClick} 
        className='arrow_card'
        style={{
            position: 'fixed',
            top: '60%',
            right: '30px', // Position at the right edge
            transform: 'rotate(-90deg)', // Rotate the button -90 degrees counterclockwise
            cursor: 'pointer',
            padding: '10px 32px', // Set padding
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
        <div className="arrow_img" style={{transform: 'rotate(90deg)'}} >
        <FaArrowRight  />
        </div>
        </div>
        
      </div>
    );
}

export default FixedArrow;