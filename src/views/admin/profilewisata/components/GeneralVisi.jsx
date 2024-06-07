import Card from "components/card";
import React from "react";

const GeneralVisi = () => {
  return (
    <Card extra={"lg:h-[15rem] h-fit p-3"}>
      {/* Header */}
      <div className="mt-2 w-full pl-4">
        <ul className="mt-2 list-disc px-2 text-justify text-base text-gray-600">
          <li>
            Maju : Masyrakat Mampu Menguasai Ilmu Pengetahuan dan teknologi,
            agar serta dengan desa lain dan tidak tertinggal dengan desa lain
            yang lebih maju
          </li>
          <li>
            Mandri : Masyarakat mampu mewujudkan kehidupan yang mengandalkan
            kekuatan dan kemampuan sendiri
          </li>
          <li>
            Sehat : Masyarakat tercukupi kebutuhan pokok spt sedang, pangan dan
            papan.
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default GeneralVisi;
