import { NavLink } from "react-router-dom";
import Select from "./Select"
import { Button } from "@/components/ui/button";

function NavbarMobile() {
  return (
    <div>
      <nav className="flex flex-col gap-6 mb-4">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange  " : "text-dark dark:text-white"
          }
          >
            Accueil
          </NavLink>
             <NavLink to="/about" className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange  " : "text-dark dark:text-white"
          }
          >
            A propos
          </NavLink>

          <Select />
          <NavLink
            to="/formations"
            className={({ isActive }) =>
              isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange " : "text-dark dark:text-white"
            }
          >
            Formations
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent  to-custom-orange " : "text-dark dark:text-white"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/carrière"
            className={({ isActive }) =>
              isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent  to-custom-orange " : "text-dark dark:text-white"
            }
          >
            Carrière
          </NavLink>
          <Button  className="-mt-2 border-primary bg-[#298C39] text-dark dark:text-white hover:bg-primary" onClick={() => alert('Cliquez !')}>
            Contactez-nous
          </Button>
        </nav>
    </div>
  )
}

export default NavbarMobile
