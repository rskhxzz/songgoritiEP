import React from "react";

import { Link } from "react-router-dom";

const CardWisata = (event) => {
  const wisata = "1";
  return (
    <div className="mt-2 mb-8 grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className=" col-span-5 flex h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 md:hidden 2xl:col-span-6">
        <div className="flex md:hidden">
          <img src={event.img} alt="" className="h-auto w-full" />
        </div>
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
          Wisata 2
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          obcaecati, corrupti modi perferendis velit repellendus accusamus
          omnis, sed distinctio ipsam pariatur quaerat deleniti beatae libero
          autem officia aliquam atque possimus
        </p>

        <Link
          className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          to={`/user/Profile-Wisata/${wisata}`}
        >
          Lihat lebih detaiil
        </Link>
      </div>
      <div className="col-span-5 hidden h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 md:flex 2xl:col-span-6">
        <div className="hidden md:flex">
          <img src={event.img} alt="" />
        </div>

        {/* <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
          <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
          <h4 className="text-xl font-bold text-brand-500 dark:text-white">
            Upload Files
          </h4>
          <p className="mt-2 text-sm font-medium text-gray-600">
            PNG, JPG and GIF files are allowed
          </p>
        </button> */}
      </div>
    </div>
  );
};

export default CardWisata;
