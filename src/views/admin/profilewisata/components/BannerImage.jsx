

const BannerImage = (event) => {
  return (
    <div
      className="flex h-[300px] w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
     style={{ backgroundImage: `url(${require("assets/img/nfts/"+ event.img)})` }}

    ></div>
  );
};

export default BannerImage;
