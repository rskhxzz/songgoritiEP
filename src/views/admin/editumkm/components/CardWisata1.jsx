import Card from "components/card";
import React from "react";
import { Link } from "react-router-dom";

const CardWisata = (event) => {
  const wisata = "0";
  return (
    <Card className="mt-2 mb-8 grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <img
          className=" h-[300px]  rounded-[20px] px-[0px] py-[0px] md:px-[0px] md:py-[0px]"
          src={event.img}
          alt=""
        />
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
          Wisata 1
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
    </Card>
  );
};

export default CardWisata;
