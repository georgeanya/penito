import star from "../assets/star.png";

const Furniture = (image: any, text: string) => {
  return (
    <div className="bg-[#F8FBFB] max-w-xs">
      <img src={image} alt="" />
      <p className="text-base">{text}</p>
      <div>
        <p className="text-base text-[#d1d5db]">$250.00</p>
        <p className="text-base text-[#4ade80]">$210.00</p>
      </div>
      <img src={star} alt="" />
    </div>
  );
};

export default Furniture;
