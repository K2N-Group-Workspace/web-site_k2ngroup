import { useState, useContext } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AvatarIcon from "./component/Avatar";
import Navbar from "./component/Navbar";
// import DarkMode from "./component/darkMode";
import { ModeToggle } from '../mode_toggle';
import { AuthContext } from '../context/AuthContext';
import ButoonHeader from "./component/ButoonHeader";
import NavbarMobile from './component/NavbarMobile';

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext) || { isAuthenticated: false };

  return (

    <header className="  top-0 left-0 p-2 shadow-md font-roboto  text-[1rem] bg-bg-gradient dark:bg-dark dark:text-white text-clip">

      <div className="flex mx-[2%] items-center justify-between">
        <NavLink to="/">
          <img src="/Logo vert.svg" alt="logo" />
        </NavLink>
        <Navbar/>
       <div className=" gap-2 blockus sm:hidden">
        <ModeToggle/>
       <button className="block sm:hidden text-dark text-[1.6rem]" onClick={() => setIsOpen(!isOpen)} >
          {isOpen ? (<IoMdClose />) : (<AiOutlineMenu />)}
        </button>
       </div>
        

        <div className="hidden sm:flex items-center gap-4">
                  <ModeToggle/> 
                  <AvatarIcon/>
          <div className="rounded-full dark:shadow-dark-mode shadow-light p-2 gap-2 flex items-center bg-white ">
           {!isAuthenticated && (
                
                <ButoonHeader/>
                
            )}
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="absolute p-4 text-white bg-white/30 w-[50%] top-[4.4rem] rounded right-0 backdrop-blur-md z-10">
          <NavbarMobile/>
          <ButoonHeader/>
        </div>
      )}
    </header>
  );
}

export default Header;