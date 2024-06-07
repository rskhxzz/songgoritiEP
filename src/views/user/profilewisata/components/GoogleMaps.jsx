import Card from "components/card";
import React from "react";

const GoogleMaps = (event) => {
  console.log(event)
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="mb-5 px-2 text-center text-3xl font-bold text-navy-700 dark:text-white">
          Peta Lokasi Desa
        </h4>
        <iframe
          className="mx-auto w-full rounded-lg lg:w-[900px] "
           src={event.lokasi}
          width="900"
          height="250"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Card>
  );
};

export default GoogleMaps;
