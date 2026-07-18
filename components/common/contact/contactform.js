
import useToast from "@/tost/useToast";
import { GET } from "@/utils/api/get";
import { POST } from "@/utils/api/post";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ClipLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

function Contactform({ showImage }) {
  const showTost = useToast();

  const [PackageNames, setPackageNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fatchFreeStoke = async () => {
    try {
      const response = await GET.request({
        url: "/package",
      });
      setPackageNames(response?.packages);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error;
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    selectOption: "",
    comment: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const submiteDetails = async () => {
    const formData1 = new FormData();
    formData1.append("firstName", formData.firstName);
    formData1.append("lastName", formData.lastName);
    formData1.append("company", formData.company);
    formData1.append("email", formData.email);
    formData1.append("phone", formData.phone);
    formData1.append("selectOption", formData.selectOption);
    formData1.append("comment", formData.comment);

    setLoading(true)

    try {
      const response = await POST.request({
        url: "/contact_us",
        form: formData1, // Submit FormData here
      });

      if (response.status == "0") {
        showTost(response.message, "success");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          selectOption: "",
          comment: "",
          agree: false,
        });
        setLoading(false)
      } else {
        showTost(response.message, "error");
      }
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error;
    }
  };

  useEffect(() => {
    fatchFreeStoke();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormIncomplete = Object.values(formData).some(
      (value) => value === "" || value === false
    );

    if (isFormIncomplete) {
      showTost("All fields are required.", "error"); // Show error toast
    } else {
      submiteDetails(); // Proceed with submission
    }

    // Add form submission logic here
  };

  return (
    <div className="row mx-0 flex items-center g-5">
      <ToastContainer />
      <div
        className={`col-lg-6 ${showImage ? "d-lg-block d-none px-0" : ""}`}
        data-aos="fade-right"
      >
        <Image
          src={"/images/contact1.jpg"}
          width={500}
          height={500}
          className={`col-lg-5 ${
            showImage ? " w-100 h-[70vh]" : "img-fluid w-100"
          }`}
          alt="contactus"
        />
      </div>
      <div className="col-lg-6" data-aos="fade-left">
        {showImage && (
          <div className="f32 fw_700  mb-[20px] text-center">
            Get A Call Back
          </div>
        )}
        <div className="border-[1px] border-[#c2c2c2] py-[32px] px-[48px]">
          <form id="contact_form" onSubmit={handleSubmit}>
            <div className="row flex">
              <div
                className={`col-6 position-relative inputDiv ${
                  formData.showImage ? "mb-[10px]" : "mb-[24px]"
                }`}
              >
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="First Name *"
                />
              </div>
              <div
                className={`col-6 ${
                  formData.showImage ? "mb-[10px]" : "mb-[24px]"
                }`}
              >
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Last Name *"
                />
              </div>

              <div
                className={`col-6 ${
                  formData.showImage ? "mb-[10px]" : "mb-[24px]"
                }`}
              >
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Company"
                />
              </div>

              <div
                className={`col-6 ${
                  formData.showImage ? "mb-[10px]" : "mb-[24px]"
                }`}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Email Address *"
                />
              </div>

              <div
                className={`col-6 ${
                  formData.showImage ? "mb-[10px]" : "mb-[24px]"
                }`}
              >
                <PhoneInput
                  country="in"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
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
                    padding: "27px 45px",
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
              <div
                className={`col-6 ${
                  formData.showImage ? "mb-[10px]" : "mb-[24px]"
                }`}
              >
                <select
                  className="form-select rounded-0 py-[14px!important]"
                  style={{ borderWidth: "0 0 1px 0", borderColor: "#c2c2c2" }}
                  aria-label="Default select example"
                  name="selectOption"
                  value={formData.selectOption}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  {PackageNames.map((product, index) => {
                    return (
                      <option value={product?.name} key={index}>
                        {product?.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div
                className={`col-12 ${
                  formData.showImage ? "mb-[10px]" : "mb-[24px]"
                }`}
              >
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="form-control pt-0"
                  placeholder="Comment"
                  rows="5"
                ></textarea>
              </div>

              <div className="form-check pl-[2.5rem!important]">
                <input
                  className="form-check-input mb-[32px]"
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  id="agreeCheck"
                />
                <label className="form-check-label f16" htmlFor="agreeCheck">
                  I agree to Privacy Policy and Terms & Conditions
                </label>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="bg_red text-white py-3 px-[32px] flex items-center rounded-[100px] arrow_card"
                >
                  <div className="f16 fw_600">{loading === true ?  <div className="loader">
                    <ClipLoader color="#fffff" size={25} />
                  </div> : 'Submit Now' }</div>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
