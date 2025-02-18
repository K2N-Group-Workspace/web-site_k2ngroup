import { motion } from "framer-motion";

const founders = [
  {
    name: "Jean Dupont",
    role: "Responsable de K2N Konsultant",
    story: "Jean Dupont a commencé sa carrière dans le conseil en stratégie avant de fonder K2N Konsultant. Passionné par l'innovation, il guide les entreprises vers le succès.",
    color: "bg-blue-100",
    logo: "logo-K.svg",
  },
  {
    name: "Marie Curie",
    role: "Responsable de K2N Service",
    story: "Marie Curie a une expertise approfondie dans la gestion des services clients. Elle a développementé des solutions sur mesure pour répondre aux besoins des clients de K2N Service.",
    color: "bg-green-100",
    logo: "logo-S.svg",
  },
  {
    name: "Pierre Durand",
    role: "Responsable de K2N Technologie",
    story: "Pierre Durand est un pionnier dans le domaine de la technologie. Il a dirigé le développement de solutions technologiques de pointe pour K2N Technologie.",
    color: "bg-red-100",
    logo: "logo-T.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Slider() {
  return (
    <div className="h-screen overflow-y-auto">
      {/* Header */}
      <motion.header
        className="h-3/6 flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4">K2N Group</h1>
        <p className="text-xl md:text-2xl text-gray-400">Découvrez les fondateurs de notre entreprise</p>
      </motion.header>

      {/* Section des fondateurs */}
      <motion.section
        className="min-h-screen p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className={`${founder.color} p-8 h-screen rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center gap-8`}
            variants={itemVariants}
          >
          <div>
            <img src="/konsultan.jpg" alt={`Logo ${founder.role}`} className="w-32 h-32 md:w-48 md:h-48" />
          </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">{founder.name}</h2>
              <h3 className="text-xl font-semibold mb-4">{founder.role}</h3>
              <p className="text-gray-700">{founder.story}</p>
            </div>
            <div className="flex-1 flex justify-center">
              <motion.img
                src={founder.logo}
                alt={`Logo ${founder.role}`}
                className="w-32 h-32 md:w-48 md:h-48"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Rejoignez-nous</h2>
        <p className="text-xl md:text-2xl text-gray-400">Faites partie de notre aventure.</p>
      </motion.footer>
    </div>
  );
}

export default Slider;