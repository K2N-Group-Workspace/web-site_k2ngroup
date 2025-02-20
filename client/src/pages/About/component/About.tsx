import Slider from '@/pages/home/component/Slider';
import Info from './Info';
import Map from './map';
const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen font-Roboto">
        {/* Container avec l'image de fond */}
        <div
          className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
          style={{ backgroundImage: "url('../public/livetygroup.png')" }}
        >
          {/* Titre */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-normal text-center text-white bg-black/25 p-4 rounded w-full max-w-[20rem]">
            A propos
          </h1>

          {/* Paragraphe */}
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-center text-white bg-black/25 p-4 rounded w-full max-w-[20rem]">
            Apprenez un peu plus sur nous
          </p>
        </div>
      </div>
      <div className="flex gap-10 lg:gap-[7rem] justify-center flex-col lg:flex-row my-10">
        <div className="flex flex-col gap-10">
          <Info
            img="../public/cube.png"
            title="Notre Histoire"
            description="K2N group est un projet qui résulte d’une série de réflexions qu’avait un jeune camerounais depuis plusieurs années. Après avoir mûri l’idée et que celle-ci t ait accroché avec deux autres personnes que, M. Perrin KONMENEK crée l’entreprise auprès des autorités compétentes le 16 mars 2023. Avec pour nom de départ Konsultant’s qui dans la langue africaine faire référence à consultant, l’entreprise porte le nom de K2N GROUP formé de trois divisions : Konsultant’s, Technologies et Services.."
          />
          <Info
            img="../public/cube.png"
            title="Qui sommes nous ?"
            description="Nous nous positionnons comme un expert en conseil et en consultation, offrant une expertise pointue et personnalisée dans une multitude de domaines. Que ce soit pour optimiser les stratégies d'entreprise, innover ou résoudre des problématiques complexes, nos équipes accompagnent nos clients, qu'il s'agisse de grands groupes ou de PME, dans la réalisation de leurs objectifs les plus ambitieux."
          />
          <Info
            img="../public/cube.png"
            title="Notre mission"
            size="3rem"
            description="K2N group a pour mission la prestation de services de conseil et de consultation dans divers domaines que ce soit pour son propre compte ou pour le compte de tiers."
          />
        </div>
        <div className="flex justify-center items-center ">
          <img
            src="../public/Colaborateur.png"
            alt=""
            className="w-[65rem] h-auto"
          />
        </div>
      </div>
      <div className="flex gap-10 lg:gap-[7rem] justify-center flex-col lg:flex-row my-[10rem]">
        <div className="flex flex-col  gap-[5rem]">
          <h1 className="text-white lg:text-5xl text-2xl font-bold">
            Description du logo
          </h1>
          <img src="../public/3D.png" alt="" className="w-[65rem] h-auto" />
        </div>
        <div className="flex flex-col gap-10">
          <Info
            img="../public/cube.png"
            title="KN2"
            size="3rem"
            description="K2N est un nom riche de sens, issu des initiales de ses fondateurs : K pour KAPNGANG, K pour KONMENEK, et N pour NGOUANA. Il incarne l'héritage de ces pionniers et symbolise l'union de leurs compétences et de leur vision."
          />
          <Info
            img="../public/cube.png"
            title="Notre logo"
            description="Le bouquetin de Nubie est l’animal choisit pour représenter notre logo. C’est un animal réputé pour son agilité qui cadre avec le slogan ( il traduit le fait que nous mettons le client au centre de l’œuvre que nous l’accompagnons à réaliser comme le veut la philosophie des méthodes dites agiles) et son aptitude d’adaptation dans les milieux accidentés qui sont son environnement naturel."
          />
        </div>
      </div>
          <div>
        <Slider/>
      </div>
      <div>
        <Map/>
      </div>
    </div>
  );
};

export default About;
