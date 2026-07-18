import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Auth } from "@/utils/api/authenticate";
import useToast from "@/tost/useToast";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

function Signup() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const showToast = useToast();

  const [RegisterData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...RegisterData,
      [name]: value,
    });
  };

  const handleMobileNumber = (value) => {
    setRegisterData({
      ...RegisterData,
      number: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !RegisterData.first_name ||
      !RegisterData.last_name ||
      !RegisterData.email ||
      !RegisterData.number ||
      !RegisterData.password ||
      !RegisterData.confirmPassword
    ) {
      showToast("Please fill all fields", "error");
      return;
    }
    
    if (RegisterData.password === RegisterData.confirmPassword) {
      
      Auth.handleForm({
        form: e,
        url: "/register",
        type: "Add User",
        post: post,
      });
    } else {
      showToast("Passwords do not match!", "error");
    }

    console.log(RegisterData);
  };

  const post = (data) => {
    setLoading(true)
    Auth.user(data)
      .then((resp) => {
        if (resp.status == "1") {
          console.log(resp.message);
          setLoading(false)
          showToast(resp.message, "error");
        } else if (resp.status == "0") {
          setLoading(false)
          console.log(resp.message, "sucess");
          showToast(resp.message, "success");
          setRegisterData({
            first_name: "",
            last_name: "",
            email: "",
            number: "",
            password: "",
            confirmPassword: "",
          });
          setTimeout(() => {
            router.push("/login");
          }, 2000); 
          
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="h-screen w-screen overflow-auto container-fluid p-0">
      <ToastContainer />
      <div className="row mx-0">
        <div className="col-lg-9 d-lg-block d-none px-0">
          <div className="login_bg"></div>
        </div>
        <div className="col-lg-3 px-0">
          <div className=" flex-col flex h-screen ">
            <div className="h-screen flex flex-col justify-center items-center" data-aos="fade-right">
              <Link href="/">
                <Image
                  src={"/images/footer_logo.svg"}
                  width={200}
                  height={200}
                  className="img-fluid mb-[48px]"
                  alt="logo"
                />
              </Link>

              <div className="f32 fw_700 text_blue mb-[8px]">Sign Up</div>
              <div className="flex items-center mb-[32px]">
                <div className="f16 text_body mr-2">Already Registered?</div>
                <Link href="/login" className="text_red">
                  {" "}
                  Login{" "}
                </Link>
              </div>

              <form
                id="signup_form"
                className="login_form px-[48px]"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-[20px]"
                      placeholder="First Name"
                      name="first_name"
                      value={RegisterData.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-[20px]"
                      placeholder="Last Name"
                      name="last_name"
                      value={RegisterData.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-[20px]"
                      placeholder="Email Address"
                      name="email"
                      value={RegisterData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <PhoneInput
                      country="in"
                      value={RegisterData.number}
                      onChange={handleMobileNumber}
                      inputProps={{
                        name: "number",
                        required: true,
                        autoFocus: true,
                      }}
                      inputClass="phonenumber_input border-0 rounded-0"
                      containerStyle={{
                        width: "100%",
                        marginBottom: "10px",
                        backgroundColor: "white",
                      }}
                      inputStyle={{
                        width: "100%",
                        padding: "18px 45px",
                        borderRadius: "4px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                        borderRadius: "12px",
                        backgroundColor: "white",
                      }}
                      className="form-input"
                      enableSearch={true}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control mb-[20px]"
                      placeholder="Password"
                      name="password"
                      value={RegisterData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control mb-[20px]"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={RegisterData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <div className="flex justify-center items-center">
                      <button
                        type="submit"
                        className="bg_red text-white py-3 w-100 flex items-center justify-center rounded-[100px] arrow_card"
                      >
                        <div className="f16 fw_600 text-center">
                          {loading ? <div className="loader">
                              <ClipLoader color="#ffffff" size={25} />
                            </div> : "Signup"}
                          </div>
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

export default Signup;
