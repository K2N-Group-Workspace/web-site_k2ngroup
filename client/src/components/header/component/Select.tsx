import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsOpen(false);
        }, 100); // 1 seconde avant de masquer la div
        setHoverTimeout(timeout);
    };

    return (
        <div className={`relative  text-[1rem] flex items-center gap-2 rounded-md px-2 text-dark dark:text-white  ${isOpen ? 'text-dark dark:text-white' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <p>Sevices</p>
            {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            {isOpen && (
                <div className="absolute z-50 p-4 top-20 left-[40%rem] dark:bg-gray-800 rounded-md bg-white w-[50rem]  shadow-md ">
                    <div className="flex gap-4 m-4">
                        <div className='flex flex-col gap-2 flex-1 size-fit'>
                            <Link to="/services"  >
                                <img src="/logo-S.svg" alt="logo k2n services" className=" rounded-md  shadow-lg size-full object-cover " />
                            </Link>
                            <h2 className="font-semibold mb-2 underline underline-offset-4 ">K2n Services</h2>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>K2n pisciculture</a>
                            <a href='/boutique' className='text-[1.1rem] text-dark  dark:text-white   hover:bg-green-600 rounded-md px-2'>K2n boutique</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>K2n argents d'entretien</a>

                        </div>
                        <div className='flex flex-1 gap-2 flex-col size-fit'>
                            <Link to="/konsultant" >
                                <img src="/logo-K.svg" alt="logo k2n konsultant" className=" rounded-md  shadow-lg size-full  object-contain" />
                            </Link>
                            <h2 className="font-semibold mb-2 underline underline-offset-4 ">K2n Konsultant</h2>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Construction des fossos septique biofil/ecologique</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Developpement d'applicatio</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>suivi et evaluationnde projet</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Electricite batiment</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Etude de marché</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Etudes statistiqueset socio-demographiques</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Formation sur site en ligne</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>notice d'impact environnemental</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Traduction et interprétation</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Datamining</a>
                        </div>
                        <div className='flex flex-1 gap-2 flex-col size-fit'>
                            <Link to="/technologie" >
                                <img src="/logo-T.svg" alt="logo k2n technologie" className=" rounded-md  shadow-lg size-full object-cover" />
                            </Link>
                            <h2 className="font-semibold mb-2 underline underline-offset-4 ">K2n Technologie</h2>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Recherche en statistique appliquée</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Recherche en sciences sociales et sciences humaines</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Recherche en economie appliquée</a>
                            <a href='' className='text-[1.1rem] text-dark  dark:text-white hover:bg-green-600 rounded-md px-2'>Recherche et developpement IA</a>

                        </div>

                    </div>
                </div>
            )}
        </div >
    );
}

export default Select;