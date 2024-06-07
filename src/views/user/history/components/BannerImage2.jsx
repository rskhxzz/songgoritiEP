import nft1 from "assets/img/nfts/banner1.jpeg";

const BannerImage2 = () => {
  return (
    <div
      className="flex h-[400px] w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1})` }}
    ></div>
  );
};

export default BannerImage2;