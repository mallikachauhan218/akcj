import React from "react";

import YouTubePlayer from "../common/YouTubePlayer";

export default function VideoGallery({VideoData}) {

  return (
    <div className="container my-4">
      <div className="flex justify-center gap-10 m-4 flex-wrap">
        {VideoData?.Videos?.map((elm, index) => {
          return (
            <div
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 max-w-full sm:max-w-[48%] lg:max-w-[30%]"
              data-aos="flip-right"
            >
              <YouTubePlayer defaultLink={elm?.video_link} />
            </div>
          );
        })}
      </div>

    </div>
  );
}
