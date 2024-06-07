import Banner from "./components/Banner";
import React, { useEffect } from "react";

import Add from "assets/img/umkm/Add.png";
import { Link } from "react-router-dom";

import Datatables from "./components/Datatables";

const Wisata = () => {
  useEffect(() => {
    // if (!sessionStorage.getItem("name")) {
    //   window.location.href = "/sign-in";
    // }
  }, []);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        <Banner />

        <div className="mb-4 mt-5 flex flex-row justify-between px-4  md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Pendataan Wisata
          </h4>

          <Link to={"/admin/pendataan-wisata/insert"}>
            <img src={Add} alt="" srcset="" className="-mt-2 h-12" />
          </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div
            id="myTable"
            className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400"
          >
            <Datatables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wisata;
