import hero_img from "../assets/group12.png";
import vector from "../assets/Vector.png";
import play from "../assets/Play.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ShopButton = styled(Button)({
  background: "#1C2A2F",
  color: "white",
  padding: "15px 30px",
  marginRight: "50px",
});

const Hero = () => {
  return (
    <div className="mx-40 flex flex-row mt-24">
      <div className="flex flex-col self-center">
        <p className="text-5xl">
          Discover <span className="text-[#facc15]">The Best</span> Furniture
          for <span className="font-semibold">your Interior</span>
        </p>
        <p className="mt-12 text-2xl">
          We design pieces of furniture and objects that perfectly gap between
          Beauty and functionality
        </p>
        <div className="mt-12">
          <ShopButton endIcon={<img src={vector} width="20px" alt="" />}>
            Shop Now
          </ShopButton>
          <Button
            size="large"
            startIcon={<img src={play} width="35px" alt="" />}
            style={{ color: "#1C2A2F" }}
            className="p-1.5"
          >
            Watch Video
          </Button>
        </div>
      </div>
      <img src={hero_img} width="600px" alt="" />
    </div>
  );
};

export default Hero;
