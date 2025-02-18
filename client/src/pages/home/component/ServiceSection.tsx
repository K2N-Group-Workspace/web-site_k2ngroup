import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaShoppingCart,
  FaFish,
  FaTools,
  FaFileInvoice,
  FaBlog,
  FaChalkboardTeacher,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Boutique en ligne",
      icon: <FaShoppingCart className="text-3xl text-blue-600" />,
      description:
        "Vente de nos articles de production aquacole et accessoires",
      images: ["/images/boutique1.jpg", "/images/boutique2.jpg"],
      path: "/boutique",
    },
    {
      title: "Élevage piscicole",
      icon: <FaFish className="text-3xl text-green-600" />,
      description: "Production de poissons d'eau douce de qualité supérieure",
      images: ["/images/elevage1.jpg", "/images/elevage2.jpg"],
      path: "/elevage",
    },
    {
      title: "Entretien des infrastructures",
      icon: <FaTools className="text-3xl text-orange-600" />,
      description:
        "Service complet de maintenance pour vos installations piscicoles",
      images: ["/images/maintenance1.jpg", "/images/maintenance2.jpg"],
      path: "/maintenance",
    },
    {
      title: "Devis en ligne",
      icon: <FaFileInvoice className="text-3xl text-purple-600" />,
      description:
        "Obtenez instantanément un devis personnalisé pour vos projets",
      images: ["/images/devis.jpg"],
      path: "/devis",
    },
    {
      title: "Blog technique",
      icon: <FaBlog className="text-3xl text-red-600" />,
      description: "Actualités et conseils experts en aquaculture",
      images: ["/images/blog1.jpg", "/images/blog2.jpg"],
      path: "/blog",
    },
    {
      title: "Formation en ligne",
      icon: <FaChalkboardTeacher className="text-3xl text-teal-600" />,
      description: "Cours spécialisés et ressources pédagogiques",
      images: ["/images/elearning1.jpg", "/images/elearning2.jpg"],
      path: "/formation",
    },
  ];

  return (
    <section className="px-8 text-white">
      <div className="max-w mx-auto space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Nos Services & Réalisations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="block hover:no-underline"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 md:h-72">
                  {service.images.length > 1 ? (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      pagination={{ clickable: true }}
                      className="h-full"
                    >
                      {service.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={img}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="">{service.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
