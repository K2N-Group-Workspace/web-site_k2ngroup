import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

const founders = [
  {
    name: "Jean Dupont",
    role: "Responsable de K2N Konsultant",
    story: "Jean Dupont a commencé sa carrière dans le conseil en stratégie avant de fonder K2N Konsultant. Passionné par l'innovation, il guide les entreprises vers le succès.",
    color: "bg-blue-100",
    logo: "logo-K.svg",
    photo: "konsultan.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jeandupont",
      twitter: "https://twitter.com/jeandupont",
    },
  },
  {
    name: "Marie Curie",
    role: "Responsable de K2N Service",
    story: "Marie Curie a une expertise approfondie dans la gestion des services clients. Elle a développé des solutions sur mesure pour répondre aux besoins des clients de K2N Service.",
    color: "bg-green-100",
    logo: "logo-S.svg",
    photo: "service.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mariecurie",
      twitter: "https://twitter.com/mariecurie",
    },
  },
  {
    name: "Pierre Durand",
    role: "Responsable de K2N Technologie",
    story: "Pierre Durand est un pionnier dans le domaine de la technologie. Il a dirigé le développement de solutions technologiques de pointe pour K2N Technologie.",
    color: "bg-red-100",
    logo: "logo-T.svg",
    photo: "technologie.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/pierredurand",
      twitter: "https://twitter.com/pierredurand",
    },
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

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
};

function Slider() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col items-center justify-between">
      {/* Header */}
      <motion.header
        className="h-4/6 flex flex-col md:w-full items-center justify-center bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl text-white font-bold mb-4">K2N Group</h1>
        <p className="text-xl md:text-2xl text-gray-400">Découvrez les fondateurs de notre entreprise</p>
      </motion.header>
      {/* Section des fondateurs */}
      <motion.section
        className="min-h-screen p-7 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className="h-s flex gap-4 flex-col md:flex-row items-center  w-full bg-blue-"
            variants={itemVariants}
          >
            {/* Partie Photo */}
            <div className="flex-1 flex justify-center ">
              <motion.img
                src={founder.photo}
                alt={`Photo de ${founder.name}`}
                className="w-31 h-31 md:w-96 md:h-96 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            {/* Partie Logo et Story */}
            <div className="flex-1 relative ">
              <motion.div
                className={`${founder.color} p-8 rounded-lg shadow-lg h-full flex flex-col justify-center`}
                variants={textVariants}
              >
                <motion.img
                  src={founder.logo}
                  alt={`Logo ${founder.role}`}
                  className="w-32 h-32 md:w-48 md:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
                />
                <motion.h2 className="text-3xl font-bold mb-4" variants={textVariants}>
                  {founder.name}
                </motion.h2>
                <motion.h3 className="text-xl font-semibold mb-4" variants={textVariants}>
                  {founder.role}
                </motion.h3>
                <motion.p className="text-gray-700" variants={textVariants}>
                  {founder.story}
                </motion.p>
                <motion.div className="mt-4 flex gap-8" variants={textVariants}>
                  <a href={founder.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
                  </a>
                  <a href={founder.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <img src="twitter-icon.svg" alt="Twitter" className="w-8 h-8" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.section>
      {/* Footer */}
      {/* <motion.footer
        className=" flex flex-col items-center justify-center bg-gradient-to-t from-black to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Rejoignez-nous</h2>
        <p className="text-xl md:text-2xl text-gray-400">Faites partie de notre aventure.</p>
      </motion.footer> */}
    </div>
  );
}

export default Slider;