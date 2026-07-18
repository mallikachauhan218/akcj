import { useEffect, useState } from "react";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchBlog = async (id) => {
    const formData = new FormData();
    formData.append("id", id);
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/team_details`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);

      setTeam(response.data.Member);
    } catch (error) {
      // Check if the error has a response (indicating a server error like 404)

      if (error.response) {
        setLoading(false);
        const { status, data } = error.response;

        // Log the error status and message
        console.error(`Error ${status}:`, data);
        if (status === 404) {
          console.error("Resource not found (404).");
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Something else went wrong in setting up the request
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  useEffect(() => {
    if (Array.isArray(id) && id.length > 0) {
      const Member_id = id[0];
      fetchBlog(Member_id);
    }
  }, [id]);

  return (
    <>
      <div className="!overflow-x-hidden">
        <Header />
        {/* <h1>{id} title ID</h1> */}
        <div className="container">
          {loading ? (
            // Loading spinner or message
            <div className="flex justify-center items-center h-screen w-full">
              <div className="loader">
                <ClipLoader color="#1A2A5B" size={40} />
              </div>
            </div>
          ) : (
            <div className="p-[30px!important] position relative">
              <div className="absolute top-0 left-0 z-0">
                <Image
                  src={"/images/team_bg1.png"}
                  width={300}
                  height={300}
                  className=""
                  alt="close"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-0">
                <Image
                  src={"/images/team_bg2.png"}
                  width={100}
                  height={100}
                  className=""
                  alt="close"
                />
              </div>

              <div className="row flex items-center pb-[20px]">
                <div className="col-12 col-lg-4 z-1">
                  <Image
                    src={team?.photos}
                    className=""
                    width={500}
                    height={300}
                    alt="team"
                  />
                </div>
                <div className="col-12 col-lg-8 z-1 mt-5 mt-lg-4 px-3">
                  <div className="f56 text_main fw_700 mb-[8px]">Hello</div>
                  <div className="f36 text_red fw_700  flex gap-3">
                    <p>I'm {team?.name}</p>
                    <p>
                      {team?.linkdin && (
                        <Link
                          href={
                            team?.linkdin === null ||
                            team?.linkdin === undefined
                              ? "#"
                              : team?.linkdin
                          }
                          target="_blank"
                          className="text-black mt-[50%]"
                        >
                          <FaLinkedin
                            style={{ fontSize: "30px", marginBottom: "15px" }}
                          />
                        </Link>
                      )}
                    </p>
                  </div>
                  <p className="text-justify f24 mb-[40px]">
                    <b>Position</b> : {team?.position}
                  </p>
                  <div className="italic text-justify f24">
                    &quot;{team?.thoughts}&quot;
                  </div>
                  <hr />
                  <div className=" z-1">
                    <div className="f24 fw_600  mb-[8px]">About</div>
                    <div className="f14  text_body">{team?.description}</div>
                  </div>
                  <hr />
                  <div className=" z-1">
                    <div className="f24 fw_600  mb-[8px]">
                      Personal Interests
                    </div>
                    <div className="f14  text_body">{team?.interests}</div>
                  </div>
                </div>
              </div>
              <div className="row pt-[20px]"></div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
