import services from "../assets/services.png";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MoreButton = styled(Button)({
    color: "#F8FBFB",
    background: "#1C2A2F",
    padding: "15px 30px",
    borderRadius: "30px",
    textTransform: "none",
  });

const Service = () => {
  return (
    <div className="mx-40 my-16">
      <p className="text-4xl text-center">Our Services & Benefits</p>
      <div className="flex mt-16">
        <div className="flex flex-wrap justify-between">
          <div style={{maxWidth: '270px'}}>
            <img src={services2} alt="" />
            <p className="text-3xl mt-6">Fast & Free Shipping</p>
            <p className="text-xl font-light mt-6">
              Sign up to premier delivery in Nigeria for unlimited free shipping
              from USA.
            </p>
          </div>
          <div style={{maxWidth: '270px'}}>
            <img src={services4} alt="" />
            <p className="text-3xl mt-6">24/7 Support</p>
            <p className="text-xl font-light mt-6">
              24/7 support is a kind of support that is available throughout.
            </p>
          </div>
          <div style={{maxWidth: '270px'}}>
            <img src={services3} alt="" />
            <p className="text-3xl mt-6">Hassle Free Returns</p>
            <p className="text-xl font-light mt-6">
              Free return within 15 days for official store items and 7 days for
              other eligible items.
            </p>
          </div>
          <div style={{maxWidth: '270px'}}>
            <img src={services1} alt="" />
            <p className="text-3xl mt-6">Your Best Price Matching</p>
            <p className="text-xl font-light mt-6">
              Ask to speak to a manger, show him the competitor’s lower price.
            </p>
          </div>
        </div>
        <img src={services} width="500px" className="ml-4" alt="" />
          </div>
          <MoreButton>Know More</MoreButton>
    </div>
  );
};

export default Service;
