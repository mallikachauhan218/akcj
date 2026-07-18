"use client";

import DashboardHeader from "@/components/common/header/DashboardHeader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import useToast from "@/tost/useToast";
import { ToastContainer } from "react-toastify";
import { POST } from "@/utils/api/post";
import { ClipLoader } from "react-spinners";

const Profile = () => {
  const router = useRouter();
  const showToast = useToast();
  const [user, setuser] = useState({});
  const [USERID, setUSERID] = useState("");
  const [UserData, setUserData] = useState();
  const [PassCheck, setPassCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: user?.id,
    fname: "",
    lname: "",
    conPass: "",
    email: "",
    phone: "",
    CurrentPass: "",
    NewPassword: "",
  });
  const [responses, setResponses] = useState({
    user_id: "",
    risk1: 0,
    risk2: 0,
    risk3: 0,
    risk4: 0,
    risk5: 0,
    risk6: 0,
    risk7: 0,
    risk8: 0,
    risk9: 0,
  });

  const [emailAlerts, setEmailAlerts] = useState({
    user_id: "",
    blog_update: 0,
    promotons_offers: 0,
    stoke_update: 0,
  });

  const handleForm1Change = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForm2Change = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("id", user.id);
    formdata.append("fname", formData.fname);
    formdata.append("lname", formData.lname);
    formdata.append("phone", formData.phone);
    formdata.append("email", formData.email);
    formdata.append("password", formData.NewPassword);
    formdata.append("conPass", formData.conPass);
    formdata.append("CurrentPass", formData.CurrentPass);

    const postData = async () => {
      setLoading(true);
      try {
        const response = await POST.request({
          form: formdata,
          url: "/update_profile",
        });

        if (response.status === "0") {
          setLoading(false);
          showToast(response.message, "error");
        } else {
          setLoading(false);
          showToast(response.message, "success");
        }
      } catch (err) {}
    };

    if (PassCheck === true) {
      postData();
    } else {
      showToast("The passwords do not match", "error");
    }
  };

  useEffect(() => {
    const item = localStorage.getItem("Token");
    const user = localStorage.getItem("LoginUser");
    setuser(JSON.parse(user));
    if (item == null) {
      router.push("/login");
    } else {
    }
  }, [router]);

  useEffect(() => {
    const postData = async () => {
      const formdata = new FormData();
      formdata.append("id", user.id);

      try {
        const response = await POST.request({
          form: formdata,
          url: "/profile",
        });
        console.log("response", response.Profile_Risk);

        if (response) {
          setUserData(response?.user);
          setFormData({
            id: user.id,
            fname: response?.user?.first_name,
            lname: response?.user?.last_name,
            email: response?.user?.email,
            phone: response?.user?.phone,
            conPass: "",
            CurrentPass: "",
            NewPassword: "",
          });
          setEmailAlerts({
            user_id: user.id,
            blog_update: response?.Email_Alerts?.blog_update,
            promotons_offers: response?.Email_Alerts?.promotons_offers,
            stoke_update: response?.Email_Alerts?.stoke_update,
          });
          setResponses({
            user_id: user.id,
            risk1: response?.Profile_Risk?.risk1,
            risk2: response?.Profile_Risk?.risk2,
            risk3: response?.Profile_Risk?.risk3,
            risk4: response?.Profile_Risk?.risk4,
            risk5: response?.Profile_Risk?.risk5,
            risk6: response?.Profile_Risk?.risk6,
            risk7: response?.Profile_Risk?.risk7,
            risk8: response?.Profile_Risk?.risk8,
            risk9: response?.Profile_Risk?.risk9,
          });
        }
      } catch (err) {}
    };

    if (user?.id !== "" && user?.id !== null && user?.id !== undefined) {
      postData();
      setUSERID(user.id);
    }
  }, [user]);

  useEffect(() => {
    if (formData.CurrentPass == formData.NewPassword) {
      setPassCheck(true);
    } else {
      setPassCheck(false);
    }
  }, [formData]);

  useEffect(() => {
    setResponses((prevResponses) => ({
      ...prevResponses, // Keep other values unchanged
      user_id: USERID || "", // Update user_id with the new value
    }));

    setEmailAlerts((prevResponses) => ({
      ...prevResponses, // Keep other values unchanged
      user_id: USERID || "",
    }));
  }, [USERID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({
      ...prev,
      [name]: parseInt(value, 10), // Convert string value to integer
    }));
  };

  const handleRiskPost = async (Riskdata) => {
    const data = Riskdata;
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/update_risk`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status == 0) {
        setLoading(false);
        showToast(response.data.message, "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setLoading(false);
        showToast(response.data.message, "error");
      }

      // Assuming the API response contains the blogs in `data`
    } catch (error) {
      console.error(
        "Error fetching blogs:",
        error.response?.data || error.message
      );
    }
  };

  const handleRiskSubmit = (e) => {
    e.preventDefault();
    // console.log(responses); // Replace with your desired logic
    if (USERID !== undefined) {
      handleRiskPost(responses);
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target; // Get checkbox ID and checked status
    setEmailAlerts((prevState) => ({
      ...prevState, // Retain other fields
      [id]: checked ? 1 : 0, // Update the field based on checkbox status
    }));
  };

  const handleEmailAlertsPost = async (emailalertsData) => {
    const data = emailalertsData;
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/update_emailAlerts`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Fetched Blogs:", response);

      if (response.data.status == 0) {
        setLoading(false);
        showToast(response.data.message, "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setLoading(false);
        showToast(response.data.message, "error");
      }

      // Assuming the API response contains the blogs in `data`
    } catch (error) {
      console.error(
        "Error fetching blogs:",
        error.response?.data || error.message
      );
    }
  };

  // Handle form submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email Alerts:", emailAlerts);

    if (USERID !== undefined) {
      handleEmailAlertsPost(emailAlerts);
    }
  };

  return (
    <>
      <DashboardHeader />
      <ToastContainer />
      <div className="container mt-20">
        <Tabs>
          <TabList
            className="flex flex-wrap  gap-2 items-center overflow-x-auto bg-gray-100 p-2 rounded-lg"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              Profile
            </Tab>
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              Email Alerts
            </Tab>
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              SMS Alerts
            </Tab>
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              Risk Profile
            </Tab>
          </TabList>

          <TabPanel>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 ">
                <div className="fild flex gap-2 ">
                  <span className="f14 fw_700">Email :</span>{" "}
                  <p className="text_body">{formData?.email}</p>
                </div>
                <div className="fild flex gap-2 ">
                  <span className="f14 fw_700">Phone :</span>{" "}
                  <p className="text_body">{formData?.phone}</p>
                </div>

                <form action="" onSubmit={handleSubmit}>
                  <div className="fild flex gap-2 items-center my-3">
                    <span className="f14 fw_700">First Name :</span>{" "}
                    <div className="col-5 ">
                      <input
                        type="text"
                        className="form-control !rounded-none"
                        placeholder="First Name"
                        value={formData?.fname}
                        onChange={handleForm1Change}
                        name="fname"
                      />
                    </div>
                  </div>

                  <div className="fild flex gap-2 items-center my-3">
                    <span className="f14 fw_700">Last Name :</span>{" "}
                    <div className="col-5 ">
                      <input
                        type="text"
                        className="form-control !rounded-none"
                        placeholder="Last Name"
                        value={formData?.lname}
                        onChange={handleForm1Change}
                        name="lname"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="min_heading"> Change Password </div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="bg-gray-100 px-3 py-2 mt-3">
                    <div className="fild flex gap-2 items-center my-3">
                      <span className="f14 fw_700">Current Password :</span>{" "}
                      <div className="col-5 ">
                        <input
                          type="password"
                          className="form-control !rounded-none"
                          placeholder="Current Password"
                          onChange={handleForm1Change}
                          value={formData.conPass}
                          name="conPass"
                        />
                      </div>
                    </div>
                    <span className="text_body">
                      <i>
                        (we need your current password to confirm your changes)
                      </i>
                    </span>
                    <div className="fild flex gap-2 items-center my-3">
                      <span className="f14 fw_700">Password :</span>{" "}
                      <div className="col-5 ">
                        <input
                          type="password"
                          className="form-control !rounded-none"
                          placeholder="Password"
                          onChange={handleForm2Change}
                          name="CurrentPass"
                          value={formData.CurrentPass}
                        />
                      </div>
                    </div>
                    <span className="text_body">
                      <i>(leave blank if you don&rsquo;t want to change it)</i>
                    </span>
                    <div className="fild flex gap-2 items-center my-3">
                      <span className="f14 fw_700">
                        Password Confirmation :
                      </span>{" "}
                      <div className="col-5 ">
                        <input
                          type="password"
                          className="form-control !rounded-none"
                          placeholder="Confirm Password"
                          onChange={handleForm2Change}
                          name="NewPassword"
                          value={formData.NewPassword}
                        />
                        {PassCheck !== true && (
                          <p className="text-red-500 text-sm mt-1">
                            Passwords do not match
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
                <button
                  onClick={handleSubmit}
                  className="bg_red text-white py-2 mt-10 px-[32px] flex items-center rounded-[100px] arrow_card"
                >
                  <div className="f16 fw_600">
                    {loading ? (
                      <div className="loader">
                        <ClipLoader color="#ffffff" size={25} />
                      </div>
                    ) : (
                      "UPDATE"
                    )}
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
          </TabPanel>
          <TabPanel>
            <div className="min_heading mb-3">
              {" "}
              Your Notifications Preference{" "}
            </div>
            <form onSubmit={handleEmailSubmit}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="blog_update" // Match ID with object field
                  checked={emailAlerts.blog_update == 1}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="form-check-label fw_700 text_body"
                  htmlFor="blog_update"
                >
                  Blog Updates
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="promotons_offers" // Match ID with object field
                  checked={emailAlerts.promotons_offers == 1}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="form-check-label fw_700 text_body"
                  htmlFor="promotons_offers"
                >
                  Promotions & Offers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="stoke_update" // Match ID with object field
                  checked={emailAlerts.stoke_update == 1}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="form-check-label fw_700 text_body"
                  htmlFor="stoke_update"
                >
                  Stock Updates
                </label>
              </div>
              <button
                type="submit"
                className="bg_red text-white py-2 mt-10 px-[32px] flex items-center rounded-[100px] arrow_card"
              >
                <div className="f16 fw_600">
                  {loading ? (
                    <div className="loader">
                      <ClipLoader color="#ffffff" size={25} />
                    </div>
                  ) : (
                    "UPDATE"
                  )}
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
            </form>
          </TabPanel>
          <TabPanel>
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              SMS alerts are only available to Paid Subscribers.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </TabPanel>
          <TabPanel>
            <p className="f24 flex items-center gap-1 fw_400 text_body">
              Risk Profile <span class="badge bg-success">Medium to High</span>
            </p>
            <p className="f24 flex items-center gap-1 fw_400 text_body">
              Suitability <span class="badge bg-success">Yes</span>
            </p>
            <div className="f20 flex items-center text_body my-5">
              <div className="checkbox-container">
                <label className="custom-checkbox mr-2">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              I understand I am consulting Stalwart Investment Advisors only for
              their equity research reports to assist me with my direct equity
              portfolio. I have a holistic view on asset-allocation myself or
              through the help of a financial planner.
            </div>

            <div class="alert alert-success text-center f20" role="alert">
              Click here to{" "}
              <button type="button" class="btn btn-primary btn-sm">
                Upgrade to Packages
              </button>
            </div>

            <form onSubmit={handleRiskSubmit}>
              <div>
                <h4 className="min_heading">
                  Eligibility Criteria (Mandatory)
                </h4>
                <hr />

                {[
                  {
                    name: "risk1",
                    question:
                      "I have a portfolio which is over Rs 10 lacs (otherwise Index or Mutual Fund, via monthly SIP, could be a more cost-effective way to invest in a diversified portfolio).",
                  },
                  {
                    name: "risk2",
                    question:
                      "I don’t need this capital for at least the next three years (longer the better).",
                  },
                  {
                    name: "risk3",
                    question:
                      "I am investing for capital appreciation to beat inflation (instead of generating regular income).",
                  },
                  {
                    name: "risk4",
                    question:
                      "I understand these returns will not be steady but lumpy with some negative years too.",
                  },
                  {
                    name: "risk5",
                    question:
                      "I have the ability to stomach volatility and wouldn’t panic seeing my portfolio temporarily go down even by 30-40%.",
                  },
                ].map(({ name, question }) => (
                  <div className="row my-3 text_body" key={name}>
                    <div className="col">
                      <div className="redio-container flex gap-6 justify-center">
                        <label className="custom-radio">
                          <input
                            type="radio"
                            name={name}
                            value={0} // Yes = 0
                            checked={responses[name] === 0}
                            onChange={handleChange}
                          />
                          <span className="radio-checkmark"></span> Yes
                        </label>
                        <label className="custom-radio">
                          <input
                            type="radio"
                            name={name}
                            value={1} // No = 1
                            checked={responses[name] === 1}
                            onChange={handleChange}
                          />
                          <span className="radio-checkmark"></span> No
                        </label>
                      </div>
                    </div>
                    <div className="col-11 f20">{question}</div>
                  </div>
                ))}

                <h4 className="min_heading mt-10">
                  Additional Conditions (Preferable)
                </h4>
                <hr />

                {[
                  {
                    name: "risk6",
                    question:
                      "I have an adequate health insurance policy for myself as well as my dependents (Ideally at least Rs 5 lacs per person).",
                  },
                  {
                    name: "risk7",
                    question:
                      "I have a life insurance policy (term plan) which is at least 10 times my annual income.",
                  },
                  {
                    name: "risk8",
                    question:
                      "I have six months of household expenses as Emergency Fund.",
                  },
                  {
                    name: "risk9",
                    question:
                      "I have no outstanding high-cost loans like Credit Card or Education Loan.",
                  },
                ].map(({ name, question }) => (
                  <div className="row my-3 text_body" key={name}>
                    <div className="col">
                      <div className="redio-container flex gap-6 justify-center">
                        <label className="custom-radio">
                          <input
                            type="radio"
                            name={name}
                            value={0} // Yes = 0
                            checked={responses[name] === 0}
                            onChange={handleChange}
                          />
                          <span className="radio-checkmark"></span> Yes
                        </label>
                        <label className="custom-radio">
                          <input
                            type="radio"
                            name={name}
                            value={1} // No = 1
                            checked={responses[name] === 1}
                            onChange={handleChange}
                          />
                          <span className="radio-checkmark"></span> No
                        </label>
                      </div>
                    </div>
                    <div className="col-11 f20">{question}</div>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="bg_red text-white py-2 mt-10 px-[32px] flex items-center rounded-[100px] arrow_card"
              >
                <div className="f16 fw_600">
                  {loading ? (
                    <div className="loader">
                      <ClipLoader color="#ffffff" size={25} />
                    </div>
                  ) : (
                    "UPDATE RESPONSES"
                  )}
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
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
