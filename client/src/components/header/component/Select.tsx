import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from 'react-router-dom';

type ActiveService = 'services' | 'konsultant' | 'technologie' | null;

function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeService, setActiveService] = useState<ActiveService>(null);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleServiceHover = (service: ActiveService) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setActiveService(service);
    };

    const handleServiceLeave = () => {
        const timeout = setTimeout(() => {
            setActiveService(null);
        }, 100);
        setHoverTimeout(timeout);
    };

    return (
        <div 
            className={`relative text-[1rem] flex items-center gap-2 rounded-md px-2 text-dark dark:text-white ${
                isOpen ? 'text-dark dark:text-white' : ''
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <p>Services</p>
            {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            
            {isOpen && (
                <div className="absolute z-50 p-4 top-20 left-[40%] dark:bg-gray-800 rounded-md bg-white w-[50rem] shadow-md"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    <div className="flex gap-4 m-4">
                        {/* Service K2n Services */}
                        <div 
                            className='flex flex-col gap-2 flex-1 size-fit'
                            onMouseEnter={() => handleServiceHover('services')}
                            onMouseLeave={handleServiceLeave}
                        >
                            <Link to="/services">
                                <img 
                                    src="/logo-S.svg" 
                                    alt="logo k2n services" 
                                    className="rounded-md shadow-lg size-full object-cover"
                                />
                            </Link>
                            <h2 className="font-semibold mb-2 underline underline-offset-4">K2n Services</h2>
                            {activeService === 'services' && (
                                <div className="flex flex-col gap-2">
                                    <a href='' className='text-[1.1rem] hover:bg-green-600 rounded-md px-2'>K2n pisciculture</a>
                                    <a href='/boutique' className='text-[1.1rem] hover:bg-green-600 rounded-md px-2'>K2n boutique</a>
                                    <a href='' className='text-[1.1rem] hover:bg-green-600 rounded-md px-2'>K2n argents d'entretien</a>
                                </div>
                            )}
                        </div>

                        {/* Service K2n Konsultant */}
                        <div 
                            className='flex flex-1 gap-2 flex-col size-fit'
                            onMouseEnter={() => handleServiceHover('konsultant')}
                            onMouseLeave={handleServiceLeave}
                        >
                            <Link to="/konsultant">
                                <img 
                                    src="/logo-K.svg" 
                                    alt="logo k2n konsultant" 
                                    className="rounded-md shadow-lg size-full object-contain"
                                />
                            </Link>
                            <h2 className="font-semibold mb-2 underline underline-offset-4">K2n Konsultant</h2>
                            {activeService === 'konsultant' && (
                                <div className="flex flex-col gap-2">
                                    <a href='' className='text-[1.1rem] hover:bg-green-600 rounded-md px-2'>Construction des fosses septiques biofil/ecologique</a>
                                    <a href='' className='text-[1.1rem] hover:bg-green-600 rounded-md px-2'>Développement d'application</a>
                                    {/* ... autres liens ... */}
                                </div>
                            )}
                        </div>

                        {/* Service K2n Technologie */}
                        <div 
                            className='flex flex-1 gap-2 flex-col size-fit'
                            onMouseEnter={() => handleServiceHover('technologie')}
                            onMouseLeave={handleServiceLeave}
                        >
                            <Link to="/technologie">
                                <img 
                                    src="/logo-T.svg" 
                                    alt="logo k2n technologie" 
                                    className="rounded-md shadow-lg size-full object-cover"
                                />
                            </Link>
                            <h2 className="font-semibold mb-2 underline underline-offset-4">K2n Technologie</h2>
                            {activeService === 'technologie' && (
                                <div className="flex flex-col gap-2">
                                    <a href='' className='text-[1.1rem] hover:bg-green-600 rounded-md px-2'>Recherche en statistique appliquée</a>
                                    {/* ... autres liens ... */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Select;