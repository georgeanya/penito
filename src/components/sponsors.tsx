import Google from "../assets/Google.png";
import Coursera from "../assets/Coursera.png";
import Airbnb from "../assets/Airbnb.png";
import Microsoft from "../assets/Microsoft.png";
import Udemy from "../assets/Udemy.png";
import Airtable from "../assets/Airtable.png";
import Duolingo from "../assets/Duolingo.png";
import Pluralsight from "../assets/Pluralsight.png";

const Sponsors = () => {
  return (
    <div className="mx-40 mt-16">
      <p className="text-4xl text-center my-16">Our Partners & Sponsors</p>
      <div className="flex flex-wrap justify-center">
        <img className="m-6 self-center" src={Google} alt="" />
        <img className="m-6 self-center" src={Coursera} alt="" />
        <img className="m-6 self-center" src={Airbnb} alt="" />
        <img className="m-6 self-center" src={Microsoft} alt="" />
        <img className="m-6 self-center" src={Udemy} alt="" />
        <img className="m-6 self-center" src={Airtable} alt="" />
        <img className="m-6 self-center" src={Duolingo} alt="" />
        <img className="m-6 self-center" src={Pluralsight} alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
