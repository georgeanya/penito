import services from "../assets/services.png";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";

const Service = () => {
  return (
    <div>
      <p>Our Services & Benefits</p>
      <div className="flex">
        <div>
          <div>
            <img src={services2} alt="" />
            <p>Fast & Free Shipping</p>
            <p>
              Sign up to premier delivery in Nigeria for unlimited free shipping
              from USA.
            </p>
          </div>
          <div>
            <img src={services4} alt="" />
            <p>24/7 Support</p>
            <p>
              24/7 support is a kind of support that is available throughout.
            </p>
          </div>
          <div>
            <img src={services3} alt="" />
            <p>Hassle Free Returns</p>
            <p>
              Free return within 15 days for official store items and 7 days for
              other eligible items.
            </p>
          </div>
          <div>
            <img src={services1} alt="" />
            <p>Your Best Price Matching</p>
            <p>
              Ask to speak to a manger, show him the competitor’s lower price.
            </p>
          </div>
        </div>
        <img src={services} width="450px" alt="" />
      </div>
    </div>
  );
};

export default Service;
