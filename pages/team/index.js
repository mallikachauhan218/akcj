import Banner from "@/components/banner/banner";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Teamcard from "@/components/team/teamcard";
// import Teammodal from '@/components/team/teammodal'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import dynamic from 'next/dynamic';
import Teammodal from "@/components/team/teammodal";
import Modal from "react-bootstrap/Modal";
import { GET } from "@/utils/api/get";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Team() {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [team, setTeam] = useState([]);

  const fatchTeam = async () => {
    try {
      const response = await GET.request({
        url: "/team",
      });

      console.log(response);

      setTeam(response.team);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error;
    }
  };

  useEffect(() => {
    fatchTeam();
  }, []);

  const teamMembers = [
    {
      src1: "/images/teammodal1.png",
      src2: "/images/teammodal2.png",
      teamImage: "/images/team1.png",
      designation: "Founding Partner",
      name: "Anjeet Khandelwal",
      description:
        "As the Founding Partner of AKCJ Capital LLP, Anjeet is sharply focused on leading the global business operations including strategic planning & management, business development, marketing, quality assurance, hiring, team leadership, mentoring portfolio companies, partner management, etc. Anjeet brings 20+ years experience of incubating startups, training CXOs, mentoring young & budding professionals, and conducting 100+ corporate trainings. She is a Masters in International Business from Delhi School of Economics, India.",
      interest:
        "In her free time, Anjeet loves to spend time with her family, furry son Brandy, travelling, and reading. She&apos;s always experimenting in cooking & attending hospitality events.",
    },
    {
      src1: "/images/teammodal1.png",
      src2: "/images/teammodal2.png",
      teamImage: "/images/team2.png",
      name: "Naira Sood",
      designation: "Investment Analyst",
      description:
        "Naira is an Investment Analyst at AKCJ Ventures. She is an ace financial data analyzer, delivering insightful reports. With prior experience as an Investment Advisor and Financial Planner, Naira is an expert at providing personalized and customized financial advice and guidance. Naira has a Bachelor's Degree in Finance and Investment Analysis from Delhi University and a certification in the Mutual Funds Distributor Program Series V-A from National Institute of Securities Markets (NISM), India.",
      interest:
        "Beyond numbers, Naira loves painting vibrant canvases, listening to music, gyming. Back home she enjoys spending time with her dogs.",
    },
    {
      src1: "/images/teammodal1.png",
      src2: "/images/teammodal2.png",
      teamImage: "/images/team3.png",
      name: "Shivam Mittal",
      designation: "Manager – Investment & Research",
      description:
        "Shivam Mittal is an Investment and Research Manager at AKCJ Ventures bringing buy-side equity research analyst intelligence. With prior experience in equity research, Shivam brings expertise in identifying fundamentally strong businesses, managing statutory & internal audits, tax audits. He has advised and managed portfolios across varied sectors – hospitality, insurance, real estate, wires & cables, wood panel etc., A graduate in Commerce from Delhi University, Shivam has successfully cleared the “National Institute of Securities Markets (NISM)-Series XV: Research Analyst Certification” Exam.",
      interest:
        "When Shivam isn't busy evaluating businesses, he's delving into non-fiction books, practicing yoga, or staying fit at the gym. He's also a passionate car enthusiast.",
    },
    {
      src1: "/images/teammodal1.png",
      src2: "/images/teammodal2.png",
      name: "Sarthak Nautiyal",
      teamImage: "/images/team4.jpg",

      designation: "Assistant Manager – Investment & Research",
      description:
        "Sarthak Nautiyal is an Investment and Research Analyst at AKCJ Ventures, constantly monitoring and evaluating listed companies and identifying potential stocks. He is known for his meticulous analysis enabling strategic decision-making to optimize the investment portfolio. Having valued companies across global markets in US, Europe and Asia, Sarthak gets prior experience in buy-side equity research. He has deep understanding of small-cap companies, engaging company promoters and managing funds for High Net-worth Individuals (HNI) along with financial modelling, capital management, etc. He has worked with a prominent hedge fund and a boutique research organization. Sarthak is a graduate in Commerce from Jagan Institute of Management Studies in Delhi.",
      interest:
        "In his free time, Sarthak loves driving and modifying cars while enjoying music, whether discovering new tracks or attending live shows.",
    },
    {
      src1: "/images/teammodal1.png",
      src2: "/images/teammodal2.png",
      name: "Ishan Singh",
      teamImage: "/images/team5.jpeg",
      designation: "Investment & Research Analyst",
      description:
        "Ishan Singh is an Investment and Research Analyst at AKCJ Ventures who is a master market researcher. With prior experience in valuation and financial modelling backed with data analysis, Ishan is a specialist in unearthing deep business insights and, has an avid eye on market trends and economic indicators. He has developed skills in financial statement analysis, market research, and due diligence, crucial for making sound investment decisions and evaluating potential opportunities. With a degree in Bachelor’s of Technology, Ishan is currently pursuing his Chartered Financial Analyst (CFA) designation. He has a certification for Research Analyst Program Series-XV from National Institute of Securities Markets (NISM), India",
      interest:
        "Ishan spends his free time reading, going to gym, watching movies, or playing sports especially cricket.",
    },
    {
      src1: "/images/teammodal1.png",
      src2: "/images/teammodal2.png",
      name: "Nikhil Singh",
      teamImage: "/images/team6.jpg",
      designation: "Senior Analyst - Investment and Research",
      description:
        "Nikhil is a senior analyst in investment research at AKCJ Ventures LLP, where he conducts rigorous research and analysis of companies across various sectors. He is a Chartered Accountant from the Institute of Chartered Accountants of India and has successfully cleared his CFA Level II. With over 5 years of experience in research, auditing, and financial reporting, Nikhil brings strong analytical skills and a deep understanding of financial markets to the team. His expertise lies in identifying high-potential companies, assessing their financial health, and providing actionable insights to support strategic investment decisions.",
      interest:
        "Nikhil likes reading non-fiction books and learning about investments, finance, geopolitics, and playing cricket & football.",
    },
    {
      src1: "/images/teammodal1.png",
      src2: "/images/teammodal2.png",
      name: "Yash Jhawar",
      teamImage: "/images/team7.jpg",
      designation: "Intern - Research",
      description:
        "Yashh is a detail-oriented individual with a passion for uncovering market insights. He excels at conducting in-depth market research and analyzing complex data to derive actionable insights. His previous internships at renowned consulting and marketing firms have honed his analytical and problem-solving skills. Beyond his professional pursuits, Yashh is fascinated by the dynamic world of startups. He enjoys keeping abreast of the latest trends and innovations across various sectors. His ultimate goal is to leverage his knowledge and experience to establish his own venture and contribute to the entrepreneurial ecosystem.",
      interest:
        "When Yashh is not keeping track of companies, he loves watching all kinds of sports and hanging out with friends and family.",
    },
  ];

  const openModal = (member) => {
    console.log("hi");
    console.log(member, "member");
    setModalContent(member);
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const sortedTeamData = [...team].sort((a, b) => a.sequence - b.sequence);
  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />
        <Banner title={"Team"} bannerClass={"team_banner"} />

        <div className="container">
          <div className="py-[60px]">
            <div className="row mx-0 g-5 flex items-center">
              <div className="col-lg-4">
                <Image
                  src={"/images/home2.png"}
                  className="img-fluid w-100"
                  width={500}
                  height={300}
                  alt="team"
                />
              </div>
              <div className="col-lg-8 ">
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

                <div
                  className="f18 text_body text-justify mb-3"
                  data-aos="fade-right"
                >
                  Amit KC Jain is the Founder and Managing Partner of AKCJ
                  Capital Private Limited, the new-age capital advisory company
                  with an aim to create wealth steadily over the long term for
                  our stakeholders.
                </div>
                <div
                  className="f18 text_body text-justify"
                  data-aos="fade-left"
                >
                  A visionary and strategic thinker with business & finance
                  acumen, Amit is a proven, powerful wealth creator and a force
                  multiplier. In his 25 years of experience, he has consistently
                  sustained as a trusted partner. He is regarded as a
                  responsible investor and bold risk-taker who delivers strong
                  socio-economic value, transforms challenges into opportunities
                  and inspires growth.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="pb-[60px]">
            <div className="flex flex-col items-center justify-center">
              <div className="red_label mb-[20px]" data-aos="fade-up">
                Meet Our Team
              </div>
              <div
                className="fw_700 f56 text-center mb-[48px]"
                data-aos="fade-up"
              >
                Guiding Our <span className="fw_700 text_red">Vision with</span>
                <br />
                <span className="fw_700 text_red" data-aos="fade-up">
                  {" "}
                  Expertise
                </span>{" "}
                & Insight
              </div>
            </div>
            <div className="row flex g-4">
              {sortedTeamData.map((member, index) => (
                <Teamcard
                  index={index}
                  key={member.id}
                  MemberId={member.id}
                  src={member.photo}
                  name={member.name}
                  designation={member.position}
                  description={member.description}
                  linkdin={member.linkdin}
                  sequence={member.sequence}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />

        {modalContent && (
          <Teammodal
            show={showModal}
            onHide={hideModal}
            modalContent={modalContent}
          />
        )}
      </div>
    </>
  );
}

export default Team;
