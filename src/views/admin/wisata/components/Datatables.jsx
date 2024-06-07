import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import nft1 from "assets/img/umkm/banner.png";

export default function Product() {
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
    },
    {
      name: "Tanggal Opening",
      selector: (row) => row.tanggal,
    },
    {
      name: "Harga",
      selector: (row) => row.harga,
    },
    {
      name: "No.Hp",
      selector: (row) => row.telp,
    },
    {
      name: "Desc",
      cell: (row) => (
        <button className="text-[#2563EB]" onClick={() => descWisata(row.desc)}>
          Detail
        </button>
      ),
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          height={70}
          width={80}
          src={`${process.env.REACT_APP_IMG_PATH}/${row.gambar}`}
        />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="px-1 py-4">
          <button
            type="button"
            class="mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium font-medium text-white  me-2 hover:bg-blue-800 hover:underline focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:text-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link to={`edit/${row.id}`} className="">
              Edit
            </Link>
          </button>
          <button
            type="button"
            className="mb-2 mt-1 w-[85px] rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium font-medium text-white me-2 hover:bg-red-800 hover:underline focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-blue-500 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => deleteData(row.id)}
          >
            Hapus
          </button>
        </div>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const [search, SetSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const descWisata = (e) => {
    Swal.fire({
      title: "Deskripsi Wisata!",
      text: e,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const deleteData = (id) => {
    Swal.fire({
      title: "Apakah Yakin Ingin Menghapus?",
      text: "Kamu tidak dapat mengembalikan datanya!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "DELETE",
          url: `http://127.0.0.1:8000/api/wisata/${id}`,
        }).then((res) => {
          getData();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  const getData = async () => {
    try {
      const req = await axios.get("http://127.0.0.1:8000/api/wisata");
      setData(req.data.content);
      setFilter(req.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const result = data.filter((item) => {
      return item.nama.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
  }, [search]);

  const tableHeaderstyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "#f8f9fa",
      },
    },
    subHeader: {
      style: {
        backgroundColor: "bg-transparant",
        minHeight: "52px",
      },
    },
  };

  return (
    <React.Fragment>
      <DataTable
        customStyles={tableHeaderstyle}
        columns={columns}
        data={filter}
        pagination
        fixedHeader
        highlightOnHover
        subHeader
        subHeaderComponent={
          <div className=" ">
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
                className="block h-8 w-80  rounded-lg border border-gray-300 bg-gray-50 pt-1 text-sm text-gray-900 ps-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search Umkm"
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
              />
            </div>
          </div>
        }
        subHeaderAlign="right"
      />
    </React.Fragment>
  );
}
