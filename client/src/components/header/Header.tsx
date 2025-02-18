import { useState, useContext } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AvatarIcon from "./component/Avatar";
import Navbar from "./component/Navbar";
// import DarkMode from "./component/darkMode";
import { ModeToggle } from '../mode_toggle';
import { AuthContext } from '../context/AuthContext';

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext) || { isAuthenticated: false };

  return (

    <header className="fixed w-full top-0 left-0 p-2 shadow-md font-roboto  text-[1rem] bg-bg-gradient dark:bg-dark dark:text-white text-clip">

      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/">
          <img src="../public/Logo vert.svg" alt="logo" />
        </NavLink>
        <Navbar/>
        <button className="block sm:hidden text-dark" onClick={() => setIsOpen(!isOpen)} >
          {isOpen ? (<IoMdClose />) : (<AiOutlineMenu />)}
        </button>

        <div className="hidden sm:flex items-center gap-4">
                  <ModeToggle/> 
                  <AvatarIcon/>
          <div className="rounded-full dark:shadow-dark-mode shadow-light p-2 gap-2 flex items-center bg-white ">
           {!isAuthenticated && (
                <>
                    <NavLink to="/Inscription">
                        <button className="rounded-full shadow-light px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white ">
                            S'inscrire
                        </button>
                    </NavLink>
                    <NavLink to="/connexion">
                        <button className="rounded-full px-4 py-2 text-[1rem] hover:bg-gradient-to-r from-dark-green to-custom-orange text-green-700 hover:text-white">
                            Se connecter
                        </button>
                    </NavLink>
                </>
            )}
          </div>
        </div>
      </div>

      
      {/* {isOpen && (
        <Menu/>
      )} */}
    </header>
  );
}

export default Header;