import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSwitcher";
const Footer = () => {
  // const { t } = useTranslation();

 

  return (
    
      <div className=" dark:bg-gray-900  sm:p-12 p-4 text-[1rem] md:text-[1.2rem]">
        <hr className="px-4 h-0.5 bg-gray-100 " />
        <div className=" w-full max-w-screen ">
          <div className="flex justify-between  items-center sm:px-4 py-6   ">
            <div>
              <img src="/Logo.svg" alt="logo" />
            </div>
            
              <div className="text-gray-500 md:flex gap-4  dark:text-gray-400 font-medium">
                <NavLink to="/" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2 " : "text-[#D9D9D9]"}>
                  <h1 className="flex gap-2" > Accueil  </h1>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2  " : "text-[#D9D9D9]"}>
                  <h1 className="flex gap-2"> A propos </h1>
                </NavLink>
                <NavLink to="/formations" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2 " : "text-[#D9D9D9]"}>
                  <h1 className="flex gap-2">Formations </h1>
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2   " : "text-[#D9D9D9]"}>
                  <h1 className="flex gap-2">Blog  </h1>
                </NavLink>
                <NavLink to="/carrière" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2 " : "text-[#D9D9D9]"}>
                  <h1 className="flex gap-2">Carrières </h1>
                </NavLink>
              </div>
              <div className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <NavLink to="/" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2 " : "text-[#D9D9D9]"}>
                  Carrefour Meec, Yaoundé
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2  " : "text-[#D9D9D9]"}>
                  k2ngroup07@gmail.com
                </NavLink>
                <NavLink to="/services" className={({ isActive }) =>
                  isActive ? "text-[#D9D9D9] mb-2  " : "text-[#D9D9D9]"}>
                  +(237) 620 39 23 42
                </NavLink>
              </div>
            <div>
              <ul className="text-white gap-4 justify-center md:flex mx-7 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com/k2n_group_sarl/" className="hover:underline text-12"><FaFacebook className="md:text-[2rem]"/></a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com/k2n_group_sarl/" className="hover:underline"><FaInstagram className="md:text-[2rem]" /></a>
                </li>
                <li className="mb-4">
                  <a href="https://www.linkedin.com/company/k2n-group/" className="hover:underline"><FaLinkedin className="md:text-[2rem]" /></a>
                </li>
                <li>
                  <LanguageSelector/>
                </li>
                {/* <p>{t("description")}</p> */}
              </ul>
              </div>
              </div>
          </div>
          <hr className="px-4 h-0.5 bg-gray-100 " />
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Copyright © 2024 K2N GROUP, Tous les droits réservés. </span>
        </div>
      
  );
};

export default Footer;