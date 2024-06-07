import Card from "components/card";
import React from "react";

const GoogleMaps = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="mb-5 px-2 text-center text-3xl font-bold text-navy-700 dark:text-white">
          Peta Lokasi Desa
        </h4>
        <iframe
          className="mx-auto w-full rounded-lg lg:w-[900px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7904.530901524783!2d112.48376087770997!3d-7.8672664999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78871455555555%3A0xb9ae29a0cb7062c9!2sCandi%20Songgoriti!5e0!3m2!1sid!2sid!4v1711909236412!5m2!1sid!2sid"
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
