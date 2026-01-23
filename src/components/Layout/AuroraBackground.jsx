// src/components/AuroraBackground.jsx
import * as React from 'react';
import { motion } from 'framer-motion';

import style from '@style/StyleComponents.module.css'

const AuroraBackground = () => {

    return (

        <div className={style.aurora_wrapper}>

            {/* === 1º ROUND DE BLOBS === */}

            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.2, 0.8],
                    x: ['-40%', '-60%', '-40%'],
                    y: ['-40%', '-60%', '-40%'],
                }}
                transition={{
                    duration: 12,         // Duração de cada ciclo da animação
                    repeat: Infinity,     // Repete infinitamente
                    ease: 'easeInOut',    // Suavidade da transição
                    delay: 0,             // Sem atraso inicial
                }}
                className={`${style.aurora_blob} ${style.blob_amarelo}`}
            ></motion.div>


            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '50%', y: '50%' }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.9, 1.1, 0.9],
                    x: ['60%', '40%', '60%'],
                    y: ['60%', '40%', '60%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,             // Atraso para as animações não ficarem sincronizadas
                }}
                className={`${style.aurora_blob} ${style.blob_lilas}`}
            ></motion.div>


            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '0%', y: '0%' }}
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.7, 1.0, 0.7],
                    x: ['10%', '-10%', '10%'],
                    y: ['-20%', '20%', '-20%'],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
                className={`${style.aurora_blob} ${style.blob_magenta}`}
            ></motion.div>



            {/* === 2º ROUND DE BLOBS === */}

            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.2, 0.8],
                    x: ['-40%', '-60%', '-40%'],
                    y: ['-40%', '-60%', '-40%'],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0,
                }}
                className={`${style.aurora_blob} ${style.blob_magenta}`}
            ></motion.div>

            
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '50%', y: '50%' }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.9, 1.1, 0.9],
                    x: ['60%', '40%', '60%'],
                    y: ['60%', '40%', '60%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className={`${style.aurora_blob} ${style.blob_lilas}`}
            ></motion.div>

            
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '30%', y: '-10%' }}
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.7, 1.0, 0.7],
                    x: ['35%', '25%', '35%'],
                    y: ['-5%', '-15%', '-5%'],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
                className={`${style.aurora_blob} ${style.blob_amarelo}`}
            ></motion.div>



            {/* <div className={style.aurora_overlay} /> */}
        </div>
    );
};

export default AuroraBackground;