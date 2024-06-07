import nft1 from "assets/img/nfts/banner1.jpeg";
import Card from "components/card";

const BannerStruktural = () => {
  return (
    <Card extra={"h-full p-3"}>
      <h4 className="mb-5 px-2 text-center text-3xl font-bold text-navy-700 dark:text-white">
        Struktur Pemerintahan Desa
      </h4>
      <div
        className="flex h-[400px] w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
        style={{ backgroundImage: `url(${nft1})` }}
      ></div>
    </Card>
  );
};

export default BannerStruktural;