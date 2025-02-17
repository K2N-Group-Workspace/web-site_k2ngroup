import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {

  const error = useRouteError() as Error
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient">
      <h1 className="text-9xl sm:text-full font-bold">404</h1>
      <p className="text-2xl text-white mt-4">Oops! Cette Page est introuvable </p>
      <p className="text-white mt-2 text-sm max-w-screen-2xl p-2">
        {error?.message || "la page que vous recherchez a peut-être été supprimée si son nom a changé ou est temporairement indisponible."}
      </p>
     <NavLink to=""><Button className='bg-white mt-8 rounded-[0.5rem] shadow-md shadow-white'>Retour à la page d'acceuil</Button></NavLink>
    </div>
  )
} 