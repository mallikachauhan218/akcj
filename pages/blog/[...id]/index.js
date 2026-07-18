import blogData from "@/components/blogs/blogdata";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import { POST } from "@/utils/api/post";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { CiShare2 } from "react-icons/ci";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";
import Link from "next/link";

function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(true);

  const url = `https://akcj.vercel.app/blog/${id}`;

  useEffect(() => {
    if (id && Array.isArray(id)) {
      const newId = id[0];
      console.log(newId, "newId");
      fetchBlog(newId);
    }
  }, [id]);

  const fetchBlog = async (id) => {
    console.log(id, "blogid");

    const formData = new FormData();
    formData.append("id", id);

    console.log(formData.get("id"), "formData id");
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/blog_details`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data.Blog_detail);
      setLoading(false);
      setBlogPost(response.data.Blog_detail);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div className="loader">
          <ClipLoader color="#1A2A5B" size={40} />
        </div>
      </div>
    );
  }

  const handleshare = () => {
   
    console.log("Button clicked!");
  };

  return (
    <>
     <div className="!overflow-x-hidden">
     <Header />
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <div className="loader">
            <ClipLoader color="#1A2A5B" size={40} />
          </div>
        </div>
      ) : (
        <div className="container pb-[60px] pt-[30px]">
          <div className="col-2">
            <Link
              href={"/blogs"}
              className="!text-[#a71e28] py-3 px-[32px] flex items-center rounded-[100px] border-1 border-[#a71e28] arrow_card hover:bg-[#a71e28] hover:!text-white duration-500"
            >
              <div className="f16 fw_600 flex items-center gap-1">
                <IoArrowBackOutline size={20} /> <span>Back To All Blog</span>
              </div>
              <div className="arrow_img"></div>
            </Link>
          </div>
          <h1 className="text-center mb-4 mt-4">{blogPost.title}</h1>
          <Image
            src={blogPost.image}
            width={700}
            height={200}
            className="mb-4 mx-auto"
            alt="blog1"
          />
          {/* <div className="row">
            <div className="col-4 border-2 border-red-500 py-4">
              <div className="row">
                <div className="col-2">
                  <Image
                    src="/images/user.png"
                    width={50}
                    height={50}
                    className="img-fluid ms-1"
                    alt="arrow"
                  />
                </div>
                <div className="col-10">
                  <h6>{blogPost.writen_by}</h6>
                  <h6 className="text-gray-500">{blogPost.writer_status}</h6>
                </div>
              </div>
              <hr />
              <p>{blogPost.read_time} MIN Read In</p>
              <p>Published - {blogPost.date_posted}</p>
              <hr />
              <CiShare2 />
            </div>

            <div className="col-8">
              <div className="blog-post">
                <h1 className="blog-title">{blogPost.title}</h1>

                <div
                  className="blog-description"
                  dangerouslySetInnerHTML={{
                    __html: blogPost.description,
                  }}
                ></div>
                <p className="blog-date">
                  Posted on: {new Date(blogPost.date_posted).toDateString()}
                </p>
              </div>
            </div>
          </div> */}
          <div className="row">
            {/* Left Column - Sticky */}
            <div className="col-4 py-4 sticky top-4 h-fit">
              <div className="row">
                <div className="col-2">
                  <Image
                    src="/images/user.png"
                    width={50}
                    height={50}
                    className="img-fluid ms-1"
                    alt="arrow"
                  />
                </div>
                <div className="col-10">
                  <h6 className="uppercase">{blogPost.writen_by}</h6>
                  <h6 className="text-gray-500">{blogPost.writer_status}</h6>
                </div>
              </div>
              <hr />
              <p>
                <span>
                  <b>{blogPost.read_time} MIN</b>
                </span>{" "}
                Read In
              </p>
              <p>
                <span>
                  <b>Published</b>
                </span>{" "}
                - {blogPost.date_posted}
              </p>
              <hr />
              <button onClick={handleshare}>
                <CiShare2 size={30} />
              </button>
              {clicked && (
                <div>
                  <div className="flex gap-3 mt-2">
                    <FacebookShareButton url={url}>
                      <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url={url}>
                      <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={url}>
                      <LinkedinIcon size={32} />
                    </LinkedinShareButton>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="col-8">
              <div className="blog-post">
                {/* <h1 className="blog-title">{blogPost.title}</h1> */}
                <div
                  className="blog-description"
                  dangerouslySetInnerHTML={{
                    __html: blogPost.description,
                  }}
                ></div>
                <p className="blog-date">
                  Posted on: {new Date(blogPost.date_posted).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
     </div>
    </>
  );
}

export default Blog;
