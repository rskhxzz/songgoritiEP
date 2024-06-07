import Banner from "./components/Banner";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiUpload2Line } from "react-icons/ri";
import { RiAttachment2 } from "react-icons/ri";

const UMKM = () => {
  const { edit } = useParams();
  const navigate = useNavigate();
  const [getNama, setNama] = useState([]);
  const [getHarga, setHarga] = useState([]);
  const [getTanggal, setTanggal] = useState([]);
  const [getTelp, setTelp] = useState([]);
  const [getDesc, setDesc] = useState([]);
  const [file, setFile] = useState();
  const [gambar, setGambar] = useState("");

  const inputHandlerNama = (e) => {
    return setNama(e);
  };
  const inputHandlerHarga = (e) => {
    return setHarga(e);
  };

  const inputHandlerTanggal = (e) => {
    return setTanggal(e);
  };

  const inputHandlerDesc = (e) => {
    return setDesc(e);
  };

  const inputHandlerGambar = (e) => {
    return setFile(e);
  };

  const inputHandlerTelp = (e) => {
    const noPhone = e.target.value.replace(/[^0-9]+/g, "");
    return setTelp(noPhone);
  };
  const dataById = (e) => {
    console.log(e.nama);
    return (
      setNama(e.nama),
      setHarga(e.harga),
      setTanggal(e.tanggal),
      setTelp(e.telp),
      setDesc(e.desc),
      setFile(e.gambar),
      setGambar(e.gambar)
    );
    // setFile(e.gambar)
  };

  const showData = () => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/umkm/${edit}`,
    }).then((res) => {
      dataById(res.data.content);
    });
  };

  function saveUmkm() {
    if (getNama == "") {
      Swal.fire({
        title: "Warning",
        text: "Nama Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getHarga == "") {
      Swal.fire({
        title: "Warning",
        text: "Harga Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getTanggal == "") {
      Swal.fire({
        title: "Warning",
        text: "Tanggal Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getTelp == "") {
      Swal.fire({
        title: "Warning",
        text: "Nomer Telepon Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getDesc == "") {
      Swal.fire({
        title: "Warning",
        text: "Deskripsi Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (file == "") {
      Swal.fire({
        title: "Warning",
        text: "Gambar Tidak Boleh Kosong",
        icon: "warning",
      });
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tanggal", getTanggal);
      formData.append("harga", getHarga);
      formData.append("telp", getTelp);
      formData.append("desc", getDesc);
      formData.append("nama", getNama);
      axios({
        method: "POST",
        url: `http://127.0.0.1:8000/api/umkm/${edit}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        if (res.data.response_code == 200) {
          Swal.fire({
            title: "Success",
            text: "Data Berhasil Diedit",
            icon: "success",
          });
          navigate("/admin/pendataan-umkm");
        } else {
          Swal.fire({
            title: "Erorr",
            text: res,
            icon: "error",
          });
        }
      });
    }
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        <Banner />

        <div
          className={`!z-5 relative mt-5 flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none`}
        >
          <div className=" mt-3 flex  justify-between px-4  md:items-center">
            <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
              Edit UMKM
            </h4>
          </div>

          <div className="mt-2 ml-5 mr-5">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="group relative z-0 mb-5 w-full">
                <label
                  for="nama Umkm"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama UMKM
                </label>
                <input
                  type="text"
                  id="namaUmkm"
                  placeholder="Nama UMKM"
                  name="nama"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  value={getNama}
                  onChange={(e) => inputHandlerNama(e.target.value)}
                />
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Harga Tiket
                </label>
                <input
                  type="number"
                  id="hargaUmkm"
                  name="harga"
                  placeholder="Harga Tiket"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  value={getHarga}
                  onChange={(e) => inputHandlerHarga(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="group relative z-0 mb-5 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Tanggal Rilis
                </label>
                <input
                  type="date"
                  id="tanggalUmkm"
                  name="tanggal"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  value={getTanggal}
                  onChange={(e) => inputHandlerTanggal(e.target.value)}
                />
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  No WhatsApp
                </label>
                <input
                  type="number"
                  id="noWA"
                  name="telp"
                  placeholder="Nomer WhatsApp"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  value={getTelp}
                  onChange={(e) => inputHandlerTelp(e)}
                />
              </div>
            </div>
            <div className="group relative z-0 mb-5 w-full">
              <label
                for="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Deskripsi
              </label>
              <textarea
                id="message"
                rows="4"
                value={getDesc}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Tuliskan deskripsi UMKM..."
                onChange={(e) => inputHandlerDesc(e.target.value)}
              ></textarea>

              <div className="flex-row md:flex">
                <div>
                  <label className="mb-2 mt-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Upload foto Wisata
                  </label>
                  <div className="flex justify-start">
                    <div class="item-center h-[50px] w-[175px] justify-center  rounded-xl border border-gray-400 bg-gray-100 py-2 px-8 font-semibold text-gray-800 shadow hover:bg-gray-400 ">
                      <label for="dropzone-file" className="m-0 flex p-0">
                        <div className="mt-1 text-base">
                          {" "}
                          <RiUpload2Line />
                        </div>

                        <p className="ml-2 mt-1 text-[13px]">Input Gambar </p>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => inputHandlerGambar(e)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-2 md:ml-10 md:mt-7">
                  <p className="text-base font-bold">Attachment</p>
                  <div>
                    <div className="flex">
                      <div className="text-xl">
                        <RiAttachment2 />
                      </div>
                      <div className="text-sm">
                        {file && file.name ? file.name : gambar}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mb-4 grid grid-cols-2 justify-items-end gap-2">
                <button className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">
                  <Link to={"/admin/pendataan-umkm"}>Back</Link>
                </button>
                <button
                  className="w-full  rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  onClick={() => saveUmkm()}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKM;
