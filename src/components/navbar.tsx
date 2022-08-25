import "../index.css";
import search from '../assets/group9.png';
import cart from '../assets/group10.png';
import navlogo from '../assets/ic_round-chair.png';

const NavBar = () => {
  return (
    <div className="App">
      <nav className="flex flex-row mx-40 mt-16">
        <div className="basis-1/4 flex flex-row">
          <img src={navlogo} alt="" />
          <p className="text-4xl mx-2">Penito</p>
        </div>
        <ul className="basis-1/2 flex flex-row">
          <li className="basic-1/7 mx-4 text-base">Living Room</li>
          <li className="basic-1/7 mx-4 text-base">Office</li>
          <li className="basic-1/7 mx-4 text-base">Bedroom</li>
          <li className="basic-1/7 mx-4 text-base">Sofas</li>
          <li className="basic-1/7 mx-4 text-base">Outdoor</li>
          <li className="basic-1/7 mx-4 text-base">Kitchen</li>
        </ul>
        <div  className="basis-1/4 flex flex-row justify-end">
          <img src={search} alt="" className="mx-4"/>
          <img src={cart} alt="" className="mx-4"/>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
