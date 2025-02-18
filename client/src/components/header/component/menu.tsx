import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useProfileStore } from "@/components/store/authentification/Profile"


function Menu() {

    const [, setIsOpen] = useState(false);
    const { profile } = useProfileStore()
    return (
        <div>
            <div className=" absolute  top-[7.5rem] justify-between flex flex-col gap-3 w-[18%]  dark:bg-gray-900 bg-transparent  shadow-md rounded-lg p-4">
               <div>
                <div className="flex items-center gap-4 ">
                    <div>
                        <NavLink to="/profile" onClick={() => setIsOpen(false)}>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </NavLink>
                    </div>
                    <div>
                        id: {profile?.id}
                    </div>
                </div>

                <Separator orientation="horizontal" />

                <Select >
                    <SelectTrigger className="w-full md:text-[1.6rem] text-yellow-400 font-semibold hover:bg-green-700 p-2 ">
                        <SelectValue className=" " placeholder="upgrade rule" />
                    </SelectTrigger>
                    <SelectContent className="-left-[65%] w-[60%] h-">
                        <SelectItem value="administrateur">Administrateur</SelectItem>
                        <SelectItem value="technicien">Technicien</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="blogeur">Blogeur</SelectItem>
                        <SelectItem value="etudiant">Étudiant</SelectItem>
                        <SelectItem value="support-client">Support Client</SelectItem>
                    </SelectContent>
                </Select>

                <Separator orientation="horizontal" />


                <ul className="flex flex-col gap-4  ">
                    <li className="shadow-lg hover:bg-green-700 rounded-md p-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-dark-green md:text-[1.6rem] bg-clip-text text-transparent  to-custom-orange " : "md:text-[1.6rem] text-gray-700 dark:text-white"
                            }
                            onClick={() => setIsOpen(false)} // Ferme le menu
                        >
                            Accueil
                        </NavLink>
                    </li>

                    <li className="shadow-lg hover:bg-green-700 rounded-md p-2">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-dark-green md:text-[1.6rem] bg-clip-text text-transparent  to-custom-orange " : "md:text-[1.6rem] text-gray-700 dark:text-white"
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="shadow-lg hover:bg-green-700 rounded-md p-2">
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-dark-green md:text-[1.6rem] bg-clip-text text-transparent  to-custom-orange " : "md:text-[1.6rem] text-gray-700 dark:text-white"
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className="shadow-lg hover:bg-green-700 rounded-md p-2">
                        <NavLink
                            to="/formations"
                            className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-dark-green md:text-[1.6rem] bg-clip-text text-transparent  to-custom-orange " : "md:text-[1.6rem] text-gray-700 dark:text-white"
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Formations
                        </NavLink>
                    </li>
                    <li className="shadow-lg hover:bg-green-700 rounded-md p-2">
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-dark-green md:text-[1.6rem] bg-clip-text text-transparent  to-custom-orange " : "md:text-[1.6rem] text-gray-700 dark:text-white"
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li className="shadow-lg hover:bg-green-700 rounded-md p-2">
                        <NavLink
                            to="/carrière"
                            className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-dark-green md:text-[1.6rem] bg-clip-text text-transparent  to-custom-orange " : "md:text-[1.6rem] text-gray-700 dark:text-white"
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Carrière
                        </NavLink>
                    </li>
                </ul>
                </div>
                <div className="flex flex-col gap-4 pt-5">
                    <button className=" hover:bg-green-700 py-3 md:text-[1.6rem]">support client</button>
                    <button className="hover:bg-green-700 bg-red-700 py-3 md:text-[1.6rem]">deconnexion</button>
                </div>
            </div>

        </div>
    )
}

export default Menu