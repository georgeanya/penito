import Customer from "./components/customer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Service from "./components/service";
import Shop from "./components/shop";
import Sponsors from "./components/sponsors";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Shop />
      <Service />
      <Customer />
      <Sponsors />
    </div>
  );
}

export default App;
