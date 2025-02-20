import { NavLink } from "react-router-dom";
function ButoonHeader() {
  return (
    <div className=" ">
      <NavLink to="/Inscription">
        <button className="rounded-full bg-white shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white ">
          S'inscrire
        </button>
      </NavLink>
      <NavLink to="/connexion">
        <button className="rounded-full  shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white">
          Se connecter
        </button>
      </NavLink>
    </div>
  );
}

export default ButoonHeader;
