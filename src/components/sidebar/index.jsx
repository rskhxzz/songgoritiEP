/* eslint-disable */

import { TbLogin } from "react-icons/tb";
import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import { Link } from "react-router-dom";

import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
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
          MENU <span class="font-medium">Utama</span>
        </div>
      </div>

      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      <div className="flex justify-center">
        <button class="rounded-xl border border-gray-400 bg-white py-2 px-8 font-semibold text-gray-800 shadow hover:bg-gray-100 ">
          <div className="m-0 flex items-center justify-between p-0">
            <Link to="/sign-in">
              <p className="">Login </p>
            </Link>
            <div className="mx-4"></div>
            <TbLogin />
          </div>
        </button>
      </div>

      {/* Free Horizon Card */}
      {/* <div className="flex justify-center">
        <SidebarCard />
      </div> */}

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
