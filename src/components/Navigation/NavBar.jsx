import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useIsMobile } from '../Control/useControl';

import style from '../../css/StyleComponents.module.css';

// => Ícones 
import { Icon } from '@/icons';

const menuItems = [
    { icon: 'FolderOpen', label: "Projetos" },
    { icon: 'User', label: "Sobre mim" },
    { icon: 'Chat', label: "Contatos" },
];

export default function MenuArco() {

    const isMobile = useIsMobile();
    
    const [isOpen, setIsOpen] = React.useState(false);

    // => Configurações do arco ( mobile || desktop )
    const menuConfig = isMobile
        ? {
            radius: 100,
            startAngle: 270,
            endAngle: 180,
            positionClass: style.menu_mobile,

            // - Metade inferior direita
            //startAngle: 180,
            //endAngle: 90,
        }
        : {
            radius: 180,                            // quão longe os itens se afastam
            startAngle: 270,                        // inicia embaixo (graus)
            endAngle: 90,                           // termina no topo (graus)
            positionClass: style.menu_desktop,
        };


    const { radius, startAngle, endAngle } = menuConfig;


    return (
        <>
            <div className={`${style.menu_content} ${menuConfig.positionClass}`}>
                {/* Botão de Trigger (Toggle) */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${style.menu_botao} shadow-xl/30`}
                    whileTap={{ scale: 0.7 }}
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className='text-2xl'
                    >
                        +
                    </motion.span>
                </motion.button>


                {/* Container dos Itens */}
                <AnimatePresence mode="wait">

                    {isOpen && (
                        <>

                            {/* Arco / Linha do Menu */}
                            <motion.svg
                                width={radius * 2}
                                height={radius * 2}
                                viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                                className={style.menu_arc}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0 }}
                            >
                                <motion.path
                                    d={`
                                        M ${radius}, 0
                                        A ${radius} ${radius} 0 0 1 ${radius}, ${radius * 2}
                                    `}
                                    fill="none"
                                    stroke="var(--color-magenta)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    exit={{ pathLength: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            </motion.svg>


                            {/* Itens do Menu */}
                            {menuItems.map((item, index) => {

                                const angleInDegrees = startAngle + (index * (endAngle - startAngle)) / (menuItems.length - 1);
                                const angleInRadians = (angleInDegrees * Math.PI) / 180;

                                const x = -Math.cos(angleInRadians) * radius;
                                const y = Math.sin(angleInRadians) * radius;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                                        animate={{ x, y, scale: 1, opacity: 1 }}
                                        exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}

                                        transition={{
                                            duration: 0.2,
                                            delay: index * 0.1
                                        }}

                                        className={`${style.menu_item} shadow-xl/30`}

                                        // whileHover={!isMobile ? "hover" : undefined}
                                    >
                                        <motion.button
                                            className={style.menu_icon}
                                            variants={{
                                                hover: { scale: 1.05 }
                                            }}
                                        >
                                            <Icon icon={item.icon} />
                                        </motion.button>

                                        {/* Label aparece quando o botão EXPANDE */}
                                        {!isMobile && (
                                            <motion.span
                                                className={style.menu_label}
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.label}
                                            </motion.span>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}