import Card from "components/card";
import React from "react";

const General = () => {
  return (
    <Card extra={"h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="mb-5 px-2 text-3xl font-bold text-navy-700 dark:text-white">
          Profil Singkat Desa
        </h4>
        <p className="mt-2 px-2 text-justify text-base text-gray-600">
          Desa <span className="font-bold text-gray-900">Songgoriti</span>{" "}
          merupakan salah satu destinasi wisata yang populer di Batu, Jawa
          Timur, Indonesia. Terletak di lereng Gunung Panderman, Songgoriti
          menawarkan suasana alam yang menakjubkan dengan udara segar dan
          hijaunya pepohonan yang rindang. Daya tarik utama Songgoriti adalah
          sumber air panas alami yang terdapat di tempat ini. Air panas di
          Songgoriti diyakini memiliki khasiat menyembuhkan berbagai macam
          penyakit dan meredakan stres. Banyak wisatawan lokal maupun
          mancanegara yang datang ke Songgoriti untuk merasakan sensasi berendam
          di air panas alami ini sambil menikmati keindahan alam sekitarnya.
          Selain berendam di air panas, pengunjung juga dapat menikmati kegiatan
          lain seperti berjalan-jalan santai di sekitar area, mendaki gunung,
          atau berkemah di alam terbuka. Ada juga tempat makan dan fasilitas
          akomodasi yang tersedia untuk memenuhi kebutuhan pengunjung. Di
          sekitar Songgoriti, terdapat beberapa objek wisata menarik lainnya,
          termasuk air terjun, kebun binatang, dan taman rekreasi. Bagi pecinta
          alam dan petualang, Songgoriti merupakan destinasi yang sempurna untuk
          menikmati keindahan alam Indonesia sambil merasakan ketenangan dan
          kesejukan yang ditawarkan oleh udara pegunungan.
        </p>
      </div>
    </Card>
  );
};

export default General;
