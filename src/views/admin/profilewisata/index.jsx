import BannerImage from "./components/BannerImage";
import General from "./components/General";
import Widget from "components/widget/Widget";
import { MdBarChart } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import GoogleMaps from "./components/GoogleMaps";

import { useParams } from "react-router-dom";
const ProfileOverview = () => {
   const {wisata} = useParams();
   let data = [
    {
      nama: "Lembah Harapan",
      lokasi: "https://maps.google.com/maps?q=8FQG+M83, Dusun Begaman, Begaganlimo, Kec. Gondang, Kabupaten Mojokerto, Jawa Timur 61372&t=&z=17&ie=UTF8&iwloc=&output=embed",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque error, blanditiis deserunt inventore facere atque ducimus iure officiis et asperiores, porro saepe corrupti, nesciunt ab nisi. Obcaecati quidem a beatae saepe laudantium iure reprehenderit consequatur harum impedit blanditiis! Optio, illum? Voluptatibus ducimus rerum dolores ad id eligendi? Ipsa id, nisi cupiditate itaque aliquam magni enim minima dolor nihil accusantium quod architecto aut doloribus, earum iusto quia deleniti. Impedit nobis consectetur, commodi explicabo similique ab, illum id voluptate dolore porro aliquid pariatur suscipit quasi eius architecto cupiditate inventore eos? Veniam tempore beatae iusto provident alias, officiis quae molestiae velit possimus aperiam quas quia cupiditate laboriosam, non obcaecati illo, aliquam illum suscipit unde culpa cumque. Deleniti nam quaerat totam eligendi ad officia quam repellendus sunt magnam? Ullam adipisci perferendis inventore minima vel in molestias fugit quo aliquid, sunt voluptas? Dignissimos, error maxime! Deserunt officia culpa veritatis, asperiores quia consectetur, placeat iusto doloremque dignissimos harum ipsa animi repellat delectus, veniam illo ducimus ad dolores. Adipisci possimus voluptas libero beatae odio consequuntur. Doloremque ",
      pengunjung: 200000,
      tiket: "Rp 10.000",
      luas : 150,
      img:"banner1.jpeg",
    },
    {
      nama: "Winong Ceblong",
      lokasi: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.19210920287!2d112.47741099999999!3d-7.662483999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78705f39a6bc4b%3A0xe84004ce5ee74ccd!2sAir%20Terjun%20Winong%20Ceblong!5e0!3m2!1sen!2sus!4v1685001325470!5m2!1sen!2sus",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque error, blanditiis deserunt inventore facere atque ducimus iure officiis et asperiores, porro saepe corrupti, nesciunt ab nisi. Obcaecati quidem a beatae saepe laudantium iure reprehenderit consequatur harum impedit blanditiis! Optio, illum? Voluptatibus ducimus rerum dolores ad id eligendi? Ipsa id, nisi cupiditate itaque aliquam magni enim minima dolor nihil accusantium quod architecto aut doloribus, earum iusto quia deleniti. Impedit nobis consectetur, commodi explicabo similique ab, illum id voluptate dolore porro aliquid pariatur suscipit quasi eius architecto cupiditate inventore eos? Veniam tempore beatae iusto provident alias, officiis quae molestiae velit possimus aperiam quas quia cupiditate laboriosam, non obcaecati illo, aliquam illum suscipit unde culpa cumque. Deleniti nam quaerat totam eligendi ad officia quam repellendus sunt magnam? Ullam adipisci perferendis inventore minima vel in molestias fugit quo aliquid, sunt voluptas? Dignissimos, error maxime! Deserunt officia culpa veritatis, asperiores quia consectetur, placeat iusto doloremque dignissimos harum ipsa animi repellat delectus, veniam illo ducimus ad dolores. Adipisci possimus voluptas libero beatae odio consequuntur. Doloremque ",
      pengunjung: 200000,
      tiket: "Rp 10.000",
      luas : 150,
      img:"banner1.jpeg",
    },
    {
      nama: "Akar Seribu",
      lokasi: "https://maps.google.com/maps?q=8FGJ+J4V, Jl. Desa Kalikater, Hutan, Begaganlimo, Kec. Gondang, Kabupaten Mojokerto, Jawa Timur 61372&t=&z=14&ie=UTF8&iwloc=&output=embed",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque error, blanditiis deserunt inventore facere atque ducimus iure officiis et asperiores, porro saepe corrupti, nesciunt ab nisi. Obcaecati quidem a beatae saepe laudantium iure reprehenderit consequatur harum impedit blanditiis! Optio, illum? Voluptatibus ducimus rerum dolores ad id eligendi? Ipsa id, nisi cupiditate itaque aliquam magni enim minima dolor nihil accusantium quod architecto aut doloribus, earum iusto quia deleniti. Impedit nobis consectetur, commodi explicabo similique ab, illum id voluptate dolore porro aliquid pariatur suscipit quasi eius architecto cupiditate inventore eos? Veniam tempore beatae iusto provident alias, officiis quae molestiae velit possimus aperiam quas quia cupiditate laboriosam, non obcaecati illo, aliquam illum suscipit unde culpa cumque. Deleniti nam quaerat totam eligendi ad officia quam repellendus sunt magnam? Ullam adipisci perferendis inventore minima vel in molestias fugit quo aliquid, sunt voluptas? Dignissimos, error maxime! Deserunt officia culpa veritatis, asperiores quia consectetur, placeat iusto doloremque dignissimos harum ipsa animi repellat delectus, veniam illo ducimus ad dolores. Adipisci possimus voluptas libero beatae odio consequuntur. Doloremque ",
      pengunjung: 200000,
      tiket: "Rp 10.000",
      luas : 150,
      img:"banner1.jpeg",
    },

    
    
  ];

  
   
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 flex h-fit w-full flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-12">
          <BannerImage img={data[wisata].img}  />
        </div>
       
      </div>

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-12 lg:mb-0 3xl:col-span-4">
          <General  nama={data[wisata].nama} desc={data[wisata].desc} />
        </div>

        <div className="col-span-12 flex flex-col gap-3 p-3 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
      
          <h4 className="m-auto ml-1 text-3xl font-bold text-navy-700 dark:text-white">
            Data Wisata
          </h4>
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Luas Wisata"}
            subtitle={`${data[wisata].luas}m`}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={"Jumlah Pengunjung"}
            subtitle={`${data[wisata].pengunjung}`}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Tiket"}
           subtitle={`${data[wisata].tiket}`}
          />
        </div>

        <div className="col-span-12 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
          <GoogleMaps lokasi={data[wisata].lokasi} />
        </div>

      </div>
    </div>
  );
};

export default ProfileOverview;
