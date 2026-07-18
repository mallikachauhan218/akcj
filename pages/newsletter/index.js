import Banner from '@/components/banner/banner'
import Footer from '@/components/common/footer/footer'
import Header from '@/components/common/header/header'
import React from 'react'

function Newsletter() {
  return (
    <>
        <div className="!overflow-x-hidden">
        <Header/>
        <Banner title={"Newsletter"} bannerClass={"newslatter-banner"}/>
        <Footer/>
        </div>
    </>
  )
}

export default Newsletter