
import Food52 from "../Images/Food52.jpg";
import { Link } from "react-router-dom"; 
import { IoCart } from "react-icons/io5";
import { SiIfood } from "react-icons/si";
import { useSelector } from "react-redux";

const Title = () => (
  <div className="flex overflow-hidden">
      <img className="logo" src={Food52} alt="eco-food" title="Food Fire" />
      <h1 className="relative -left-4 text-green-800 top-12 text-4xl overfl" >Food<SiIfood className="inline text-[#F6931E] mx-1"/>52</h1>
    
  </div>
);

const Header = () => {
 
  const cartValue = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul >
          <li>
            <Link className="p-2 border-2 border-green-900 hover:border-green-900 hover:text-green-900 font-bold bg-green-900 hover:bg-white text-white rounded-xl shadow-lg hover:shadow-2xl duration-500" to="/app">Home</Link>
          </li>
          <li>
            <Link className="p-2 border-2 border-green-900 hover:border-green-900 hover:text-green-900 font-bold bg-green-900 hover:bg-white text-white rounded-xl shadow-lg hover:shadow-2xl duration-500" to="/app/about">About</Link>
          </li>
          <li className>
            <Link  to="/app/cart" >
              <IoCart className="text-3xl w-[60px] bg-green-900 text-white h-9 border-2 hover:bg-white hover:text-green-900 rounded-md  border-green-900 duration-500 text-green-900 relative top-3" />
              <span className="relative  text-cyan-400  -top-7 text-xl left-[45px]">{cartValue.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
