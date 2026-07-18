import Banner from "@/components/banner/banner";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Story() {
  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />
        <Banner title={"Brand-Story"} bannerClass={"story_banner"} />

        <div className="container">
          <div className="py-[60px]">
            <div className="row mx-0 flex g-5">
              <div className="col-lg-7">
                <div className="red_label mb-[20px]" data-aos="fade-right">
                  AKCJ Capital Brand Story
                </div>
                <div className="f56 fw_700 mb-4" data-aos="fade-left">
                  <span className="text_red fw_700">Vision</span> and{" "}
                  <span className="text_red fw_700">Mission</span>
                </div>

                <div
                  className="f18 text_body text-justify"
                  data-aos="fade-right"
                >
                  Our story is simple! A bunch of analysts with a fervour for
                  equity research, excelling in pre-empting trends, pro with
                  research and analytical tools led by an equally passionate
                  Chartered Accountant, with a demonstrated history of 25 years
                  in identifying, tracking and advising portfolios for self and
                  others. What was required -  aligning the focus to be an
                  advisory firm with the existing strength. The team
                  collectively commits to providing the clients with clear,
                  concise, and insightful research, empowering one to make
                  decisions that align with financial objectives.
                </div>
              </div>
              <div className="col-lg-5">
                <Image
                  src={"/images/story1.png"}
                  className=" w-100"
                  width={500}
                  height={200}
                  alt="story"
                />
              </div>
            </div>
          </div>
          <div className="pb-[60px]">
            <div className="row mx-0 flex g-5 ">
              <div className="col-lg-4">
                <Image
                  src={"/images/home2.png"}
                  className=" w-100"
                  width={500}
                  height={200}
                  alt="story"
                />
              </div>
              <div className="col-lg-8">
                <div
                  className="text_red fw_700 f56 mb-[6px]"
                  data-aos="fade-left"
                >
                  Amit KC Jain
                </div>
                <div className="f20 fw_700 mb-[15px]" data-aos="fade-right">
                  Founder and Managing Partner
                </div>
                <div className="f20 fw_700 mb-[15px]" data-aos="fade-right">
                  B.Com(H), FCA
                </div>

                <Link
                  href="https://www.linkedin.com/in/amitkcjain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="text-black "
                >
                  <FaLinkedin
                    style={{ fontSize: "30px", marginBottom: "15px" }}
                  />
                </Link>
                <div className="flex flex-col gap-3">
                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-left"
                  >
                    Amit KC Jain is the Founder and Managing Partner of AKCJ
                    Capital Private Limited, the new-age capital advisory
                    company with an aim to create wealth steadily over the long
                    term for our stakeholders.
                  </div>

                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-right"
                  >
                    A visionary and strategic thinker with business & finance
                    acumen, Amit is a proven, powerful wealth creator and a
                    force multiplier. In his 25 years of experience, he has
                    consistently sustained as a trusted partner. He is regarded
                    as a responsible investor and bold risk-taker who delivers
                    strong socio-economic value, transforms challenges into
                    opportunities and inspires growth.
                  </div>

                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-left"
                  >
                    An avid trend spotter, Amit is an innovative category
                    creator, a problem solver at speed & at scale and, an expert
                    investment adviser. He is passionate about creating a new
                    ecosystem where ethics are at the core of every decision.
                    With a dedication to co-creating for value generation, Amit
                    partners with diverse stakeholders to drive sustainable and
                    impactful solutions. He leverages strategic insights and a
                    collaborative approach to transform industries and
                    communities, ensuring long-term success and shared
                    prosperity.
                  </div>

                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-right"
                  >
                    Earlier, Amit led a successful financial consulting firm
                    with global clients. And, Amit&apos;s tenures at various
                    corporates like Aricent, Hughes, Hewitt, Ciena, have honed
                    his expertise and expanded his horizons to be a global
                    strategic advisor & transformist with blue ocean
                    initiatives. He brings his competitive spirit coupled with
                    an explorer&apos;s heart driving innovation and
                    transformation with agility, versatility and flexibility.
                  </div>

                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-left"
                  >
                    Amit has mentored 100+ professionals on topics such as
                    business strategy, finance, taxation, accounts, business
                    processes, due diligence, corporate structuring, to name a
                    few.
                  </div>

                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-right"
                  >
                    Amit is an eminent and dynamic humanitarian patron who has
                    been associated with one of the prominent clubs of Rotary
                    International for several years. He is also currently
                    supporting various social impact causes ranging from
                    education, skills development, medical aid, to name a few.
                    In addition, Amit is also at the helm of supporting
                    specially-abled individuals with survival critical
                    amenities.
                  </div>

                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-left"
                  >
                    Exploring the unexplored terrains powers Amit&apos;s
                    intellect with history, culture & experiences, and interests
                    in cricket and chess propel his game of strategy,
                    compounding and shared success.
                  </div>

                  <div
                    className="f18 text_main text-justify"
                    data-aos="fade-right"
                  >
                    Amit is an accomplished Chartered Accountant from The
                    Institute of Chartered Accountants of India, which he
                    obtained after completing his graduation from
                    Delhi University. Amit is a constant learner and is
                    currently pursuing an Advanced Finance Program from The
                    Wharton School, having completed modules on Mergers &
                    Acquisitions, Venture Capital, Private Equity and, CFO –
                    Becoming a Strategic Partner.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Story;
