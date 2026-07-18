import Banner from "@/components/banner/banner";
import Blogcard from "@/components/blogs/blogcard";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Pagination from "@/components/common/pagination/pagination";
import { GET } from "@/utils/api/get";
import { POST } from "@/utils/api/post";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

function Blogs() {
  const [range, setRange] = useState(1);
  const [activeIndex, setActiveIndex] = useState("");
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const onPageChange = async (pageIndex) => {
    fatchBlogs(pageIndex);
    console.log(pageIndex);
  };

  const fatchBlogs = async (pageIndex) => {
    const data = {
      start: `${pageIndex}`,
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
      setRange(response.data.pagination.totalBlogs);
      setCount(response.data.pagination.totalCount);
      setActiveIndex(response.data.pagination.page);
      // Assuming the API response contains the blogs in `data`
    } catch (error) {
      console.error(
        "Error fetching blogs:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fatchBlogs(0);
  }, [range]);

  return (
    <>
      <div className="!overflow-x-hidden">
      <Header />
      <Banner title={"Blogs"} bannerClass={"blog_banner"} />

      <div className="container py-[60px] !overflow-x-hidden">
        <div className="row mx-0 ">
          {loading ? (
            <div className="flex justify-center items-center h-screen w-full ">
              <div className="loader">
                <ClipLoader color="#1A2A5B" size={40} />
              </div>
            </div>
          ) : (
            blogs?.map((blog) => (
              <Blogcard
                key={blog.id}
                src={blog.image}
                id={blog.id}
                title={blog.title}
              />
            ))
          )}

          <div className={`${blogs.length === 0 ? "d-none" : "d-block"}`}>
            <div className="d-flex justify-center flex-column mt-4">
              <Pagination
                range={range}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                startParam="start"
                onPageChange={onPageChange}
              />

              <div className="text-14 text-center mt-20">
                Showing Result {activeIndex + 1} - {blogs.length} of {count}
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

export default Blogs;
