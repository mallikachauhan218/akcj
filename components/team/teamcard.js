import Image from "next/image";
import Link from "next/link";
import React from "react";

function Teamcard({ index,  src, name, designation, description, onClick }) {
    const dataOs = index % 2 === 0 ? "fade-right" : "fade-left";
  return (
    <div className="col-lg-6 flex items-stretch" data-aos={dataOs}>
      <div
        className="border-1 border-[#C2C2C2] p-[24px] arrow_card cursor-pointer"
        onClick={onClick}
      >
        <div className="row  ">
          <div className="col-4">
            <Image
              src={src}
              className="img-fluid "
              width={500}
              height={300}
              alt="team"
            />
          </div>
          <div className="col-8">
            <div className="flex flex-col h-full justify-between items-start">
              <div className="flex flex-col">
                <div className="f20 text_main text-start fw_700 mb-2">
                  {name}
                </div>
                <div className="f16 text_main text-start">{designation}</div>
              </div>

              <div className="f16 text_body line-clamp-4 text-justify ">
                {description}
              </div>

              <div className="arrow_img">
                <Image
                  src={"/images/contact_arrow.svg"}
                  width={24}
                  height={24}
                  className="img-fluid"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamcard;
