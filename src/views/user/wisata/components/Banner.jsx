import nft1 from "assets/img/nfts/banner1.jpeg";

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] h-[500px]"
      style={{ backgroundImage: `url(${nft1})` }}
    ></div>
  );
};

export default Banner1;
