import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer1">
        <div className="py-[48px] container">
          <div className="row flex items-center">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="flex  flex-col">
                <div className="heading text-white">Discover the Power of</div>
                <div className="heading text-white mb-2">
                  Strategic Investing
                </div>
                <div className="f18 text-white">
                  Access essential performance data and see how your investments
                  are growing. Get detailed reports to guide your financial
                  strategy.
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-3">
              <div className="contact_btn  d-flex items-center justify-center arrow_card cursor-pointer">
                  <div className="fw_600">Contact Now</div>
                  <div className="arrow_img">
                    <Image
                      src="/images/contact_arrow.svg"
                      height={20}
                      width={20}
                      alt="arrow"
                      className="img-fluid ml-1"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container-fluid  bg-[#1A2A5B] text-white py-[48px]">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-5">
              <div className="f32 fw_700">Subscribe to our newsletter!</div>
              <div className="f32 fw_700">Stay always in touch!</div>
            </div>

            <div className="col-lg-7">
              <div className="flex items-center position-relative arrow_card">
                <input
                  type="email"
                  placeholder="Enter your email "
                  className="bg-transparent text-white serch_input py-[20px] f18  w-100"
                  style={{ borderBottom: "0.5px solid white" }}
                />
                <div className="serach_icon arrow_img">
                  <Image
                    src={"/images/search_arrow.svg"}
                    height={24}
                    width={24}
                    alt="arrow"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      <div className="footer2">
          <div className="container">
          <div className="row flex gap-lg-0 gap-3 mb-[64px]">
            <div className="col-lg-3">
              {/* <Image
                src={"/images/footer_logo.svg"}
                height={76}
                width={152}
                alt="logo"
                className="img-fluid"
              /> */}
              <div className="text_main f18 mb-4">
              We aim to be, for serious investors, the equity research backend with data backed actionable ideas as the key differentiator. Let financial education make us grow together.

              </div>
              <div className="f20 fw_700">
                AKCJ Capital Private Limited
              </div>
              <div className="f16 fw_400 mb-2">
                    Corporate Identification Number (LLP) : &nbsp;&nbsp;AAX-1234{" "}
                  </div>
                  <div className="f16 fw_400 mb-2">
                    SEBI RA Registration Number : &nbsp;&nbsp;INH000012345{" "}
                  </div>
                  <div className="f16 fw_400 mb-2">
                    Permanent Account Number (PAN) : &nbsp;&nbsp;AAAAA1234A{" "}
                  </div>
                  <div className="f16 fw_400 mb-4">
                    GST Registration Number: 27AAAAA1234A1Z5{" "}
                  </div>
              <div className="f20 fw_700">
              Details of Principal Officer :
              </div>
              <div className="f16 fw_400 mb-2">
                    Principal Officer :&nbsp;&nbsp;
                    <span className="fw_600">Mr. John Doe</span>{" "}
                  </div>
                  <div className="f16 fw_400 mb-2">
                    Contact Number :&nbsp;&nbsp;
                    <span className="fw_600">+91 9876543210</span>{" "}
                  </div>
                  <div className="f16 fw_400 mb-2">
                    Email :&nbsp;&nbsp;
                    <span className="fw_600">
                      principalofficer@companyname.com{" "}
                    </span>{" "}
                  </div>
                  <div className="f16 fw_400 mb-2">
                    Certificate Validity : Valid till December 31,
                    2025{" "}
                  </div>

            </div>
            <div className="col-lg-3">
              <div className="f24 fw_700 mb-3">Our Partner </div>
              <div className="f16 text-white">
                <ul className="pl-0">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center text-white fw_400"
                    >
                      AKCJ Capital{" "}
                      <span>
                        <Image
                          src={"/images/search_arrow.svg"}
                          height={18}
                          width={18}
                          alt="arrow"
                          className="ml-1"
                        />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="f24 fw_700 mb-3">Contact Us </div>
              <div className="f14 text-white">
                <ul className="pl-0 flex flex-col gap-1">
                  <li>
                    <Link
                      href="mailto:info@akcjventures.com"
                      className="flex items-center text-white fw_400"
                    >
                      info@akcjventures.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+1234567890"
                      className="flex items-center text-white fw_400"
                    >
                      +12345 67890
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 p-lg-0">
              <div className="f24 fw_700 mb-3">Our Address</div>
              <div className="f14 text-white">
                <ul className="pl-0 flex flex-col gap-1">
                  <li className="f16">
                    612, Kailash Building, 26, Kasturba Gandhi Marg, Connaught
                    Place, New Delhi -110001
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="row flex gap-lg-0 gap-3 pb-3 border-b-white border-b-[1px]">
            <div className="col-lg-4  p-0 ">
              <div className="d-flex  justify-between lg:border-b-0 border-b-[1px] lg:border-b-transparent border-b-white">
                <div className="">
                  <div className="f24 fw_700 mb-3">Regulatory Information </div>
                  <div className="f16 fw_400 mb-3">
                    Corporate Identification Number (LLP) : &nbsp;&nbsp;AAX-1234{" "}
                  </div>
                  <div className="f16 fw_400 mb-3">
                    SEBI RA Registration Number : &nbsp;&nbsp;INH000012345{" "}
                  </div>
                  <div className="f16 fw_400 mb-3">
                    Permanent Account Number (PAN) : &nbsp;&nbsp;AAAAA1234A{" "}
                  </div>
                  <div className="f16 fw_400 mb-3">
                    GST Registration Number :&nbsp;&nbsp;27AAAAA1234A1Z5{" "}
                  </div>
                </div>

                <div
                  className="d-lg-block d-none"
                  style={{
                    border: "0.5px solid white",
                    width: "0.5x",
                    height: "230px",
                  }}
                ></div>
              </div>
            </div>

            <div className="col-lg-4  lg:pl-[24px!important] pe-0  pl-[0px!important]">
              <div className="d-flex  justify-between lg:border-b-0  border-b-[1px] lg:border-b-transparent border-b-white">
                <div className="">
                  <div className="f24 fw_700 mb-3">BASL Membership </div>
                  <div className="f16 fw_400 mb-3">
                    Principal Officer :&nbsp;&nbsp;
                    <span className="fw_700">Mr. John Doe</span>{" "}
                  </div>
                  <div className="f16 fw_400 mb-3">
                    Contact Number :&nbsp;&nbsp;
                    <span className="fw_700">+91 9876543210</span>{" "}
                  </div>
                  <div className="f16 fw_400 mb-3">
                    Email :&nbsp;&nbsp;
                    <span className="fw_700">
                      principalofficer@companyname.com{" "}
                    </span>{" "}
                  </div>
                  <div className="f16 fw_400 mb-3">
                    Certificate Validity :&nbsp;&nbsp;Valid till December 31,
                    2025{" "}
                  </div>
                </div>

                <div
                  className="d-lg-block d-none"
                  style={{
                    border: "0.5px solid white",
                    width: "0.5x",
                    height: "230px",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4  lg:pl-[24px!important]  pe-0  pl-[0px!important]">
              <div className="d-flex  justify-between ">
                <div className="flex flex-col gap-3">
                  <div className="f24 fw_700 ">Compliance </div>

                  <div className="f16 fw_400 ">Complaint Data </div>
                  <div className="f16 fw_400 ">
                    Investor charter research analyst (RA){" "}
                  </div>
                  <Link href={"/disclosure"} className="f16 fw_400 text-white">Disclosure - RA </Link>
                  <div className="f16 fw_400 ">Disclaimer – RA </div>
                  <div className="f16 fw_400 ">Complaint Redressal </div>
                  <div className="f16 fw_400 ">Grievances </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row ">
            <div className="col-lg-10 ps-0">

              <div className="border-b-white border-b-[1px] py-3 px-0 col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb footer_breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link href="/career">Career</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/terms-and-condition">Terms & Condition</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/refund-policy">Refund Policy</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="border-b-white border-b-[1px] py-3 px-0 col-12">
                  <div className="f16 text-white mb-3">
                  Investment in securities market are subject to market risks. Read all the related  documents carefully before investing.
                  </div>
                  <div className="f16 text-white ">
                    <span className="fw_700">Disclaimer:</span> Registration granted by SEBI, and certification from NISM in no way guarantee performance of the Research Analyst or provide any assurance of returns to investors.
                  </div>

              </div>
              <div className=" pt-3 px-0 col-12">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="f16 text-white">
                    Copyright ©{currentYear} AKCJ CAPITAL
                  </div>

                  <div className='flex gap-2 items-center'>
                    <div className="footer_social_icons">
                      <FaXTwitter  style={{fontSize:"16px"}}/>
                    </div>
                    <div className="footer_social_icons">
                      <FaInstagram  style={{fontSize:"16px"}} />
                    </div>
                    <div className="footer_social_icons">
                      <FaLinkedin  style={{fontSize:"16px"}}/>
                    </div>
                    <div className="footer_social_icons">
                      <FaFacebook  style={{fontSize:"16px"}}/>
                    </div>
            </div>
                </div>

              </div>
            </div>
            <div className="col-lg-2 pt-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.017357480091!2d77.21931051202976!3d28.629241875565057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3420353f79%3A0x5ef1d8497537217c!2sKailash%20Building!5e0!3m2!1sen!2sin!4v1731306865582!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
