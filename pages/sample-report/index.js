import Banner from "@/components/banner/banner";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import { GET } from "@/utils/api/get";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Samplereport() {
  const [showPDF, setShowPDF] = useState(false);
  const [Report, setReport] = useState([]);

  const router = useRouter();

  const fatchSampleReport = async () => {
    try {
      const response = await GET.request({
        url: "/sample-report",
      });

      setReport(response?.report);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error;
    }
  };

  useEffect(() => {
    fatchSampleReport();
  }, []);

  console.log(Report, "Report");

  const disableRightClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const handleGeneratePDF = () => {
    router.push("/report");
  };
  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />
        <Banner title={"Sample Report"} bannerClass={"report-banner"} />
        <div className="container">
          <div className="report-data">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="col-1 py-3">
                    ID
                  </th>
                  <th scope="col" className="col-6 col-lg-8 py-3">
                    Report Name
                  </th>
                  <th scope="col" className="col-3 py-3 text-center">
                    PDF
                  </th>
                </tr>
              </thead>
              <tbody>
                {Report.map((e , ind) => {
                  return (  
                    <tr key={ind}>
                      <td className="col-1 py-4">{e.id}.</td>
                      <td className="col-4 col-lg-8 py-4">{e.report_name}</td>
                      <td className="col-3 py-4 text-center">
                        <a
                          href={`${e.image}#toolbar=0&navpanes=0&scrollbar=0`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onContextMenu={(e) => e.preventDefault()} 
                          className="border border-black rounded-full py-2 px-4 text-black hover:!text-white hover:bg-[#A71E28] duration-200"
                        >
                          <button>View PDF</button>
                        </a>
                      </td>
                    </tr>
                  );
                })}

                {/* <tr>
                  <td className="col-1 py-4">2.</td>
                  <td className="col-4 col-lg-8 py-4">test</td>
                  <td className="col-3 py-4 text-center">
                    <a
                      href="/pdf-view?path=/pdf/checkoutbg.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black rounded-full py-2 px-4 text-black hover:!text-white hover:bg-[#A71E28] duration-200"
                    >
                      <button>View PDF</button>
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Samplereport;
