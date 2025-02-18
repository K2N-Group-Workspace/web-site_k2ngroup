// import Slider from "./component/Slider";
import { Avis } from "@/components/avis";
import ServicesSection from "./component/ServiceSection";
function Home() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen font-roboto">
        {/* Container avec l'image de fond */}
        <div
          className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
          style={{ backgroundImage: "url('/bureau.png')" }}
        >
          {/* Titre */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-normal text-center text-white bg-black/25 p-4 rounded w-full max-w-[90rem]"  data-auto-translate>
            Optimisez vos performances grâce à nos solutions IT
          </h1>

          {/* Paragraphe */}
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-center text-white bg-black/25 p-4 rounded w-full max-w-[90rem]"  data-auto-translate>
            Nos solutions informatiques sur mesure sont conçues pour propulser
            votre entreprise vers de nouveaux sommets. En optimisant vos
            processus, en améliorant votre efficacité et en renforçant votre
            sécurité, nous vous permettons de libérer tout le potentiel de votre
            activité et de devancer la concurrence.
          </p>

          {/* Boutons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-[90rem]">
            <button className="rounded-full border-[0.1rem] px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg border-solid border-white hover:bg-green-700 hover:text-white text-white">
              Obtenir un devis
            </button>
            <button className="rounded-full px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg border-solid border-[0.1rem] border-white hover:bg-green-700 hover:text-white text-white">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <Slider /> */}
      </div>
      <div className=" my-[5rem]">
        {/* <Produit /> */}
      </div>
      {/* <Slider/> */}
      <ServicesSection/>
      <Avis />
    </div>
  );
}

export default Home;
