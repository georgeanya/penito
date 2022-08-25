import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Service from "./components/service";
import Shop from "./components/shop";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <Shop />
      <Service/>
    </div>
  );
}

export default App;
