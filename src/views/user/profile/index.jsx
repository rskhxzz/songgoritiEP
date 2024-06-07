import BannerImage from "./components/BannerImage";
import General from "./components/General";
import Widget from "components/widget/Widget";
import { MdBarChart, MdHome, MdOpenWith } from "react-icons/md";
import GoogleMaps from "./components/GoogleMaps";
import GeneralVisi from "./components/GeneralVisi";
import GeneralMisi from "./components/GeneralMisi";
import BannerStruktural from "./components/BannerStruktural";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 flex h-fit w-full flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-12">
          <BannerImage />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-12 lg:mb-0 3xl:col-span-4">
          <General />
        </div>
        {/* 
        <div className="col-span-12 flex flex-col gap-3 p-3 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
          <Project />
          <h4 className="m-auto ml-1 text-3xl font-bold text-navy-700 dark:text-white">
            Data Desa
          </h4>
          <Widget
            icon={<MdOpenWith className="h-5 w-5" />}
            title={"Luas Desa"}
            subtitle={"69.000 m"}
          />
          <Widget
            icon={<MdBarChart className="h-6 w-6" />}
            title={"Jumlah Penduduk"}
            subtitle={"581"}
          />
          <Widget
            icon={<MdHome className="h-6 w-6" />}
            title={"Total Dusun"}
            subtitle={"2"}
          />
        </div> */}

        <div className="col-span-12 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
          <GoogleMaps />
        </div>

        {/* <div className="col-span-12">
          <BannerStruktural />
        </div> */}

        {/* <div className="col-span-12 lg:col-span-6">
          <h4 className="m-auto my-5 ml-1 text-center text-3xl font-bold text-navy-700 dark:text-white">
            Visi
          </h4>
          <GeneralVisi />
        </div> */}

        {/* <div className="col-span-12 lg:col-span-6">
          <h4 className="m-auto my-5 ml-1 text-center text-3xl font-bold text-navy-700 dark:text-white">
            Misi
          </h4>
          <GeneralMisi />
        </div> */}
      </div>
    </div>
  );
};

export default ProfileOverview;
