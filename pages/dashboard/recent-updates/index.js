"use client";

import DashboardHeader from "@/components/common/header/DashboardHeader";
import { AiOutlineFilePdf } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GET } from "@/utils/api/get";
import { ClipLoader } from "react-spinners";

function Recentupdates() {
  const recent_update = [
    {
      document_name: "Q2FY25 RU",
      Co_name: "Usha Martin Ltd.",
      Doc_type: 0,
      Date: "November, 2024",
    },
    {
      document_name: "Q1FY25 RU",
      Co_name: "Sandhar Technologies Limited",
      Doc_type: 1,
      Date: "August, 2024",
    },
    {
      document_name: "Exit Note - Suven Pharma",
      Co_name: "Suven Pharmaceuticals Ltd.",
      Doc_type: 0,
      Date: "August, 2024",
    },
    {
      document_name: "Q4FY24 RU",
      Co_name: "Suven Pharmaceuticals Ltd.",
      Doc_type: 1,
      Date: "June, 2024",
    },
  ];

  const [Update, setUpdate] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const item = localStorage.getItem("Token");
    console.log(item, "item");
    if (item == null) {
      router.push("/login");
    } else {
    }
  }, [router]);

  const fatchFreeStoke = async () => {
    setLoading(true);
    try {
      const response = await GET.request({
        url: "/recent_updates",
      });
      setLoading(false);
      setUpdate(response?.recent_update);

      // setpackages(response?.packages)
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error;
    }
  };

  useEffect(() => {
    fatchFreeStoke();
  }, []);

  return (
    <>
      <DashboardHeader />

      <div className="container py-[60px]">
        <div className="f42 text_red fw_700 mb-[20px]">Recent Updates</div>

        <div className="border-1 p-3">
          {loading ? (
            <div className="loader">
              <ClipLoader color="#1A2A5B" size={30} />
            </div>
          ) : (
            Update.map((elm) => {
              return (
                <>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex w-full justify-between">
                        <div className="left">
                          <p className="flex gap-1 items-center mb-0">
                            {/* {elm.Doc_type === 0 ? <AiOutlineFilePdf /> : <IoDocumentText /> } <Link href="#">{elm.document_name}</Link> */}
                            {<AiOutlineFilePdf />}{" "}
                            <Link href={elm.file} target="_blank">
                              {elm.name}
                            </Link>
                          </p>
                          <p className="mb-0">{elm.description}</p>
                        </div>
                        <div className="right">
                          <p className="bg-gray-500 rounded-full px-3 text-white">
                            {elm.created_at}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Recentupdates;
