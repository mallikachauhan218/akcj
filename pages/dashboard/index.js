"use client";

import DashboardHeader from "@/components/common/header/DashboardHeader";

import VideoGallery from "@/components/Youtube/VideoGallery";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { GET } from "@/utils/api/get";
import { ClipLoader } from "react-spinners";
import { POST } from "@/utils/api/post";

const Dashboard = () => {
  const router = useRouter();

  const [VideoData, setVideoData] = useState([]);
  const [Blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [packages, setpackages] = useState([]);
  const [userData, setuserData] = useState({});
  const [BuyPackages, setBuyPackages] = useState([]);

  const fatchVideo = async () => {
    setLoading(true);
    try {
      const response = await GET.request({
        url: "/dashboard",
      });
      setVideoData(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error; // Throw the error for further handling
    }
  };

  const fatchBlogs = async () => {
    const data = {
      start: "0",
    };

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Fetched Blogs:", response.data);
      setLoading(false);
      setBlogs(response.data.data);

      // Assuming the API response contains the blogs in `data`
    } catch (error) {
      console.error(
        "Error fetching blogs:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    const item = localStorage.getItem("Token");
    const user = localStorage.getItem("LoginUser");
    const BuyPackageId = JSON.parse(user);

    console.log(BuyPackageId?.package_id , 'BuyPackageId?.package_id');
    
      setuserData(BuyPackageId?.package_id);
    if (item == null) {
      router.push("/login");
    } else {
    }

    const fatchFreeStoke = async () => {
      try {
        const response = await GET.request({
          url: "/package",
        });
        setpackages(response?.packages);
      } catch (error) {
        console.error("Error fetching video:", error);
        throw error;
      }
    };
    fatchFreeStoke();
    // setuserData(JSON.parse(user));
    fatchVideo();
    fatchBlogs();
  }, [router]);

  useEffect(() => {
    setLoading(true);
    if (userData) {
      const findPackage = packages?.find((item) => userData.includes(item.id));

      console.log(findPackage, "findPackage");

      const matchedPackages = packages?.filter((item) =>
        userData.includes(item.id)
      );

      if (findPackage) {
        setLoading(false);
        setBuyPackages(matchedPackages);
      } else {
        console.log("Package not found");
        setBuyPackages([]);
      }
    } else {
      console.log("No package_id in userData");
      setBuyPackages([]);
    }
  }, [packages, userData]);

  console.log(BuyPackages, "BuyPackages");

  return (
    <div>
      <DashboardHeader setpackages={setpackages} setuserData={setuserData} />
      {/* loading && */}
      <div className="cards mt-5">
        <div className="container">
          <div className="shadow-xl rounded-lg overflow-hidden">
            <div className="">
              <div className="header1 px-4 ">
                <p className="f18 fw_700 mb-0">
                  Quick links to Investment Thesis and Updates
                </p>
              </div>
              <div className="card_body">
                <div className="c_body py-4 px-3 flex justify-between">
                  <div className="left">
                    {loading ? (
                      <div className="loader">
                        <ClipLoader color="#1A2A5B" size={30} />
                      </div>
                    ) : (
                      BuyPackages?.map((e, ind) => {
                        return (
                          <Link
                            href={`/dashboard/packageStoke/${e.id}`}
                            className="flex items-center gap-2 my-3"
                            key={ind}
                          >
                            <Image
                              src={"/images/dashboard/downloadicon.svg"}
                              width={20}
                              height={20}
                              alt="logo"
                              className="img-fluid"
                            />{" "}
                            <p className="f18 fw_700  underline mb-0">
                              {e.name}
                            </p>{" "}
                          </Link>
                        );
                      })
                    )}

                    <Link
                      href="/dashboard/recent-updates"
                      className="flex items-center gap-2 mt-3"
                    >
                      <Image
                        src={"/images/dashboard/downloadicon.svg"}
                        width={20}
                        height={20}
                        alt="logo"
                        className="img-fluid"
                      />{" "}
                      <p className="f18 underline mb-0">Result Updates</p>{" "}
                    </Link>
                  </div>
                  <div className="right">
                    {/* <div className="flex items-center gap-2 mt-3">
                      <Image
                        src={"/images/dashboard/message.svg"}
                        width={20}
                        height={20}
                        alt="logo"
                        className="img-fluid"
                      />{" "}
                      <p className="f18 mb-0 text_body">
                        Download{" "}
                        <Link href="#" className="!underline">
                          Investment Checklist
                        </Link>{" "}
                        for Long-term Investing.
                      </p>{" "}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="shadow-xl rounded-lg overflow-hidden">
            <div className="">
              <div className="bg-gray-200 px-4 ">
                <p className="f18 fw_700 mb-0 py-3">
                  Some Interesting Videos You Must Watch
                </p>
              </div>
              <div className="card_body ">
                {loading ? (
                  <div className="loader">
                    <ClipLoader color="#1A2A5B" size={30} />
                  </div>
                ) : (
                  VideoData && <VideoGallery VideoData={VideoData} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-52">
          <div className="shadow-xl rounded-lg overflow-hidden">
            <div className="">
              <div className="bg-gray-200 px-4 ">
                <p className="f18 fw_700 mb-0 py-3">
                  Top Blogpost by SA's Research Team
                </p>
              </div>
              <div className="card_body px-3 flex justify-between ">
                <div className="right my-3">
                  {loading ? (
                    <div className="loader">
                      <ClipLoader color="#1A2A5B" size={30} />
                    </div>
                  ) : (
                    Blogs?.map((e, i) => {
                      return (
                        <div key={i}>
                          <div className="flex items-center gap-2 my-2">
                            <span>&gt;</span>
                            <Link
                              href={`/blog/${e?.id}`}
                              className="!underline"
                            >
                              {e?.title}
                            </Link>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                <div className="left my-3">
                  <div className="box outline-dashed p-3 ">
                    <p className="fw_700 text_body">
                      For any queries please contact us
                    </p>
                    <p className="flex gap-1 items-center">
                      {" "}
                      <Image
                        src={"/images/dashboard/message.svg"}
                        width={20}
                        height={20}
                        alt="logo"
                        className="img-fluid"
                      />{" "}
                      hello@akcjcapital.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
