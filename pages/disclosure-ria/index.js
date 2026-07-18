import Banner from '@/components/banner/banner'
import Footer from '@/components/common/footer/footer'
import Header from '@/components/common/header/header'
import Disclosurecard from '@/components/disclosure/disclosurecard'
import React from 'react'

function Disclosure() {
  return (
    <>
        <Header/>
        <Banner title={"Disclosure"} bannerClass={"disclosures_banner"}/>
        <div className='container'>
            <div className='py-[120px] '>
                <Disclosurecard  title={`Introduction`} description={`Welcome to the disclosure page of AKCJ-Ventures. This page outlines important information regarding our content, financial practices, and your rights as a user. We believe in transparency and want to ensure you understand the nature of the information we provide.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Disclosure of Information`} description={`The information provided on this website is for educational and informational purposes only. We strive to present accurate and up-to-date information; however, we cannot guarantee the completeness or accuracy of all content. Always do your own research before making financial decisions.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Affiliate Disclosure`} description={`Some of the links on our website are affiliate links, meaning we may earn a commission if you make a purchase through those links. This comes at no additional cost to you. We only promote products and services that we believe will add value to our users.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Investment Risk Disclosure`} description={`Investing involves risks, including the potential loss of principal. Past performance is not indicative of future results. We advise you to consider your financial situation carefully and consult with a qualified financial advisor before making any investment decisions.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`No Financial Advice Disclaimer`} description={`The content on AKCJ-Ventures is intended for informational purposes only and should not be considered financial advice. We are not financial advisors, and you should consult a professional for specific advice tailored to your financial situation.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Third-Party Links`} description={`Our website may contain links to third-party websites. We do not control these external sites and are not responsible for their content, accuracy, or practices. We encourage you to review their privacy policies and terms of service.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Personal Opinions`} description={`The views and opinions expressed on this website are solely those of the authors and do not necessarily reflect the views of any organizations we are affiliated with. We strive to provide content based on research and personal experience.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Changes to Disclosures`} description={`We reserve the right to update or modify these disclosures at any time. Any changes will be posted on this page, and we encourage you to review it periodically for updates.`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Contact Information`} description={`If you have any questions or concerns regarding this disclosure page or our practices, please feel free to contact us at info@akcjventures.com`} borderClass="border-b-[#c2c2c2] border-b-[0.5px]"/>
                <Disclosurecard  title={`Date of Last Update`}         description={
        <>
            Last updated on <span className="text_blue fw_500   ">01 January 2024</span>
        </>
    }   borderClass=""/>
                
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Disclosure