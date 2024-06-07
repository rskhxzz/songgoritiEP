import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./components/Banner";
// import CardWisata3 from "./components/CardWisata3";
import WisataCard from "components/card/WisataCard";

const Marketplace = () => {
  const [wisata, setWisata] = useState([]);

  useEffect(() => {
    getDataWisata();
  }, []);

  function getDataWisata() {
    axios
      .get("http://127.0.0.1:8000/api/wisata")
      .then((res) => {
        console.log("res.content : ", res.data.content);
        setWisata(res.data.content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* NFt Banner */}
        <Banner />
        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Wisata Songgoriti
          </h4>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          {wisata.map((item, index) => (
            <WisataCard
              key={index}
              id={item.id}
              title={item.nama}
              price={item.harga}
              nohp={item.telp}
              tanggal={item.tanggal}
              image={`${process.env.REACT_APP_IMG_PATH}/${item.gambar}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
