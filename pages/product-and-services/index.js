import Banner from "@/components/banner/banner";
import FixedArrow from "@/components/common/FixedArrow/FixedArrow";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Discountcard from "@/components/product/discountcard";
import { GET } from "@/utils/api/get";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";

function Productandservices() {
  const scrollableDivRef = useRef(null);

  const router = useRouter();

  const [selectedItems, setSelectedItems] = useState([]);

  const lastProductRef = useRef(null);

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [package1, setpackage1] = useState([]);
  const [Login, setLogin] = useState(false);
  const [BuyPackages, setBuyPackages] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("LoginUser");
    const BuyPackageId = JSON.parse(userData);

    // setBuyPackages(BuyPackageId?.package_id);

    if (BuyPackageId?.package_id) {
      setBuyPackages(BuyPackageId?.package_id);
    } else {
      setBuyPackages([]);
    }

    // BuyPackageId?.package_id.map((e) => {
    //   console.log(e, "e");

    //   // setSelectedItems(e)
    // });
  }, []);

  const fatchFreeStoke = async () => {
    try {
      const response = await GET.request({
        url: "/package",
      });

      setpackage1(response?.packages);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error; // Throw the error for further handling
    }
  };

  useEffect(() => {
    fatchFreeStoke();
  }, []);

  const handleArrowClick = () => {
    if (lastProductRef.current) {
      lastProductRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const toggleSelectItem = (index) => {
    console.log(index, "index");

    if (index !== undefined) {
      // This will allow index 0 to pass
      setSelectedItems((prev) => {
        if (prev.includes(index)) {
          return prev.filter((item) => item !== index); // Deselect item
        } else {
          return [...prev, index]; // Select item
        }
      });
    }
  };

  console.log(selectedItems, "selectedItems");

  const totalPrice = selectedItems.reduce((total, index) => {
    const packagePrice = package1[index]?.sales_price;

    return total + parseFloat(packagePrice || 0);
  }, 0);

  let discountPercentage = 0;

  if (selectedItems?.length === 2) {
    discountPercentage = 5;
  } else if (selectedItems?.length === 3) {
    discountPercentage = 10;
  } else if (selectedItems?.length === 4) {
    discountPercentage = 15;
  } else if (selectedItems?.length === package1?.length) {
    discountPercentage = 20;
  }

  // Apply discount
  const discount = (totalPrice * discountPercentage) / 100;
  const finalPrice = totalPrice - discount;

  // console.log(`Total Price: ${totalPrice}`);
  // console.log(`Discount: ${discountPercentage}%`);
  // console.log(`Final Price after Discount: ${finalPrice}`);

  // useEffect(() => {
  //     const scrollableDiv = scrollableDivRef.current;
  //     console.log(scrollableDiv)

  //     const handleWheel = (evt) => {
  //         evt.preventDefault();
  //         scrollableDiv.scrollLeft += evt.deltaY;
  //     };

  //     if (scrollableDiv) {
  //         scrollableDiv.addEventListener('wheel', handleWheel);
  //     }

  //     // Cleanup the event listener on component unmount
  //     return () => {
  //         if (scrollableDiv) {
  //             scrollableDiv.removeEventListener('wheel', handleWheel);
  //         }
  //     };
  // }, []);

  const handleCheckboxFocus = (event) => {
    event.preventDefault(); // Prevent default focus behavior
    event.target.blur(); // Remove focus from the checkbox
  };

  useEffect(() => {
    const getLogin = localStorage.getItem("LoginCheck");
    setLogin(JSON.parse(getLogin));
  }, []);

  const makePayment = async () => {
    if (Login == true) {
      setAmount(totalPrice);
      alert();
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, currency }),
      });
      const data = await response.json();

      const options = {
        key: process.env.RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        name: "Your Company Name",
        order_id: data.orderId,
        handler: function (response) {
          alert("Payment successful!");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      router.push("/login");
      localStorage.setItem("ProductRedirect", true);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="!overflow-x-hidden">
        <Header />
        <Banner
          title={"Products and Services"}
          bannerClass={"product_banner"}
        />

        <FixedArrow onClick={handleArrowClick} />

        <div className="container-fluid p-0">
          <div className="pt-[60px]">
            <div className="flex gap-2 padding_left">
              <div className="w-[300px] sticky top-0 bg-white ">
                <div className="f16 py-[20px]"></div>
                <div
                  data-aos="fade-right"
                  className="f16 text_main h-[86.5px] flex items-center px-3 fw_700"
                >
                  Description
                </div>
                <div
                  data-aos="fade-right"
                  className="f16 bg-[#f9f9f9] text_main flex items-center px-3 h-[70px] fw_700"
                >
                  Product type
                </div>
                <div
                  data-aos="fade-right"
                  className="f16  text_main flex items-center px-3 h-[50px] fw_700"
                >
                  Suitable
                </div>
                <div
                  data-aos="fade-right"
                  className="f16 bg-[#f9f9f9] text_main flex items-center px-3 h-[50px] fw_700"
                >
                  Numbers of stocks covered
                </div>
                <div
                  data-aos="fade-right"
                  className="f16  text_main flex items-center px-3 h-[50px] fw_700"
                >
                  Adequate portfolio size to avail the service (calculated at
                  max of 2.5% annually)
                </div>
                <div
                  data-aos="fade-right"
                  className="f16 bg-[#f9f9f9] text_main flex items-center px-3 h-[50px] fw_700"
                >
                  Idea&apos;s covered
                </div>
                <div
                  data-aos="fade-right"
                  className="f16  text_main flex items-center px-3 h-[50px] fw_700"
                >
                  Research report
                </div>
                <div
                  data-aos="fade-right"
                  className="f16 bg-[#f9f9f9] text_main h-[85px] flex items-center px-3 fw_700"
                >
                  Stock-wise allocation
                </div>
                {/* <div
                data-aos="fade-right"
                className="f16 bg-[#f9f9f9] text_main flex items-center px-3 h-[50px] fw_700"
              >
                Buying range no
              </div>
              <div
                data-aos="fade-right"
                className="f16  text_main flex items-center px-3 h-[50px] fw_700"
              >
                Earning updates no
              </div> */}
                <div
                  data-aos="fade-right"
                  className="f16  text_main flex items-center px-3 h-[50px] fw_700"
                >
                  Support
                </div>
                {/* <div
                data-aos="fade-right"
                className="f16  text_main flex items-center px-3 h-[50px] fw_700"
              >
                Exit calls no
              </div>
              <div
                data-aos="fade-right"
                className="f16 bg-[#f9f9f9] text_main flex items-center px-3 h-[70px] fw_700"
              >
                Access to Member only Live Webinars & recordings (Quaterly) no
              </div>
              <div
                data-aos="fade-right"
                className="f16  text_main flex items-center px-3 h-[50px] fw_700"
              >
                Add On benefit no
              </div> */}
                <div
                  data-aos="fade-right"
                  className="f16 bg-[#f9f9f9] text_main flex items-center bg-[#A71E281A] px-3 h-[88px] fw_700"
                >
                  Pricing 6 Months (INR)
                </div>
              </div>
              {package1.length !== 0 && (
                <div
                  className="flex overflow-x-auto w-full"
                  ref={scrollableDivRef}
                  id="GetIn"
                >
                  <div className="flex gap-2">
                    {package1.map((product, index) => (
                      <div
                        className="w-[400px]"
                        key={index}
                        ref={
                          package1?.length != 0
                            ? index == package1?.length - 1
                              ? lastProductRef
                              : null
                            : ""
                        }
                      >
                        <div
                          className="f16 py-[12px] bg-[#1A2A5B] text-white fw_700 text-center"
                          data-aos="fade-left"
                        >
                          {product.name}
                        </div>

                        <div className="w-[400px] sticky top-0 bg-white ">
                          <div className="f16 "></div>
                          <div
                            data-aos="fade-left"
                            className="text_main f16  px-3 flex items-center h-[86.5px]"
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          ></div>
                          <div
                            data-aos="fade-left"
                            className=" bg-[#f9f9f9] text_main f16  px-3 flex items-center h-[70px]"
                          >
                            {product.product_type}
                          </div>
                          <div
                            data-aos="fade-left"
                            className="text_main f16  px-3 flex items-center h-[50px]"
                          >
                            {product.suitable_for}
                          </div>
                          <div
                            data-aos="fade-left"
                            className=" bg-[#f9f9f9] text_main f16  px-3 flex items-center h-[50px]"
                          >
                            {product.total_stocks}
                          </div>
                          <div
                            data-aos="fade-left"
                            className="  text_main f16  px-3 flex items-center h-[50px]"
                          >
                            {product.Adequate_portfolio}
                          </div>
                          <div
                            data-aos="fade-left"
                            className="text_main bg-[#f9f9f9] f16  px-3 flex items-center h-[50px]"
                          >
                            {product.ideas}
                          </div>
                          <div
                            data-aos="fade-left"
                            className=" text_main f16  px-3 flex items-center h-[50px]"
                          >
                            {product.report_research}
                          </div>
                          <div
                            data-aos="fade-left"
                            className="text_main bg-[#f9f9f9] f16  px-3 flex items-center h-[85px]"
                          >
                            {product.stock_allocation}
                          </div>
                          {/* <div
                          data-aos="fade-left"
                          className="bg-[#f9f9f9] text_main f16  px-3 flex items-center h-[50px]"
                        >
                          {product.buy_range}
                        </div> */}
                          {/* <div
                          data-aos="fade-left"
                          className="text_main f16  px-3 flex items-center h-[50px]"
                        >
                          {product.earn_update}
                        </div> */}
                          <div
                            data-aos="fade-left"
                            className=" text_main f16  px-3 flex items-center h-[50px]"
                          >
                            {product.support}
                          </div>
                          {/* <div
                          data-aos="fade-left"
                          className="text_main f16  px-3 flex items-center h-[50px]"
                        >
                          {product.call_exit}
                        </div>
                        <div
                          data-aos="fade-left"
                          className="bg-[#f9f9f9] text_main f16  px-3 flex items-center h-[70px]"
                        >
                          {product.access}
                        </div>
                        <div
                          data-aos="fade-left"
                          className="text_main f16  px-3 flex items-center h-[50px]"
                        >
                          {product.benefit}
                        </div> */}
                        </div>

                        <div
                          data-aos="fade-left"
                          className="f16 bg-[#f9f9f9] text_main text_main px-3 flex justify-center bg-[#A71E281A] h-[88px] flex-col"
                        >
                          <div className="f24 fw_700 pt-2">
                            {product.sales_price} + GST <br />
                            <p className="text-decoration-line-through text-xl">
                              <b> ₹ {product.price}</b>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center p-[12px] w-100 position-relative">
                          <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            checked={selectedItems.includes(index)}
                            onChange={() => toggleSelectItem(index)}
                            onFocus={handleCheckboxFocus}
                            autoComplete="off"
                            className="absolute w-100 -z-10 c"
                            disabled={BuyPackages.includes(index + 1)}
                          />
                          <label
                            htmlFor={`checkbox-${index}`}
                            className={
                              BuyPackages.includes(index + 1)
                                ? " purchased_bg f16 fw_600 text-center"
                                : selectedItems.includes(index)
                                ? "selected_bg f16 fw_600 text-center"
                                : "select_bg f16 fw_600 text-center"
                            }
                          >
                            {BuyPackages.includes(index + 1)
                              ? "Already Purchased"
                              : selectedItems.includes(index)
                              ? "Selected"
                              : "Select"}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="py-[60px] ">
            <div className="red_label mb-[20px]" data-aos="fade-up">
              COMBO OFFER
            </div>
            <div className=" f56 fw_700 mb-[48px]" data-aos="fade-up">
              Buy Combo &{" "}
              <span className="text_red fw_700">Get Additional Discount</span>
            </div>

            <div className="flex  justify-between gap-5">
              <div data-aos="fade-right">
                <Discountcard title={"Any 2"} discount={5} />
              </div>
              <div data-aos="fade-right">
                <Discountcard title={"Any 3"} discount={10} />
              </div>
              <div data-aos="fade-left">
                <Discountcard title={"Any 4"} discount={15} />
              </div>
              <div data-aos="fade-left">
                <Discountcard title={"All Schemes"} discount={20} />
              </div>
            </div>
          </div>
        </div>
        {selectedItems?.length != 0 ? (
          <div className="position-sticky bottom-0 bg-white">
            <div className="container-fluid p-0 border-top border-bottom ">
              <div className="container">
                <div className="py-4">
                  <div className="flex flex-wrap gap-3 justify-between items-center">
                    <div className="flex gap-2 flex-col">
                      <div className="f20 text_body fw_500 text-justify">
                        {BuyPackages?.length != 0
                          ? `${BuyPackages?.length} Already Purchased /`
                          : ""}{" "}
                        {selectedItems?.length} Selected
                      </div>
                      <div className="f38 text_red fw_700  ">
                        ₹{finalPrice} / 6 Months
                      </div>
                      <div className="text-decoration-line-through f24 text_blue fw_700 ">
                        ₹{totalPrice + 4000}
                      </div>
                    </div>
                    <button
                      onClick={makePayment}
                      className="btn_red flex items-center px-5 py-3 arrow_card"
                    >
                      <div className="f16 fw_600 ">Subscribe & Pay</div>
                      <div className="arrow_img">
                        <Image
                          src="/images/search_arrow.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <Footer />
      </div>
    </>
  );
}

export default Productandservices;
