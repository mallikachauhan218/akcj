import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Auth } from "@/utils/api/authenticate";
import useToast from "@/tost/useToast";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

function Login() {
  const currentYear = new Date().getFullYear();

  const router = useRouter();

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [ProductLogin, setProductLogin] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getproductLogin = localStorage.getItem("ProductRedirect");
    console.log(getproductLogin, "getLogin");

    setProductLogin(JSON.parse(getproductLogin));
  }, []);

  const showToast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (FormData.email == "" || FormData.password == "") {
      showToast("Please fill all fields", "error");
      return;
    }
    Auth.handleForm({ form: e, url: "/login", type: "Add User", post: post });
    console.log(FormData);
  };

  const post = (data) => {
    setLoading(true)
    Auth.user(data)
      .then((resp) => {
        if (resp.status == "0") {
          setLoading(false)
          showToast(resp.message, "success");
          localStorage.setItem("LoginUser", JSON.stringify(resp.user));
          localStorage.setItem("Token", JSON.stringify(resp?.user?.token));
          localStorage.setItem("LoginCheck", true);
          setTimeout(() => {
            if (ProductLogin === true) {
              router.push("/product-and-services");
            } else {
              router.push("/dashboard");
            }
          }, 3000);
        } else if (resp.status == "1") {
          setLoading(false)
          showToast(resp.message, "error");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="h-screen w-screen !overflow-x-hidden container-fluid p-0">
      <ToastContainer />
      <div className="row mx-0">
        <div className="col-lg-9 d-lg-block d-none px-0">
          <div className="login_bg"></div>
        </div>
        <div className="col-lg-3 px-0">
          <div className=" flex-col flex h-screen ">
            <div
              className="h-screen flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Link href="/">
                <Image
                  src={"/images/footer_logo.svg"}
                  width={200}
                  height={200}
                  className="img-fluid mb-[48px]"
                  alt="logo"
                />
              </Link>
              <div className="f32 fw_700 text_blue mb-[8px]">Login</div>
              <div className="flex items-center mb-[32px]">
                <div className="f16 text_body mr-2">New User?</div>
                <Link href="/signup" className="text_red">
                  {" "}
                  Create an account{" "}
                </Link>
              </div>

              <form
                id="login_form"
                className="login_form px-[48px]"
                onSubmit={handleLogin}
              >
                <div className="row">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-[32px] "
                      placeholder="Email Address"
                      onChange={handleChange}
                      value={FormData.email}
                      name="email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control mb-[32px]"
                      placeholder="Password"
                      onChange={handleChange}
                      value={FormData.password}
                      name="password"
                    />
                  </div>
                  <div className="col-12">
                    <div className="flex justify-center items-center">
                      <button
                        type="submit"
                        className="bg_red text-white py-3 w-100 flex  items-center justify-center rounded-[100px] arrow_card"
                      >
                        <span className="f16 fw_600 text-center ">
                          {/* <Link href="/dashboard" className="text-white"> */}
                          {loading ? (
                            <div className="loader">
                              <ClipLoader color="#ffffff" size={25} />
                            </div>
                          ) : (
                            "Login"
                          )}

                          {/* </Link> */}
                        </span>

                        <div className="arrow_img">
                          <Image
                            src="/images/search_arrow.svg"
                            width={20}
                            height={20}
                            className="img-fluid ms-1"
                            alt="arrow"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="text-center text_body mb-2">
              © {currentYear} All Rights Reserved. <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
