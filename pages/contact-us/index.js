import Banner from "@/components/banner/banner";
import Contactform from "@/components/common/contact/contactform";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Contactus() {
  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />
        <Banner title={"Contact Us"} bannerClass={"contact_banner"} />
        <div className="container">
          <div className="py-[60px]">
            <div
              className="f16 text_main border-1 border-[#000000] px-3 py-2 rounded-[100px] w-fit text-uppercase fw_500 mb-[20px]"
              data-aos="fade-right"
            >
              Contact Us
            </div>
            <div className="f56 fw_700 mb-[48px]" data-aos="fade-right">
              Happy to Answer all Your Questions
            </div>

            <Contactform />
          </div>
          <div className="pb-[60px]  border-b-[0.5px] border-b-[#c2c2c2]">
            <div className="row flex g-lg-5 g-2">
              <div className="col-lg-3 col-md-6 lg:border-r-[#c2c2c2] lg:border-r-[0.5px] ">
                <div className="flex flex-col items-center justify-center  ">
                  <Image
                    src={"/images/contact_icon1.svg"}
                    width={60}
                    height={60}
                    className="img-fluid mb-[42px]"
                    alt="phone"
                  />
                  <div className="text_main f20 fw_700 mb-3">Mail us 24/7</div>
                  <Link
                    href="mailto:pbminfouser@infotech.com"
                    className="f16 text_main cursor-pointer"
                  >
                    hello@akcjcapital.com
                  </Link>
                  {/* <Link
                  href="mailto:noreply@pbminfotech.com"
                  className="f16 text_main cursor-pointer"
                >
                   support@akcjcapital.com
                </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 lg:border-r-[#c2c2c2] lg:border-r-[0.5px] ">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={"/images/contact_icon2.svg"}
                    width={60}
                    height={60}
                    className="img-fluid mb-[42px]"
                    alt="phone"
                  />
                  <div className="text_main f20 fw_700 mb-3">Our Location</div>
                  <div className="f16 text_main text-center mx-md-3">
                    612, Kailash Building, 26, Kasturba Gandhi Marg, Connaught
                    Place, New Delhi, India -110001
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 lg:border-r-[#c2c2c2] lg:border-r-[0.5px]">
                <div className="flex flex-col items-center justify-center ">
                  <Image
                    src={"/images/contact_icon3.svg"}
                    width={60}
                    height={60}
                    className="img-fluid mb-[42px]"
                    alt="phone"
                  />
                  <div className="text_main f20 fw_700 mb-3 text-center">Reach out during business hours</div>
                  <Link
                    href="tel:+01 147-047-455"
                    className="f16 text_main cursor-pointer mb-2"
                  >
                    Landline : +01 147-047-455
                  </Link>
                  <Link
                    href="tel:+9123 895-4732-236"
                    className="f16 text_main cursor-pointer"
                  >
                    Mobile: +91 9818411774
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="flex flex-col items-center justify-center ">
                  <Image
                    src={"/images/contact_icon4.svg"}
                    width={60}
                    height={60}
                    className="img-fluid mb-[42px]"
                    alt="phone"
                  />
                  <div className="text_main f20 fw_700 mb-3">Working Days</div>
                  <div className="f16 text_main text-center mx-md-3">
                    Mon to Fri - 09:30am - 06:00pm
                  </div>
                  {/* <div className="f16 text_main text-center mx-md-4">
                  Saturday & Sunday - Closed
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.017357480091!2d77.21931051202976!3d28.629241875565057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3420353f79%3A0x5ef1d8497537217c!2sKailash%20Building!5e0!3m2!1sen!2sin!4v1731573290660!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contactus;
