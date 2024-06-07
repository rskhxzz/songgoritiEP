/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import Icon from "assets/img/layout/iconAdmin.png";
import routes from "routes.js";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import Swal from "sweetalert2";

const Sidebar = ({ open, onClose }) => {
  const LogOut = () => {
    Swal.fire({
      title: "Apakah Yakin Ingin Logout?",
      text: "Kamu dapat login ulang kembali :)!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yaaa!",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        window.location.href = "/sign-in";
      }
    });
  };
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <div className="flex flex-row">
            <img className="mr-2" src={Icon} alt="" srcset="" />
            <p className="mt-1">Admin</p>
          </div>
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      <div className="flex justify-center">
        <button
          class="rounded-xl border border-gray-400 bg-white py-2 px-8 font-semibold text-gray-800 shadow hover:bg-gray-100"
          onClick={LogOut}
        >
          <div className="m-0 flex items-center justify-between p-0">
            <p className="">Logout </p>

            <div className="mx-4"></div>
            <TbLogout />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
