import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import style from '@/css/StyleComponents.module.css';

import { Icon } from '@/icons'

export default function CardProjeto({ projeto }) {
  return (
    <Dialog.Root>
      {/* O Card que o usuário clica */}
      <Dialog.Trigger asChild>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className={`${style.card_simples} shadow-xl/30`}
        >
          <img src={projeto.imagem} className={style.card_simples_img} alt={projeto.titulo} />
          <div className={style.card_simples_info}>
            <h3 className={style.card_simples_titulo}>{projeto.titulo}</h3>
            <span className={style.card_simples_tag}>Ver Detalhes</span>
          </div>
        </motion.div>
      </Dialog.Trigger>

      {/* Caixa de Diálogo (O Modal) */}
      <Dialog.Portal>
        <Dialog.Overlay className={style.dialog_overlay} />
        <Dialog.Content className={style.dialog_content}>
          <div className={style.dialog_grid}>
            <img src={projeto.imagem} className={style.dialog_img} alt={projeto.titulo} />
            
            <div className={style.dialog_textos}>
              <Dialog.Title className={style.dialog_titulo}>{projeto.titulo}</Dialog.Title>
              <Dialog.Description className={style.dialog_desc}>
                {projeto.descricao_completa}
              </Dialog.Description>
              
              <div className={style.dialog_tags}>
                {projeto.tecnologias.map(tech => (
                  <span key={tech} className={style.tech_tag}>{tech}</span>
                ))}
              </div>

              <div className={style.dialog_actions}>
                <a href={projeto.link_github} className={style.btn_github}>
                    <Icon icon="GitHub" /> 
                    GitHub</a>
              </div>
            </div>
          </div>
          
          <Dialog.Close asChild>
            <button className={style.dialog_close}>✕</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}