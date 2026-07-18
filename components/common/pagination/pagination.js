import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({
  range,
  activeIndex,
  setActiveIndex,
  startParam,
  onPageChange,
}) => {
  const [data, setData] = useState([]); // Fetched data
  const [loading, setLoading] = useState(false); // Loading indicator

  const handleClick = (type, index) => {
    console.log("clicked")
    if (type === "prev") {
      const newIndex = Math.max(0, index - 1);
      setActiveIndex(newIndex);

      onPageChange(newIndex );
    } else if (type === "next") {
      const newIndex = Math.min(index + 1, range - 1);
      setActiveIndex(newIndex);
      onPageChange(newIndex );
    } else if (type === "page") {
      setActiveIndex(index);
      console.log(index)
      if (index === 0) {
        console.log(index)
        onPageChange(index);
      } else {
        onPageChange(index );
      }
    }
  };

  const generatePaginationButtons = () => {
    const buttons = [];
    for (let i = 0; i < range; i++) {
      buttons.push(
        <div
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick("page", i)}
          className={activeIndex === i ? "is-active" : ""}
        >
          {i + 1}
        </div>
      );
    }
    return buttons;
  };

  return (
    <div>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <ClipLoader color="#DAC04F" size={50} />
        </div>
      ) : (
        <div>
          {/* <p>Current Active Index: {activeIndex}</p> */}
          <div className="pagination justify-center">
            <button
              onClick={() => handleClick("prev", activeIndex)}
              className="pagination__button customStylePaginationPre button -accent-1 mr-15 -prev"
            >
                <MdKeyboardDoubleArrowLeft />
            </button>

            <div className="pagination__count d-flex gap-4">
              {generatePaginationButtons()}
            </div>

            <button
              onClick={() => handleClick("next", activeIndex)}
              className="pagination__button customStylePaginationNext button -accent-1 ml-15 -next"
            >
                <MdKeyboardDoubleArrowRight/>
            </button>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pagination;
