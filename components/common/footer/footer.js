import useToast from "@/tost/useToast";
import { POST } from "@/utils/api/post";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [Email, setEmail] = useState('')

  const showToast = useToast();

  const FatchPackageStoke = async () => {

    const formdata = new FormData()

    formdata.append ('email' , Email)

    try {
      const response = await POST.request({
        form: formdata,
        url: "/newsletter",

    });

    if(response?.status == '0'){
      showToast(response?.message , "success")
      setEmail("")
    }else{
      showToast(response?.message , "error")
    }

    
      console.log(response?.stock, "response");

  
    } catch (err) {}
  };

  const handleNewsAdd = (e) => {
    e.preventDefault()
    console.log(Email);

    if(Email === ''){
      showToast('please write email' , "error")
    }else{
      FatchPackageStoke()
    }
  }

  return (
    <footer>
      <ToastContainer />
      {/* <div className="footer1">
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
      </div> */}
      <div className="container-fluid footerBg  bg-[#A71E28] text-white py-[30px]">
        <div className="container">
          <div className="row  flex items-center">
            <div className="col-lg-6">
              <div className="f56 fw_700" data-aos="fade-right">
                Subscribe to Newsletter Capital Compass
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="flex items-center position-relative arrow_card">
                <input
                  type="email"
                  value={Email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder="Enter your email "
                  className="bg-transparent text-white serch_input py-[20px] px-[20px] f18  w-100"
                  style={{ borderBottom: "0.5px solid white" }}
                />
                <div className="serach_icon arrow_img" onClick={handleNewsAdd}>
                  <Image
                    src={"/images/search_arrow.svg"}
                    height={24}
                    width={24}
                    alt="arrow"
                    className="img-fluid cursor-pointer mr-[15px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="container">
          <div className="row flex g-3 mb-[30px]">
            <div className="col-lg-4 " data-aos="fade-right">
              {/* <Image
                src={"/images/footer_logo.svg"}
                height={76}
                width={152}
                alt="logo"
                className="img-fluid"
              /> */}
              <div className="text_main f18 mb-4">
                We aim to be, for serious investors, the equity research backend
                with data backed actionable ideas as the key differentiator. Let
                financial education make us grow together.
              </div>
              <div className="f18 fw_700 mb-1">
                AKCJ Capital Private Limited
              </div>
              <div className="f16 fw_400 mb-2">
                Corporate Identification Number : &nbsp;&nbsp;AAX-1234{" "}
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
              <div className="f18 fw_700  mb-1">
                Details of Principal Officer :
              </div>
              <div className="f16 fw_400 mb-2">
                Principal Officer :&nbsp;&nbsp;
                <span className="fw_600">Mr. Amit KC Jain</span>{" "}
              </div>
              <div className="f16 fw_400 mb-2">
                Contact Number :&nbsp;&nbsp;
                <span className="fw_600">+91 9876543210</span>{" "}
              </div>
              <div className="f16 fw_400 mb-2">
                Email :&nbsp;&nbsp;
                <span className="fw_600">amitkcjain@akcjcapital.com </span>{" "}
              </div>
              <div className="f16 fw_400 mb-4">
                Certificate Validity : Valid till December 31, 2025{" "}
              </div>
              <div className="f18 fw_700 mb-1">SEBI Office Details:</div>
              <div className="f16 fw_400 mb-1">
                SEBI Bhavan BKC, Plot No.C4-A, G Block, Bandra Kurla Complex,
                Bandra (E), Mumbai - 400051
              </div>
              <div className="f16 fw_400 mb-1">
                Tel: 022-26449000 / 40459000
              </div>
              <div className="f16 fw_400 mb-1">
                SEBI Scores:{" "}
                <Link
                  className="text_main"
                  target="_blank"
                  href="https://scores.gov.in/scores/complaintRegister.html"
                >
                  https://scores.gov.in/scores/complaintRegister.html
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row flex g-3">
                <div className="col-lg-2" data-aos="fade-up">
                  <div className="f18 fw_700 mb-3">Useful Link</div>
                  <div className="f16 text_main">
                    <div className=" flex flex-col gap-3">
                      {/* <Link
                          href="/"
                          className="flex items-center text_main  fw_400"
                        >
                          Home
                        </Link> */}
                      <Link
                        href="/why-akcj"
                        className="flex items-center text_main  fw_400"
                      >
                        Why AKCJ Capital
                      </Link>
                      <Link
                        href="/product-and-services"
                        className="flex items-center text_main  fw_400"
                      >
                        Product & Services
                      </Link>
                      <Link
                        href="/team"
                        className="flex items-center text_main  fw_400"
                      >
                        Team
                      </Link>

                      <Link
                        href="/contact-us"
                        className="flex items-center text_main  fw_400"
                      >
                        Contact Us
                      </Link>
                      <Link
                        href="/career"
                        className="flex items-center text_main  fw_400"
                      >
                        Career
                      </Link>
                      <Link
                        href="/refer-a-friend"
                        className="flex items-center text_main  fw_400"
                      >
                        Refer a Friend
                      </Link>
                      <Link
                        href="/faq"
                        className="flex items-center text_main  fw_400"
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up">
                  <div className="row  flex g-3">
                    <div className="col-lg-5">
                      <div className="f18 fw_700 mb-3"> Important Info</div>
                      <div className="f16 text_main">
                        <div className=" flex flex-col gap-3">
                          <Link
                            href="/terms-and-conditions"
                            className="flex items-center text_main  fw_400"
                          >
                            Terms & Conditions
                          </Link>
                          <Link
                            href="/privacy-policy"
                            className="flex items-center text_main  fw_400"
                          >
                            Privacy Policy
                          </Link>
                          <Link
                            href="/refund-policy"
                            className="flex items-center text_main  fw_400"
                          >
                            Refund Policy
                          </Link>
                          <Link
                            href="/disclaimer-ra"
                            className="flex items-center text_main  fw_400"
                          >
                            Disclaimer - RA
                          </Link>
                          <Link
                            href="/disclosure-ria"
                            className="flex items-center text_main  fw_400"
                          >
                            Disclosure - RIA
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="f18 fw_700 mb-3">
                        Regulatory Disclosures
                      </div>
                      <div className="f16 text_main">
                        <div className=" flex flex-col gap-3">
                          <Link
                            href="/redressal-of-client-grievances"
                            className="flex items-center text_main  fw_400"
                          >
                            Redressal of client grievances
                          </Link>
                          <Link
                            href="/investor-grievances"
                            className="flex items-center text_main  fw_400"
                          >
                            RA Investor Grievances
                          </Link>
                          <Link
                            href="/investor-grievances"
                            className="flex items-center text_main  fw_400"
                          >
                            RIA Investor Grievances
                          </Link>
                          <Link
                            href="/investor-charter"
                            className="flex items-center text_main  fw_400"
                          >
                            Investor Charter - RA
                          </Link>
                          <Link
                            href="/investor-charter"
                            className="flex items-center text_main  fw_400"
                          >
                            Investor Charter - RIA
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" data-aos="fade-left">
                  <div className="f18 fw_700 mb-3">Contact Us</div>
                  <div className="row">
                    <div className="col-2 mb-3 pe-0">
                      <FiMapPin style={{ fontSize: "16px" }} />
                    </div>
                    <div className="col-10 mb-3 ps-0">
                      <div className="f16 text_main">
                        612, Kailash Building, 26, Kasturba Gandhi Marg,
                        Connaught Place, New Delhi -110001
                      </div>
                    </div>
                    <div className="col-2 mb-3 pe-0">
                      <FiPhone style={{ fontSize: "16px" }} />
                    </div>
                    <div className="col-10 mb-3 ps-0">
                      <div className="f16 text_main">+12345 67890</div>
                    </div>
                    <div className="col-2 mb-3 pe-0">
                      <IoMailOutline style={{ fontSize: "18px" }} />
                    </div>
                    <div className="col-10 mb-3 ps-0">
                      <Link
                        href={"mailto:hello@akcjcapital.com"}
                        className="f16 text_main flex items-start"
                      >
                        hello@akcjcapital.com
                      </Link>
                    </div>

                    <div className="col-2 mb-3 pe-0"></div>
                    <div className="col-10 mb-3 ps-0">
                      <div className="flex gap-2 items-center ">
                        <Link
                          href="https://www.instagram.com/akcjcapital/"
                          target="_blank"
                          className="text-white footer_social_icons"
                        >
                          <FaInstagram style={{ fontSize: "20px" }} />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/company/104794069/admin/dashboard/"
                          target="_blank"
                          className="text-white footer_social_icons"
                        >
                          {" "}
                          <FaLinkedin style={{ fontSize: "20px" }} />
                        </Link>
                        <Link
                          href="https://www.facebook.com/profile.php?id=61566185276487"
                          target="_blank"
                          className="text-white footer_social_icons"
                        >
                          <FaFacebook style={{ fontSize: "20px" }} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="f16 fw_700 mb-2">
                        AKCJ Capital Private Limited
                      </div>
                      <div className="f16">MCA CIN - U66120DL2024PTC437281</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="position-relative h-full">
            <hr/>
            <Image src="/images/footer_logo.svg" alt="footerlogo" width={200} height={80} className="img-fluid footer_logo" />

          </div> */}
          <div className="position-relative">
            <div className="footer_logo optional_txt">
              <Image
                src="/images/footer_logo.svg"
                alt="footerlogo"
                width={200}
                height={80}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-5 items-center justify-center  mb-[20px]">
              <Link
                href="https://www.akcjventures.com/foundation"
                target="_blank"
                className="f28 text_main"
              >
                <Image
                  src="/images/akcj_foundation.svg"
                  width="150"
                  height="150"
                  alt="image"
                  className="img-fluid"
                  data-aos="fade-right"
                />
              </Link>
              <Link
                href="https://www.akcjventures.com/"
                target="_blank"
                className="f28 text_main"
              >
                <Image
                  src="/images/akcj_ventures.svg"
                  width="150"
                  height="150"
                  alt="image"
                  className="img-fluid"
                  data-aos="fade-left"
                />
              </Link>
            </div>
            <q className="text-center  w-100">
              Investment in securities market are subject to market risks. Read
              all the related documents carefully before investing.
            </q>
            <div className="text-center border-b-[#c2c2c2] border-b-[1px] w-100 pb-[48px]  ">
              Disclaimer:{" "}
              <q>
                Registration granted by SEBI, enlistment of IA with Exchange and
                certification from NISM in no way guarantee performance of the
                intermediary or provide any assurance of returns to investors.
              </q>
            </div>
            <div className="f16 py-[20px]">
              Copyright ©{currentYear} AKCJ CAPITAL PRIVATE LIMITED
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
          {/* <div className="row ">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
