import Banner from '@/components/banner/banner'
import Blogcard from '@/components/blogs/blogcard'
import Footer from '@/components/common/footer/footer'
import Header from '@/components/common/header/header'
import React from 'react'

function Podcasts() {
  return (
    <>
        <div className="!overflow-x-hidden">
        <Header/>
        <Banner title={"Podcasts"} bannerClass={"podcast-banner"}/>

        <div className='container py-[60px]'>
            <div className='row mx-0'>
                <Blogcard src={"/images/blog_1.png"} id="1" title={`Gold Prices Touch New Heights: Decoding the Surge`} />
                <Blogcard src={"/images/blog_2.png"} id="2" title={`Hyundai India’s Mega IPO: Key things for investors to be aware of.`} />
                <Blogcard src={"/images/blog_3.png"} id="3" title={`Fed Rate Cuts and Trump’s Win: Indian Markets: What It Means`} />
            </div>
        </div>
        <Footer/>
        </div>
    </>
  )
}

export default Podcasts