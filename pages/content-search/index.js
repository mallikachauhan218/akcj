import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const Index = () => {
  const router = useRouter();
  const { key } = router.query; // Extract the 'key' query parameter
  const [searchKey, setSearchKey] = useState("");
  const [SearchBlog, setSearchBlog] = useState([]);
  const [SearchPackages, setSearchPackages] = useState([]);
  const [SearchFaq, setSearchFaq] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlog = async () => {
    const formData = new FormData();
    formData.append("keyword", searchKey);
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/search_content`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      setSearchBlog(response.data.Blogs);
      setSearchPackages(response.data.Packages);
      setSearchFaq(response.data.Faq);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    if (key) {
      setSearchKey(key.toLowerCase()); // Update state with the key if it exists
    }
  }, [key]);

  useEffect(() => {
    if (searchKey !== "") {
      fetchBlog();
    }
  }, [searchKey]);

  console.log(SearchBlog.length, "SearchBlog.length");
  console.log(SearchFaq.length, "SearchFaq.length");
  console.log(
    SearchPackages.map((e) => e.name),
    "SearchPackages"
  );

  return (
    <>
      <div className="bg-[#F4F4F4] !overflow-x-hidden">
        <Header />
        <div className="container mt-4 mb-10 ">
          <p className="text-2xl font-bold">
            Your search : <span className="text-[#A71E28]">'{searchKey}' </span>{" "}
          </p>
          {loading ? (
            <div className="flex justify-center items-center h-screen w-full">
              <div className="loader">
                <ClipLoader color="#1A2A5B" size={40} />
              </div>
            </div>
          ) : (
            <div className="">
              {SearchBlog.length != 0 && (
                <div className="my-5">
                  <h1 className="my-2">Blog</h1>
                  <div className=" ">
                    {SearchBlog.map((e, ind) => {
                      return (
                        <div
                          className="bg-white w-full h-[90px] my-3 flex items-center px-4 "
                          key={ind}
                          data-aos="fade-up"
                        >
                          <Link
                            href={`/blog/${e.id}`}
                            className="text-xl text-black hover:!text-[#A71E28] duration-200"
                          >
                            {e.title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {SearchFaq.length != 0 && (
                <div className="my-5">
                  <h1 className="my-2">Faq</h1>
                  <div className=" ">
                    {SearchFaq.map((e, ind) => {
                      return (
                        <div
                          className="bg-white w-full h-[90px] my-3 flex items-center px-4 hover:!text-[#A71E28] duration-200"
                          key={ind}
                          data-aos="fade-up"
                        >
                          <Link
                            href={`/faq`}
                            className="text-xl text-black hover:!text-[#A71E28] duration-200"
                          >
                            {e.heading}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {SearchPackages.length != 0 && (
                <div className="my-5">
                  <h1 className="my-2">Packages</h1>
                  <div className=" ">
                    {SearchPackages.map((e, ind) => {
                      return (
                        <div
                          className="bg-white w-full h-[90px] my-3 flex items-center px-4 hover:!text-[#A71E28] duration-200"
                          key={ind}
                          data-aos="fade-up"
                        >
                          <Link
                            href={`/product-and-services`}
                            className="text-xl text-black hover:!text-[#A71E28] duration-200"
                          >
                            {e.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {SearchBlog.length == 0 &&
        SearchFaq.length == 0 &&
        SearchPackages.length == 0 ? (
          <>
            <h1 className="text-center my-10">Search Data Was Not Found</h1>
          </>
        ) : (
          ""
        )}

        <Footer />
      </div>
    </>
  );
};

export default Index;
