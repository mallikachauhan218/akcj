import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import Homebanner from "@/components/banner/homebanner";
import Counter from "@/components/home/counter";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Blog from "@/components/home/blog";
import Testimonial from "@/components/home/testimonial";
import Infoslider from "@/components/home/infoslider";
import Leadersection from "@/components/common/leadersection/leadersection";
import Testimonialsection from "@/components/home/testimonialsection";
import { Accordion } from "react-bootstrap";
import AccordionItem from "@/components/common/faq/accordionitem";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Contactform from "@/components/common/contact/contactform";
import { useRouter } from "next/router";
import { GET } from "@/utils/api/get";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [Faq, setFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setTimeout(() => {
          setModalOpen(true);
        }, 10000);
        clearTimeout();
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
    swiper.on("slideChange", () => {
      setActiveIndex(swiper.activeIndex);
    });
  };

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
      setActiveIndex(index);
    }
  };
  const counters = [
    { label: "Companies Evaluated", target: "1,932" },
    { label: "Strategies Developed", target: "2,921" },
    { label: "Projects Launched", target: "2,501" },
    { label: "Happy Clients", target: "12k" },
  ];
  const teamMembers = [
    {
      name: "Mark Donald",
      role: "Business Manager",
      image: "/images/team1.png",
      twitterLink: "https://twitter.com/markdonald",
      linkedinLink: "https://linkedin.com/in/markdonald",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      image: "/images/team2.png",
      twitterLink: "https://twitter.com/janesmith",
      linkedinLink: "https://linkedin.com/in/janesmith",
    },
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "/images/team3.png",
      twitterLink: "https://twitter.com/johndoe",
      linkedinLink: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      image: "/images/team4.png",
      twitterLink: "https://twitter.com/emilyjohnson",
      linkedinLink: "https://linkedin.com/in/emilyjohnson",
    },
  ];

  const fatchFaq = async () => {
    try {
      const response = await GET.request({
        url: "/faqs",
      });

      console.log(response);

      setFaq(response.faqs);

      //   setStocksapi(response?.stocks);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error; 
    }
  };

  useEffect(() => {
    fatchFaq();
  }, []);

  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />
        <Homebanner />
        <div className="container">
          <div className="row flex items-center  g-lg-5 g-4 py-[60px]">
            <div className="col-lg-7 ">
              <div className="red_label mb-[20px]" data-aos="fade-up">
                #Designtheundesigned
              </div>

              <div className="f56 fw_700 mb-[24px]" data-aos="fade-up">
                Equity Investing With a Focus on
                <span className="text_red f56 fw_700" data-aos="fade-up">
                  {" "}
                  Clarity, Consistency,
                </span>{" "}
                and Strength of{" "}
                <span className="text_red f56 fw_700">Compounding</span>
              </div>

              <div className="f18 text_body mb-[20px]" data-aos="fade-up">
                AKCJ Capital is dedicated to empowering high-net-worth
                individuals (HNIs), family offices, and institutional investors
                to achieve their financial aspirations through strategic wealth
                creation. By combining innovative investment strategies with a
                deep understanding of market dynamics, we deliver bespoke
                solutions that maximize growth while mitigating risks.
              </div>

              <div className="f18 text_body mb-[20px]" data-aos="fade-up">
                Central to our philosophy is the power of compounding—a proven
                approach that allows wealth to grow exponentially over time. By
                reinvesting returns and leveraging consistent, disciplined
                strategies, we help our clients harness the multiplier effect of
                compounding to build sustainable long-term value.
              </div>

              <div className="f18 text_body mb-[20px]" data-aos="fade-up">
                Our expertise spans a broad spectrum of asset classes, including
                equities, fixed income, and alternative investments, ensuring a
                balanced and diversified portfolio tailored to your unique
                financial goals and risk appetite. Through advanced analytics
                and cutting-edge technology, we identify opportunities that
                align with market trends while maintaining a forward-looking
                perspective to stay ahead of the curve.
              </div>

              <div className="row flex items-stretch g-4">
                <div className="col-md-5 " data-aos="fade-right">
                  <div className="f32 fw_700 mb-[12px]">Our Vision</div>
                  <div className="f18 text_body" data-aos="fade-right">
                    AKCJ Capital aspires to be the most honest and reliable
                    equity research organization. Our mission is to guide
                    investors on the path to wealth creation through transparent
                    financial communication and to assist them in making
                    informed decisions backed by stringent research practices,
                    thereby minimizing the likelihood of fallacies.
                  </div>
                </div>
                <div className="col-2 flex items-stretch d-lg-block d-none  ">
                  <div className="d-flex h-100 w-100 items-center justify-center">
                    <div className="h-100 w-[0.5px] bg-[#C2C2C2]"></div>
                  </div>
                </div>
                <div className="col-md-5 ">
                  <div className="f32 fw_700 mb-[12px]" data-aos="fade-left">
                    Our Mission
                  </div>
                  <div className="f18 text_body" data-aos="fade-left">
                    AKCJ Capital&apos;s mission is to be a trusted and respected
                    research partner, delivering superior risk-adjusted returns
                    through innovative strategies and empowered team of
                    professionals who always bear the client&apos;s best
                    interest in mind.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <Image
                src="/images/baneer-section.png"
                width={675}
                height={500}
                className="img-fluid"
                alt="home1"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 mb-[60px]">
          <div className="row mx-0 g-5 flex ">
            <div className="col-lg-6 bg-[#1A2A5B] text-white py-[60px] padding_leftright">
              <div className="mx-auto">
                <div className="white_label mb-[20px]" data-aos="fade-right">
                  Products & Service
                </div>
                <div className="f56 fw_700 mb-[12px]" data-aos="fade-right">
                  Empowering
                  <span className="text_red fw_700" data-aos="fade-right">
                    {" "}
                    Investments
                  </span>{" "}
                  with Data-Driven Research and{" "}
                  <span className="text_red fw_700">Compounding</span>
                </div>
                <div className="f18" data-aos="fade-right">
                  Expert financial expertise tailored to your unique goals,
                  ensuring consistent growth and transparency. Trust us to
                  manage your wealth with precision and integrity.
                </div>
              </div>
            </div>
            <div className="col-lg-6 flex items-center">
              <Infoslider onSwiper={handleSwiper} />
            </div>
          </div>
        </div>
        <Leadersection
          title={`Investing involves Planning, Research, Discipline and Patience. Do your homework before making a decision and once you've made a decision, make sure to re-evaluate your portfolio on a timely basis. `}
        />
        <Testimonialsection />
        <div className="container py-[60px]">
          <div className="flex flex-col items-center justify-center">
            <div className="red_label !text-4xl mb-[20px]" data-aos="fade-up">
              faq
            </div>

            <div
              className="f56 fw_700 text-center mb-[26px]"
              data-aos="fade-up"
            >
              Discover AKCJ Capital - Your Partner in{" "}
              <span className="text_red fw_700">Strategic Investments</span>
            </div>
            <Accordion defaultActiveKey="0" className="faqAccordion w-100">
              {Faq?.map((e, ind) => {
                return (
                  <div data-aos="fade-up" key={ind}>
                    <AccordionItem
                      eventKey={e.sequence}
                      title={e.heading}
                      description={e.description}
                    />
                  </div>
                );
              })}
              {/* <div data-aos="fade-up">
              <AccordionItem
                eventKey={"0"}
                title={`What is AKCJ Capital's Products offering?`}
                description={`AKCJ Capital specializes in independent research and investment advisory. We provide in-depth research notes on companies poised to become category leaders.`}
              />
            </div>
            <div data-aos="fade-up">
              <AccordionItem
                eventKey={"1"}
                title={`Sorry…so it is advisory, PMS, AIF or what?`}
                description={`ONLY research & Advisory. Research which aims to unite like-minded, serious long-term retail investors together. An investment advisory offers personalized advice on managing your investments. Partnering with an investment advisory helps ensure that your financial goals align with market trends, offering peace of mind and strategic growth.`}
              />
            </div>
            <div data-aos="fade-up">
              <AccordionItem
                eventKey={"2"}
                title={`Do we have SEBI registration as an Investment Advisor?`}
                description={`Yes, AKCJ Capital Pvt. Ltd. It is a SEBI-registered Research Analyst & Investment Advisory company with Registration No.: ----------- & ------------- respectively. We provide research & stock advisory services, offering professional advice and guidance for investing in the Indian stock market.`}
              />
            </div>
            <div data-aos="fade-up">
              <AccordionItem
                eventKey={"3"}
                title={`Why choose a SEBI Registered Investment Advisor?`}
                description={`A SEBI-registered advisor ensures reliable, transparent, and accountable guidance, prioritizing your financial well-being. With stringent SEBI regulations, registered advisors offer unbiased, long-term investment insights, ideal for investors seeking trusted support.`}
              />
            </div>
            <div data-aos="fade-up">
              <AccordionItem
                eventKey={"4"}
                title={`Why not a monthly subscription?`}
                description={`We think long-term investments will make money. We are trying to create a community of like minded long term retail investors who can think about wealth creation and not money from tips.`}
              />
            </div>
            <div data-aos="fade-up">
              <AccordionItem
                eventKey={"5"}
                title={`Can I get a refund after I subscribe?`}
                description={`Sorry. No refund possible. Please take the minimum subscription package if that is a fear in your mind.`}
              />
            </div> */}
            </Accordion>
          </div>
        </div>
        <Modal size="xl" centered show={modalOpen} onHide={closeModal}>
          <Modal.Body className=" p-0 px-0 position-relative">
            <button
              type="button"
              className="absolute top-3 right-3 z-1"
              onClick={closeModal}
            >
              <Image
                src={"/images/modal_close.svg"}
                width={32}
                height={32}
                className="img-fluid "
                alt="close"
              />
            </button>

            <Contactform showImage={showImage} classpop={`py-2 my-0`} />
          </Modal.Body>
        </Modal>
        <Footer />
      </div>
    </>
  );
}
