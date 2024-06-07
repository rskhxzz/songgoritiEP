import Banner from "./components/Banner";
import Add from "assets/img/umkm/Add.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Wisata = () => {
  const [getDatas, setDatas] = useState([]);

  const showData = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/umkm",
    }).then((res) => {
      setDatas(res.data.content);
    });
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        <Banner />

        <div className="mb-4 mt-5 flex flex-row justify-between px-4  md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Pendataan Wisata
          </h4>

          <Link to={"/admin/pendataan-umkm/edit"}>
            <img src={Add} alt="" srcset="" className="-mt-2 h-12" />
          </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className=" pb-4 ">
            <label for="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 flex items-center ps-3 start-0">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block w-80 rounded-lg border border-gray-300 bg-gray-50 pt-2 text-sm text-gray-900 ps-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3">
                  No.wa
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {getDatas.map((data, index) => {
                return (
                  <tr
                    className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">{index + 1}</div>
                    </td>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {data.nama}
                    </th>
                    <td className="px-6 py-4"> {data.tanggal}</td>
                    <td className="px-6 py-4"> {data.telp}</td>
                    <td className="px-6 py-4">
                      <Link
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wisata;
