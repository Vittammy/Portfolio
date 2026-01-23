import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef } from "react";


import style from '@layout/Cards/StyleCards.module.css'
import styleImg from '@basics/images/StyleImages.module.css'


export default function CarrosselSimples({ listaImagens = [] }) {

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;

      if (direction === "left") {
        if (scrollLeft <= 0) {
          carouselRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          carouselRef.current.scrollTo({ left: scrollLeft - clientWidth, behavior: "smooth" });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="relative group w-full mx-auto">

      {/* Botões de Navegação */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-2 rounded-full cursor-pointer"
      >
        <CaretLeft size={24} color="white" />
      </button>

      {/* Container do Carrossel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {listaImagens.map((img, index) => (
          <motion.div 
            key={index}
            className={style.carrossel_img}
          >
            <img src={img} className={styleImg.projeto_img} />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-2 rounded-full cursor-pointer"
      >
        <CaretRight size={24} color="white" />
      </button>
    </div>
  );
}