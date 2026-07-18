"use client";

import DashboardHeader from "@/components/common/header/DashboardHeader";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DataTable from "react-data-table-component";
import { useRouter } from "next/router";
import { GET } from "@/utils/api/get";
import { POST } from "@/utils/api/post";

const customStyles = {
  headCells: {
    style: {
      fontWeight: 700, // Sets font-weight to 700
      fontSize: "16px", // Optional: Adjust font size
      fontStyle: "bold", // Explicitly set font style to bold (redundant but clear)
    },
  },
};

function Tresuretrove({ params }) {
  const [StokeDatas, setStokeDatas] = useState([]);
  const [BuyPackages, setBuyPackages] = useState([]);
  const [StokeDatas1, setStokeDatas1] = useState([]);
  const [StokeHold, setStokeHold] = useState([]);
  const [StokeExit, setStokeExit] = useState([]);
  const [stokeExited, setstokeExited] = useState([]);
  const [Stocksapi, setStocksapi] = useState([]);
  const [AllStoke, setAllStoke] = useState([]);

  const router = useRouter();

  const { id } = router.query;

  const Package_id = Number(id);

  const formdata = new FormData();
  formdata.append("packege_id", Package_id);

  const FatchPackageStoke = async () => {
    try {
      const response = await POST.request({
        form: formdata,
        url: "/post_stoke",
      });

      setStocksapi(response?.stock);
    } catch (err) {}
  };

  useEffect(() => {
    if (Package_id) {
      FatchPackageStoke();
    }
  }, [Package_id]);

  useEffect(() => {
    const userData = localStorage.getItem("LoginUser");
    const BuyPackageId = JSON.parse(userData);

    console.log(BuyPackageId?.package_id);
    
    setBuyPackages(BuyPackageId?.package_id);
  }, [Package_id]);

  console.log(typeof Package_id, "Package_id");

  useEffect(() => {
    const Bystock = Stocksapi?.filter((stock) => stock.status == "1");
    const holdStoke = Stocksapi?.filter((stock) => stock.status == "2");
    const ExitStoke = Stocksapi?.filter((stock) => stock.status == "3");
    const ExitedStoke = Stocksapi?.filter((stock) => stock.status == "4");

    setStokeDatas1(Bystock);
    setStokeHold(holdStoke);
    setStokeExit(ExitStoke);
    setstokeExited(ExitedStoke);
    // setFilteredStocks(filtered);
  }, [Stocksapi]);

  useEffect(() => {
    const item = localStorage.getItem("Token");

    if (item == null) {
      router.push("/login");
    } else {
    }
  });

  const StokeData = [
    {
      name: "Stock Name",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {BuyPackages.includes(Package_id) ? (
            <>
              <span style={{ fontWeight: "bold" }}>{row?.name}</span>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Know More
              </button>
            </>
          ) : row?.is_free == 1 ? (
            <>
              <span style={{ fontWeight: "bold" }}>{row?.name}</span>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Know More
              </button>
            </>
          ) : (
            <span style={{ fontSize: "20px", color: "#FFD700" }}>
              {"⭐⭐⭐⭐"}
            </span>
          )}
        </div>
      ),
      width: "400px",
    },
    {
      name: "Rating",
      selector: (row) => (
        <button
          style={{
            padding: "5px 10px",
            backgroundColor:
              row.rating === 1
                ? "#4CAF50" // Green for "Buy"
                : row.rating === 2
                ? "#FFC107" // Yellow for "Hold"
                : "#E51D23", // Red for "Exit"
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {row.rating == "1" ? "Buy" : row.rating == "2" ? "Hold" : "Exit"}
        </button>
      ),
    },
    { name: "Sizing Guide", selector: (row) => row.size },
    { name: "Market Cap", selector: (row) => row.market_cap },
    { name: "Category", selector: (row) => row.category },
  ];

  const StokeHoldData = [
    {
      name: "Stock Name",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {BuyPackages.includes(Package_id) ? (
            <>
              <span style={{ fontWeight: "bold" }}>{row?.name}</span>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Know More
              </button>
            </>
          ) : row?.is_free == 1 ? (
            <>
              <span style={{ fontWeight: "bold" }}>{row?.name}</span>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Know More
              </button>
            </>
          ) : (
            <span style={{ fontSize: "20px", color: "#FFD700" }}>
              {"⭐⭐⭐⭐"}
            </span>
          )}
        </div>
      ),
      width: "400px",
    },
    {
      name: "Rating",
      selector: (row) => (
        <button
          style={{
            padding: "5px 10px",
            backgroundColor:
              row.rating === 1
                ? "#4CAF50" // Green for "Buy"
                : row.rating === 2
                ? "#FFC107" // Yellow for "Hold"
                : "#E51D23", // Red for "Exit"
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {row.rating == "1" ? "Buy" : row.rating == "2" ? "Hold" : "Exit"}
        </button>
      ),
    },
    { name: "Sizing Guide", selector: (row) => row.size },
    { name: "Market Cap", selector: (row) => row.market_cap },
    { name: "Category", selector: (row) => row.category },
    { name: "Return", selector: (row) => row.returns },
  ];

  const ExitedStoke = [
    {
      name: "Stock Name",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {BuyPackages.includes(Package_id) ? (
            <>
              <span style={{ fontWeight: "bold" }}>{row?.name}</span>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Know More
              </button>
            </>
          ) : row?.is_free == 1 ? (
            <>
              <span style={{ fontWeight: "bold" }}>{row?.name}</span>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Know More
              </button>
            </>
          ) : (
            <span style={{ fontSize: "20px", color: "#FFD700" }}>
              {"⭐⭐⭐⭐"}
            </span>
          )}
        </div>
      ),
      width: "400px",
    },

    { name: "Sizing Guide", selector: (row) => row.size },
    { name: "Market Cap", selector: (row) => row.market_cap },
    { name: "Category", selector: (row) => row.category },
    { name: "Return", selector: (row) => row.returns },
  ];

  return (
    <>
      <DashboardHeader />

      <div className="container mt-10">
        <Tabs>
          <TabList
            className="flex flex-wrap  gap-2 items-center overflow-x-auto bg-gray-100 p-2 rounded-lg"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              All Stocks
            </Tab>
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              Stocks To Buy
            </Tab>
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              Stocks To Hold
            </Tab>
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              Stocks To Exit
            </Tab>
            <Tab className="px-3 py-2 fw_600 rounded-md bg-white shadow-md cursor-pointer text-sm md:text-base hover:bg-blue-400">
              Exited Stocks
            </Tab>

            {BuyPackages?.includes(Package_id) ? (
              <></>
            ) : (
              <button
                onClick={() => router.push("/product-and-services")}
                className="ml-auto px-4 py-2 bg-green-500 rounded-md text-white text-sm md:text-base hover:bg-green-600 transition-all"
              >
                &uarr; Upgrade Now
              </button>
            )}
          </TabList>

          <TabPanel>
            <div className="tab1body">
              {/* <div className=" border-black px-3 text-white bg-[#1A295B] py-3 f16 rounded-lg text-center fw_600">
                <p className="mb-0 ">
                  Currently there are 17 stocks under coverage. Stocks with
                  'BUY' rating can be bought/added at current market price, upto
                  suitable weightage in-line with Sizing Guide.
                </p>
              </div> */}
              <div className="my-4">
                <DataTable
                  columns={StokeData}
                  data={Stocksapi}
                  highlightOnHover
                  customStyles={customStyles}
                />
              </div>

              <div className="container mt-5 mb-52">
                <div className="shadow-xl rounded-lg overflow-hidden">
                  <div className="">
                    <div className="bg-gray-200 px-4 ">
                      <p className="f18 fw_700 mb-0 py-3">
                        Buy-Hold Rationale | Customized Deployment
                      </p>
                    </div>
                    <div className="card_body px-3 flex ">
                      <p className="px-2 py-3">
                        We not only provide institutional quality research but
                        also customize the deployment (entry) for each of our
                        subscribers. When valuations go overboard in any of our
                        stocks, we move them to the hold list. This ensures that
                        any fresh capital being deployed in our portfolio does
                        not enter those stocks at elevated levels. The hold
                        stocks either get upgraded back to buy based on price
                        correction, time correction (stock stays flat while
                        earnings grow), or they get replaced with newer
                        opportunities. So, unlike Mutual/Index Funds where your
                        capital gets deployed at one shot on that day's NAV
                        irrespective of the valuation of the individual
                        portfolio stocks, at Stalwart we ensure tailor-made
                        portfolios for our subscribers based on the timing of
                        their entry or incremental capital additions. This
                        ensures the risk is well managed and your capital gets
                        deployed in a sensible way. It typically takes 12-18
                        months for a new subscriber to get aligned closer to the
                        basket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab1body">
              {/* <div className=" border-black px-3 text-white bg-[#1A295B] py-3 f16 rounded-lg text-center fw_600">
                <p className="mb-0">Older Ideas which we have exited.</p>
              </div> */}
              <div className="my-4">
                <DataTable
                  columns={StokeData}
                  data={StokeDatas1}
                  highlightOnHover
                  customStyles={customStyles}
                />
              </div>

              <div className="container mt-5 mb-52">
                <div className="shadow-xl rounded-lg overflow-hidden">
                  <div className="">
                    <div className="bg-gray-200 px-4 ">
                      <p className="f18 fw_700 mb-0 py-3">
                        Buy-Hold Rationale | Customized Deployment
                      </p>
                    </div>
                    <div className="card_body px-3 flex ">
                      <p className="px-2 py-3">
                        We not only provide institutional quality research but
                        also customize the deployment (entry) for each of our
                        subscribers. When valuations go overboard in any of our
                        stocks, we move them to the hold list. This ensures that
                        any fresh capital being deployed in our portfolio does
                        not enter those stocks at elevated levels. The hold
                        stocks either get upgraded back to buy based on price
                        correction, time correction (stock stays flat while
                        earnings grow), or they get replaced with newer
                        opportunities. So, unlike Mutual/Index Funds where your
                        capital gets deployed at one shot on that day's NAV
                        irrespective of the valuation of the individual
                        portfolio stocks, at Stalwart we ensure tailor-made
                        portfolios for our subscribers based on the timing of
                        their entry or incremental capital additions. This
                        ensures the risk is well managed and your capital gets
                        deployed in a sensible way. It typically takes 12-18
                        months for a new subscriber to get aligned closer to the
                        basket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab1body">
              {/* <div className=" border-black px-3 text-white bg-[#1A295B] py-3 f16 rounded-lg text-center fw_600">
                <p className="mb-0">
                  Continue to Hold these stocks, however fresh buying not
                  recommended at these levels.
                </p>
              </div> */}
              <div className="my-4">
                <DataTable
                  columns={StokeHoldData}
                  data={StokeHold}
                  highlightOnHover
                  customStyles={customStyles}
                />
              </div>

              <div className="container mt-5 mb-52">
                <div className="shadow-xl rounded-lg overflow-hidden">
                  <div className="">
                    <div className="bg-gray-200 px-4 ">
                      <p className="f18 fw_700 mb-0 py-3">
                        Buy-Hold Rationale | Customized Deployment
                      </p>
                    </div>
                    <div className="card_body px-3 flex ">
                      <p className="px-2 py-3">
                        We not only provide institutional quality research but
                        also customize the deployment (entry) for each of our
                        subscribers. When valuations go overboard in any of our
                        stocks, we move them to the hold list. This ensures that
                        any fresh capital being deployed in our portfolio does
                        not enter those stocks at elevated levels. The hold
                        stocks either get upgraded back to buy based on price
                        correction, time correction (stock stays flat while
                        earnings grow), or they get replaced with newer
                        opportunities. So, unlike Mutual/Index Funds where your
                        capital gets deployed at one shot on that day's NAV
                        irrespective of the valuation of the individual
                        portfolio stocks, at Stalwart we ensure tailor-made
                        portfolios for our subscribers based on the timing of
                        their entry or incremental capital additions. This
                        ensures the risk is well managed and your capital gets
                        deployed in a sensible way. It typically takes 12-18
                        months for a new subscriber to get aligned closer to the
                        basket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab1body">
              {/* <div className=" border-black px-3 text-white bg-[#1A295B] py-3 f16 rounded-lg text-center fw_600">
                <p className="mb-0">
                  Continue to Hold these stocks, however fresh buying not
                  recommended at these levels.
                </p>
              </div> */}
              <div className="my-4">
                <DataTable
                  columns={StokeHoldData}
                  data={StokeExit}
                  highlightOnHover
                  customStyles={customStyles}
                />
              </div>

              <div className="container mt-5 mb-52">
                <div className="shadow-xl rounded-lg overflow-hidden">
                  <div className="">
                    <div className="bg-gray-200 px-4 ">
                      <p className="f18 fw_700 mb-0 py-3">
                        Buy-Hold Rationale | Customized Deployment
                      </p>
                    </div>
                    <div className="card_body px-3 flex ">
                      <p className="px-2 py-3">
                        We not only provide institutional quality research but
                        also customize the deployment (entry) for each of our
                        subscribers. When valuations go overboard in any of our
                        stocks, we move them to the hold list. This ensures that
                        any fresh capital being deployed in our portfolio does
                        not enter those stocks at elevated levels. The hold
                        stocks either get upgraded back to buy based on price
                        correction, time correction (stock stays flat while
                        earnings grow), or they get replaced with newer
                        opportunities. So, unlike Mutual/Index Funds where your
                        capital gets deployed at one shot on that day's NAV
                        irrespective of the valuation of the individual
                        portfolio stocks, at Stalwart we ensure tailor-made
                        portfolios for our subscribers based on the timing of
                        their entry or incremental capital additions. This
                        ensures the risk is well managed and your capital gets
                        deployed in a sensible way. It typically takes 12-18
                        months for a new subscriber to get aligned closer to the
                        basket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab1body">
              {/* <div className="border-black px-3 text-white bg-[#1A295B] py-3 f16 rounded-lg text-center fw_600">
                <p className="mb-0">
                  Continue to Hold these stocks, however fresh buying not
                  recommended at these levels.
                </p>
              </div> */}
              <div className="my-4">
                <DataTable
                  columns={ExitedStoke}
                  data={stokeExited}
                  highlightOnHover
                  customStyles={customStyles}
                />
              </div>

              <div className="container mt-5 mb-52">
                <div className="shadow-xl rounded-lg overflow-hidden">
                  <div className="">
                    <div className="bg-gray-200 px-4 ">
                      <p className="f18 fw_700 mb-0 py-3">
                        Buy-Hold Rationale | Customized Deployment
                      </p>
                    </div>
                    <div className="card_body px-3 flex ">
                      <p className="px-2 py-3">
                        We not only provide institutional quality research but
                        also customize the deployment (entry) for each of our
                        subscribers. When valuations go overboard in any of our
                        stocks, we move them to the hold list. This ensures that
                        any fresh capital being deployed in our portfolio does
                        not enter those stocks at elevated levels. The hold
                        stocks either get upgraded back to buy based on price
                        correction, time correction (stock stays flat while
                        earnings grow), or they get replaced with newer
                        opportunities. So, unlike Mutual/Index Funds where your
                        capital gets deployed at one shot on that day's NAV
                        irrespective of the valuation of the individual
                        portfolio stocks, at Stalwart we ensure tailor-made
                        portfolios for our subscribers based on the timing of
                        their entry or incremental capital additions. This
                        ensures the risk is well managed and your capital gets
                        deployed in a sensible way. It typically takes 12-18
                        months for a new subscriber to get aligned closer to the
                        basket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

// const index = () => {

// };

export default Tresuretrove;
