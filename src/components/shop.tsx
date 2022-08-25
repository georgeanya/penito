import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Furniture from "./furniture";
import lamp from "../assets/room-lamp.png";

const ShopButton = styled(Button)({
  background: "#F8FBFB",
  color: "#1C2A2F",
  padding: "12px 24px",
  margin: "0px 12px",
  borderRadius: "24px",
  textTransform: "none",
});

const Shop = () => {
  return (
    <div className="mt-32">
      <p className="text-4xl text-center">
        A Huge Collection of Furniture Products
        <br /> for your Interior
      </p>
      <p className="text-center text-2xl mt-6">
        If you have the experience of ten years in an industry, no apostrohe is
        needed. If you
        <br /> have ten years’ experience, an apostrophe is needed.
      </p>
      <div className="flex justify-center mt-10">
        <ShopButton>All Furnitured</ShopButton>
        <ShopButton>Living Room</ShopButton>
        <ShopButton>Office</ShopButton>
        <ShopButton>Bedroom</ShopButton>
        <ShopButton>Sofas</ShopButton>
        <ShopButton>Outdoor</ShopButton>
        <ShopButton>Kitchen</ShopButton>
        <ShopButton>More</ShopButton>
      </div>
      <div>
        {/* <Furniture image={lamp} text="Room Table Lamp" /> */}
        {/* <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture />
        <Furniture /> */}
          </div>
          <div><ShopButton>See More</ShopButton></div>
    </div>
  );
};

export default Shop;
