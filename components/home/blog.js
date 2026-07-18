import Image from "next/image";
import React from "react";

function Blog({image,title,category,date}) {
  return (
    <div className="border-1 border-[#C2C2C2] p-[24px] arrow_card cursor-pointer">
      <div className="row">
        <div className="col-4">
          <Image
            src={image}
            width={180}
            height={180}
            className="img-fluid"
            alt="blog1"
          />
        </div>
        <div className="col-8">
          <div className="flex flex-col justify-between h-full">
            <div className="f20 fw_700">
              {title}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="f16 text_main text-uppercase">{category}</div>
                <ul className="list-disc	">
                  <li className="f16 text_main ">{date}</li>
                </ul>
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

export default Blog;
