import Card from "components/card";
import React from "react";

const General = (event) => {
  
  return (
    <Card extra={"h-full p-3"}>

      <div className="mt-2 mb-8 w-full">
        <h4 className="mb-5 px-2 text-3xl font-bold text-navy-700 dark:text-white">
          Profil {event.nama}
        </h4>
        <p className="mt-2 px-2 text-justify text-base text-gray-600">
          {event.desc}
        </p>
      </div>

    </Card>
  );
};

export default General;
