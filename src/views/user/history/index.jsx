import React from "react";
import BannerImage1 from "./components/BannerImage1";
import BannerImage2 from "./components/BannerImage2";
import General1 from "./components/General1";
import General2 from "./components/General2";

const HistoryOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <h4 className="mb-5 mt-5 px-2 text-center text-3xl font-bold text-navy-700 dark:text-white">
        Sejarah Desa Songgoriti
      </h4>
      <div className="mt-3 flex  h-fit w-full flex-col justify-between gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-12  my-auto">
          <BannerImage1 />
        </div>
        <div className="col-span-12">
          <General1 />
        </div>
        <div className=" col-span-12 my-auto">
          <BannerImage2 />
        </div>
      </div>
    </div>
  );
};

export default HistoryOverview;
