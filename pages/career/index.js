import Banner from '@/components/banner/banner'
import Careercard from '@/components/career/careercard'
import Footer from '@/components/common/footer/footer'
import Header from '@/components/common/header/header'
import Testimonialsection from '@/components/home/testimonialsection'
import Image from 'next/image'
import React from 'react'

function Career() {
  return (
    <>
        <div className="!overflow-x-hidden">
        <Header/>
        <Banner title={"Career"} bannerClass={"career_banner"}/>
        <div className='container'>
            <div className='py-[60px] '>

            <div className='row flex g-5 items-center'>
                <div className='col-lg-5 '>
                    <Image src={"/images/career1.png"} width={500} height={500} className="img-fluid w-100" alt="career" />
                </div>
                <div className='col-lg-7'>
                    <div className='red_label mb-[20px]'>
                    Team & Grow
                    </div>
                    <div className='f56 fw_700 mb-[20px]'>
                    Join Our Team &  Grow with 
                    <span className='text_red fw_700'> AKCJ-Capital</span>
                    </div>
                    <div className='f18 text_main'>
                    At AKCJ-Capital, we believe that our success is driven by the passion and dedication of our team. We&apos;re always looking for talented, driven individuals to join us and help shape the future. Whether you&apos;re just starting out or a seasoned professional, we offer exciting opportunities in a dynamic and inclusive work environment.
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='py-[60px] bg-[#F6F6F6] text_main'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='red_label mb-[20px]'>
                    Our Core Values
                    </div>
                    <div className='f56 fw_700 lg:mb-[48px] mb-[20px] text-center'>
                    Our <span className='text_red fw_700'>Guiding</span> Principles
                    </div>
                </div>

            <div className='container'>
                <div className='row flex g-lg-5 g-2'>
                    <div className='col-lg-3 col-md-6 lg:border-r-[#c2c2c2] lg:border-r-[0.5px] '>
                        <div className='flex flex-col items-center justify-center py-4'>
                            <div className='text_blue f24 fw_700 mb-3'>
                            Integrity 
                            </div>
                            <div className='f16 text-center mx-4'>
                            We believe in transparency, honesty, and trust in all our actions.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 lg:border-r-[#c2c2c2] lg:border-r-[0.5px] '>
                        <div className='flex flex-col items-center justify-center py-4'>
                            <div className='text_blue f24 fw_700 mb-3'>
                            Teamwork  
                            </div>
                            <div className='f16 text-center mx-4'>
                            Collaboration drives our success, fostering mutual support and shared goals.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 lg:border-r-[#c2c2c2] lg:border-r-[0.5px]'>
                        <div className='flex flex-col items-center justify-center py-4'>
                            <div className='text_blue f24 fw_700 mb-3'>
                            Excellence & Research  
                            </div>
                            <div className='f16 text-center mx-4'>
                            We strive to exceed expectations in everything we do.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6  '>
                        <div className='flex flex-col items-center justify-center py-4'>
                            <div className='text_blue f24 fw_700 mb-3'>
                            Innovation 
                            </div>
                            <div className='f16 text-center mx-5'>
                            We foster creativity and pursue new ideas with passion.
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>


            
        </div>
        <Testimonialsection/>

        <div className='container'>
            <div className='py-[60px]'>
                <div className='flex flex-col justify-center items-center'>

                    <div className='red_label  mb-[20px]'>
                    open roles
                    </div>
                    <div className='f56 mb-[48px] fw_700 text-center'>
                    Career <span className='text_red fw_700'>Opportunities</span>
                    </div>
                </div>
                <div className='row flex  g-4'>
                    <Careercard post={"Marketing"} designation={"Social Media Intern"} location={"New York, USA"} description={"Lorem ipsum dolor sit amet consectetur. Nisl natoque nullam vitae massa neque. Suspendisse id pellentesque nulla cursus justo sit. Posuere sapien sem mauris aliquet vitae eget. Urna turpis nunc id diam aliquam sit facilisi placerat. "}/>
                    <Careercard post={"Marketing"} designation={"Social Media Intern"} location={"New York, USA"} description={"Lorem ipsum dolor sit amet consectetur. Nisl natoque nullam vitae massa neque. Suspendisse id pellentesque nulla cursus justo sit. Posuere sapien sem mauris aliquet vitae eget. Urna turpis nunc id diam aliquam sit facilisi placerat. "}/>
                    <Careercard post={"Marketing"} designation={"Social Media Intern"} location={"New York, USA"} description={"Lorem ipsum dolor sit amet consectetur. Nisl natoque nullam vitae massa neque. Suspendisse id pellentesque nulla cursus justo sit. Posuere sapien sem mauris aliquet vitae eget. Urna turpis nunc id diam aliquam sit facilisi placerat. "}/>
                    <Careercard post={"Marketing"} designation={"Social Media Intern"} location={"New York, USA"} description={"Lorem ipsum dolor sit amet consectetur. Nisl natoque nullam vitae massa neque. Suspendisse id pellentesque nulla cursus justo sit. Posuere sapien sem mauris aliquet vitae eget. Urna turpis nunc id diam aliquam sit facilisi placerat. "}/>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    </>
  )
}

export default Career