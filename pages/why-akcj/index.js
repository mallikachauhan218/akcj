import Complianceslider from "@/components/about/complianceslider";
import Iconsection from "@/components/about/iconsection";
import Banner from "@/components/banner/banner";
import Footer from "@/components/common/footer/footer";
import Quotecard from "@/components/about/quotecard";
import Header from "@/components/common/header/header";
import Leadersection from "@/components/common/leadersection/leadersection";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Aboutus() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const sections = [
    {
      src: "/images/icon_1.svg",
      title: "Direct Engagement",
      description: `We prioritize direct interaction with our clients, ensuring they receive the full benefit of our offerings rather than intermediaries. Thereby, our focus remains entirely on research to provide maximized benefits to our clients.`,
    },
    {
      src: "/images/icon_2.svg",
      title: "Empowered Investor",
      description: `AKCJ Capital acts as a conduit, offering the necessary information and analysis, while you remain the ultimate decision-maker. Our role is to provide you with comprehensive research and insights into these companies, enabling you to make informed investment decisions.`,
    },
    {
      src: "/images/icon_3.svg",
      title: "Data-Driven Precision",
      description: `At AKCJ Capital, research is rooted in robust analysis and insight. We prioritize integrity over the metrics, delivering solid, actionable insights to our clients. Our commitment is to conduct honest, in-depth research and to foster awareness about the true potential of equities. The only benchmark that matters is the value we bring to your wealth journey.`,
    },
    {
      src: "/images/icon_4.svg",
      title: "Unmatched Market Intelligence",
      description: `Intensive research-backed strategies define AKCJ Capital. Our strategic focus is advanced analytics, a deep understanding of market dynamics, and sector-specific expertise to uncover hidden opportunities.`,
    },
    {
      src: "/images/icon_5.svg",
      title: "Seasoned Professional Team",
      description: `The astute independent thinking and experience of the advisors drives the research process at AKCJ Capital. Their disciplined approach combines rigorous research with prudent risk management to deliver superior risk adjusted returns. This laser sharp focus on growth and stability makes us a trusted partner.`,
    },
    {
      src: "/images/icon_6.svg",
      title: "The Techno-Funda Approach",
      description: `AKCJ Capital blends the best of technical analysis and fundamental research to provide a comprehensive view of equity markets. This powerful synergy caters to investors seeking to maximize returns while managing risk effectively.`,
    },
    {
      src: "/images/icon_7.svg",
      title: "Future-Focused Perspective",
      description: `AKCJ Capital endeavours to constantly monitor global and local market trends, regulatory shifts, and industry movements, ensuring our clients receive actionable intelligence that drives informed decision-making.`,
    },
    {
      src: "/images/icon_8.svg",
      title: "Risk Management",
      description: `AKCJ Capital deploys this powerful synergy, which caters to clients seeking to maximize returns while managing risk effectively. We involve a structured approach to identify, assess, and mitigate potential risks associated with equity research.`,
    },
    {
      src: "/images/icon_8.svg",
      title: "Customized Palette",
      description: `AKCJ Capital chalks out effective strategies for its clients by harnessing the power of compounding returns over the long haul. We embrace a balanced approach, placing a strong emphasis on diversification and staying mindful of benchmarks to craft effective decisions.`,
    },
    {
      src: "/images/icon_8.svg",
      title: "Communication and Integrity",
      description: `We prioritize transparency, integrity, & truthfulness in all our interactions with customers, stakeholders, & the public.`,
    },
  ];

  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />

        <Banner title={"Discover Us"} bannerClass={"about_banner"} />

        <div className="container">
          <div className="py-[60px]">
            <div className="row mx-0 flex items-center g-5 pb-[48px] ">
              <div className="col-lg-6">
                {/* <div className="red_label mb-[20px]" data-aos="fade-right">
          Brand Story
        </div> */}
                <div className="f56 fw_700 mb-[20px]" data-aos="fade-right">
                  Equity Investing With a Focus on
                  <span className="text_red fw_700">
                    {" "}
                    Clarity, Consistency,
                  </span>{" "}
                  and Strength of
                  <span className="text_red fw_700"> Compounding</span>
                </div>

                <div className="f18 text_body mb-4" data-aos="fade-right">
                  At AKCJ Capital, research isn&apos;t just a function—it&apos;s
                  the foundation of our strategy and the core of every decision
                  we make. We empower investors and businesses with deep,
                  data-driven insights that anticipate market trends, uncover
                  opportunities, and maximize returns. With rigorous analysis
                  and forward-thinking perspectives, AKCJ Capital is your
                  trusted partner for navigating complex markets and achieving
                  excellence.
                </div>
                <div className="f18 text_body" data-aos="fade-right">
                  AKCJ Capital is a SEBI registered Research Analyst (Equity
                  Research Firm) and Investment Advisory firm, specializing in
                  identifying emerging and fundamentally strong businesses to
                  assist our investors in navigating cycles with returns that
                  exceed both inflation and market benchmarks. We are a
                  dedicated team of professionals with a disciplined approach,
                  which combines rigorous research with prudent risk management
                  to deliver superior risk adjusted returns. This laser sharp
                  focus on growth and stability makes us a trusted partner.
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <Image
                  src={"/images/about1.png"}
                  className="img-fluid w-100"
                  width={500}
                  height={300}
                  alt="about"
                />
              </div>

              <div className="col-12 border-top">
                <div
                  className="f32 text_main fw_700 mt-[48px] mb-1"
                  data-aos="fade-up"
                >
                  Vision and Mission
                </div>

                <div className="f18 text_body" data-aos="fade-up">
                  Our story is simple! A bunch of analysts with a fervour for
                  equity research, excelling in pre-empting trends, pro with
                  research and analytical tools led by an equally passionate
                  Chartered Accountant, with a demonstrated history of 25 years
                  in identifying, tracking and advising portfolios for self and
                  others. What was required - aligning the focus to be an
                  advisory firm with the existing strength. The team
                  collectively commits to providing the clients with clear,
                  concise, and insightful research, empowering one to make
                  decisions that align with financial objectives.
                </div>
              </div>
            </div>
          </div>
        </div>

        <Leadersection
          title={`A wise holding today may not be a wise holding in the future. Vice versa, the compounding gains you see over time could indeed be exciting.`}
          data-aos="fade-up"
        />
        <div className="row container mx-auto">
          {sections.map((section, index) => (
            <div data-aos="fade-up" key={index} className="col-lg-6">
              <Iconsection
                key={index}
                src={section.src}
                title={section.title}
                description={section.description}
              />
            </div>
          ))}
        </div>

        <div className="container py-[60px] ">
          <div className="flex flex-col items-center justify-center">
            <div
              className="f56 fw_700 mb-[20px] text-center"
              data-aos="fade-up"
            >
              Wall of Wealth:
              <span className="text_red fw_700">
                {" "}
                Inspiring Financial Wisdom
              </span>
            </div>
          </div>

          <div className="row flex g-lg-5 g-0 mx-0 ">
            <div className="col-lg-6" data-aos="fade-right">
              <Quotecard
                quote={`The stock market is a device for transferring money from the impatient to the patient.`}
                author={`Warren Buffett`}
              />
              <Quotecard
                quote={`The desire to perform all the time is usually a barrier to performing over time.`}
                author={`Robert Olstein`}
              />
              <Quotecard
                quote={`The best time to plant a tree was 20 years ago. The second-best time is now.`}
                author={`Chinese proverb`}
              />
              <Quotecard
                quote={`A lot of success in life and business comes from knowing what you want to avoid: early death, a bad marriage etc.`}
                author={`Charlie Munger`}
              />
              <Quotecard
                quote={`Minimizing downside risk while maximizing the upside is a powerful concept.`}
                author={`Mohnish Pabrai`}
              />
              <Quotecard
                quote={`Don’t follow the herd.`}
                author={`Radhakishan Damani`}
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <Quotecard
                quote={`Ultimately, nothing should be more important to investors than the ability to sleep soundly at night.`}
                author={`Seth Klarman`}
              />
              <Quotecard
                quote={`The stock market is filled with individuals who know the price of everything, but the value of nothing.`}
                author={`Philip Fisher`}
              />
              <Quotecard
                quote={`The investor’s chief problem – and even his worst enemy – is likely to be himself.`}
                author={`Benjamin Graham`}
              />
              <Quotecard
                quote={`In this business if you’re good, you’re right six times out of ten. You’re never going to be right nine times out of ten.`}
                author={`Peter Lynch`}
              />
              <Quotecard
                quote={`Always go against tide. Buy when others are selling and sell when others are buying.`}
                author={`Rakesh Jhunjhunwala`}
              />
              <Quotecard
                quote={`Invest like a bull, sit like a bear and watch like an eagle.`}
                author={`Vijay Kedia`}
              />
            </div>
          </div>

          {/* <Complianceslider onSwiper={handleSwiper}/> */}
          {/* <div className="pagination_div flex justify-center mt-[48px] gap-2">
          <button
                onClick={() => goToSlide(0)}
                className={`testimonial_page ${activeIndex === 0 ? 'active' : ''}`}
              ></button>
              <button
                onClick={() => goToSlide(1)}
                className={`testimonial_page ${activeIndex === 1 ? 'active' : ''}`}
              ></button>
              <button
                onClick={() => goToSlide(2)}
                className={`testimonial_page ${activeIndex === 2 ? 'active' : ''}`}
              ></button>
              <button
                onClick={() => goToSlide(3)}
                className={`testimonial_page ${activeIndex === 3 ? 'active' : ''}`}
              ></button>
              <button
                onClick={() => goToSlide(4)}
                className={`testimonial_page ${activeIndex === 4 ? 'active' : ''}`}
              ></button>

          </div> */}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Aboutus;
