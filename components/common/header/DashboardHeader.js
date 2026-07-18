import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GET } from "@/utils/api/get";

const DashboardHeader = () => {
  const [user, setuser] = useState({});

  const router = useRouter();
    const [PackageNames, setPackageNames] = useState([]);
   
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

  const HandleLogOut = () => {
    router.push("/");
    localStorage.removeItem("LoginUser");
    localStorage.removeItem("Token");
    localStorage.setItem("LoginCheck", false);
    localStorage.setItem("ProductRedirect", false);
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  };

  useEffect(() => {
    const item = localStorage.getItem("Token");
    const user = localStorage.getItem("LoginUser");

    setuser(JSON.parse(user));
    fatchFreeStoke()
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-[#1A2A5B] header2 ">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src={"/images/logo.svg"}
              width={152}
              height={50}
              alt="logo"
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar2"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="flex justify-between navbar-collapse my-lg-0 my-4 "
            id="navbar2"
          >
            <div className="flex justify-arround w-full gap-10">
              <ul className="navbar-nav gap-4  ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-[16px] text-white"
                    href="/dashboard"
                  >
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link text-[16px] text-white"
                    href="/dashboard/treasure-trove"
                  >
                    Treasure Trove
                  </Link>
                </li> */}

                <li className="nav-item">
                  <div className="dropdown">
                    <button className="mt-2 dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Packages
                    </button>
                    <ul className="dropdown-menu ">
                      {PackageNames.map((product , index) => {
                        return(
                          <li key={index}>
                            <Link className="dropdown-item" href={`/dashboard/packageStoke/${product?.id}`}>{product?.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href="/dashboard/recent-updates"
                  >
                    Recent Updates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href="/dashboard/upgrade"
                  >
                    Upgrade
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav gap-4  ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-[16px] text-white" href="#">
                    Hi {user?.first_name}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-[16px] text-white"
                    href="/dashboard/profile"
                  >
                    My Account
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link text-[16px] text-white"
                    onClick={HandleLogOut}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardHeader;
