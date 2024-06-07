import BannerImage from "./components/BannerImage";
import General from "./components/General";
import Widget from "components/widget/Widget";
import { IoTicket } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import GoogleMaps from "./components/GoogleMaps";
import { useState, useEffect } from "react";
import axios from "axios";
import dateFormat from "dateformat";

import { useParams } from "react-router-dom";
const ProfileOverview = () => {
  const { id } = useParams();
  const [getWisata, setWisata] = useState([]);

  useEffect(() => {
    getDataWisata();
  }, []);

  function getDataWisata() {
    axios
      .get(`http://127.0.0.1:8000/api/wisata/${id}`)
      .then((res) => {
        console.log("res.content : ", res.data.content);
        setWisata(res.data.content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const tanggal = dateFormat(getWisata.tanggal, "dddd, mmmm dS, yyyy");
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 flex h-fit w-full flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-12">
          <BannerImage
            img={`${process.env.REACT_APP_IMG_PATH}/${getWisata.gambar}`}
          />
        </div>
      </div>

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-12 lg:mb-0 3xl:col-span-4">
          <General nama={getWisata.nama} desc={getWisata.desc} />
        </div>

        <div className="col-span-12 flex flex-col gap-3 p-3 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
          <h4 className="m-auto ml-1 text-3xl font-bold text-navy-700 dark:text-white">
            Data Wisata
          </h4>
          <Widget
            icon={<IoTicket className="h-6 w-6" />}
            title={"Harga Tiket"}
            subtitle={`Rp.${getWisata.harga},-`}
          />

          <Widget
            icon={<MdDateRange className="h-6 w-6" />}
            title={"Tanggal Opening"}
            subtitle={tanggal}
          />
          <Widget
            icon={<BsTelephoneFill className="h-6 w-6" />}
            title={"No.Hp"}
            subtitle={`${getWisata.telp}`}
          />
        </div>

        {/* <div className="col-span-12 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
          <GoogleMaps lokasi={data[wisata].lokasi} />
        </div> */}
      </div>
    </div>
  );
};

export default ProfileOverview;
