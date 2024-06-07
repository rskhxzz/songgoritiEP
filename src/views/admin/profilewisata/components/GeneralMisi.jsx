import Card from "components/card";
import React from "react";

const GeneralMisi = () => {
  return (
    <Card extra={"lg:h-[15rem] h-fit p-3"}>
      {/* Header */}
      <div className="mt-2 w-full pl-4">
        <ul className="mt-2 list-disc px-2 text-justify text-base text-gray-600">
          <li>Mengoptimalkan kinerja perangkat desa secara manual.</li>
          <li>
            Melaksanakan koordinasi dengan mitra kerja dinas dan swasta ataupun
            perusahaan.
          </li>
          <li>Meningkatkan kapasitas kelembagaan yang ada di desa.</li>
          <li>
            Meningkatkan kesejahteraan desa dengan langsung melibatkan
            masyarakat dengan kegiatan –kegiatan di desa.
          </li>
          <li>
            Melaksanakan program pembangunan yang Jujur, Transparan, dan
            bertanggung jawab.
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default GeneralMisi;
