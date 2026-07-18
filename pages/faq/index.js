import Banner from "@/components/banner/banner";
import AccordionItem from "@/components/common/faq/accordionitem";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import { GET } from "@/utils/api/get";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

function Faq() {
  const [faqs, setfaqs] = useState([]);
  const fatchFaq = async () => {
    try {
      const response = await GET.request({
        url: "/faqs",
      });

      console.log(response);

      setfaqs(response.faqs);

      //   setStocksapi(response?.stocks);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error; // Throw the error for further handling
    }
  };

  useEffect(() => {
    fatchFaq();
  }, []);

  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />
        <Banner title={"FAQ"} bannerClass={"faq_banner"} />

        <div className="container py-[120px]">
          <div className="flex flex-col items-center justify-center">
            <div className="red_label !text-4xl mb-[20px]" data-aos="fade-up">
              faq
            </div>

            <div
              className="f56 fw_700 text-center mb-[48px]"
              data-aos="fade-up"
            >
              Discover AKCJ Capital - Your Partner in{" "}
              <span className="text_red fw_700">Strategic Investments</span>
            </div>

            <Accordion defaultActiveKey="0" className="faqAccordion w-100 ">
              {faqs
                ?.sort((a, b) => a.sequence - b.sequence) // Sort the FAQs by sequence
                .map((faq, ind) => (
                  <div data-aos="fade-up" key={ind}>
                    <AccordionItem
                      key={ind} // Ensure you include a unique key for each item
                      eventKey={faq?.sequence}
                      title={faq?.heading}
                      description={faq?.description}
                    />
                  </div>
                ))}

              {/* <AccordionItem eventKey={"0"} title={"What is AKCJ Capital?"} description={"AKCJ Capital is a forward-thinking investment advisory firm committed to empowering clients with actionable insights. We specialize in providing comprehensive research, investment strategies, and expert guidance tailored to maximize long-term value creation."}/>
                <AccordionItem eventKey={"1"} title={"What services does AKCJ Capital offer?"} description={"AKCJ Capital is a forward-thinking investment advisory firm committed to empowering clients with actionable insights. We specialize in providing comprehensive research, investment strategies, and expert guidance tailored to maximize long-term value creation."}/>
                <AccordionItem eventKey={"2"} title={"How does AKCJ Capital ensure unbiased research?"} description={"AKCJ Capital is a forward-thinking investment advisory firm committed to empowering clients with actionable insights. We specialize in providing comprehensive research, investment strategies, and expert guidance tailored to maximize long-term value creation."}/>
                <AccordionItem eventKey={"3"} title={"What sectors does AKCJ Capital focus on?"} description={"AKCJ Capital is a forward-thinking investment advisory firm committed to empowering clients with actionable insights. We specialize in providing comprehensive research, investment strategies, and expert guidance tailored to maximize long-term value creation."}/>
                <AccordionItem eventKey={"4"} title={"How does AKCJ Capital engage with its clients?"} description={"AKCJ Capital is a forward-thinking investment advisory firm committed to empowering clients with actionable insights. We specialize in providing comprehensive research, investment strategies, and expert guidance tailored to maximize long-term value creation."}/> */}
            </Accordion>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Faq;
