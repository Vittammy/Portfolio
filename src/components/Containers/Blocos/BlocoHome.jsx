import style from '@/css/StyleComponents.module.css'

import perfil from '@/assets/images/perfil/perfil_simples.png';

import { useIsMobile } from '../../Control/useControl';
import { Text, Heading } from '@radix-ui/themes'
import { motion } from 'framer-motion'

export default function BlocoHome() {

    const isMobile = useIsMobile();

    return (
        <>
            <div className={style.bloco_home}>

                <div className={style.home_imagem}>
                    <div className={style.profile_container}>

                        {/* Anel de Brilho (O que corre) */}
                        <motion.svg
                            viewBox="0 0 100 100"
                            className={style.ring_svg_dash}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                stroke="url(#gradient-hero)"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="30 150"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#edd01f" />
                                    <stop offset="100%" stopColor="#edd01f" />
                                </linearGradient>
                            </defs>
                        </motion.svg>

                        <div className={style.image_wrapper}>
                            <img src={perfil} alt="Profile" className={style.profile_img} />
                        </div>
                    </div>
                </div>


                <div className={style.home_nome}>
                    <Heading as="h1" size={isMobile ? "5" : "9"} weight="medium"
                        style={{ color: 'var(--color-cinza-light)' }}
                    >Vitória Amaral </Heading>

                    <Text size={isMobile ? "3" : "5"}
                        style={{ color: 'var(--color-cinza-light)' }}
                    >Dev Front-end | Web Designer </Text>
                </div>

            </div>
        </>
    )
}