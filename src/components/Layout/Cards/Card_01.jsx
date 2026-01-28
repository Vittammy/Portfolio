import style from '@layout/Cards/StyleCards.module.css'

// => Radix
import * as Dialog from '@radix-ui/react-dialog';
import { Box, Inset } from '@radix-ui/themes';

import { Images, Projeto } from '@basics/images'
import { Icon } from '@basics/icons'

function Card_01({ name_projeto, desc_projeto, links_projeto = [] }) {

    const ImagemCaminho = Images[name_projeto] ? Projeto[name_projeto][0] : null;
    const ComponenteImagem = Images[name_projeto];

    return (
        <>
            <div className={`${style.card_01}`}>

                <Dialog.Root>
                <div className={style.card_container}>

                    <Dialog.Trigger asChild>
                        <div style={{ cursor: 'pointer', width: '100%', height: '100%' }}>
                            {ComponenteImagem ? (
                                <div className={style.image_wrapper}>
                                    <ComponenteImagem />
                                </div>
                            ) : (
                                <div 
                                    className={style.card_background} 
                                    style={{ backgroundImage: ImagemCaminho ? `url(${ImagemCaminho})` : 'none' }}
                                />
                            )}
                        </div>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        {/* Fundo escurecido */}
                        <Dialog.Overlay 
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                position: 'fixed',
                                inset: 0,
                                display: 'grid',
                                placeItems: 'center',
                                zIndex: 1000
                            }}
                        >

                        {/* Conteúdo: A imagem expandida */}
                        <Dialog.Content style={{ maxWidth: '90vw', outline: 'none' }}>
                            <Dialog.Close asChild>
                                <img
                                    src={ImagemCaminho}
                                    style={{
                                    maxHeight: '90vh',
                                    width: 'auto',
                                    cursor: 'pointer',
                                    display: 'block'
                                    }}
                                />
                            </Dialog.Close>
                        </Dialog.Content>

                        </Dialog.Overlay>
                    </Dialog.Portal>

                    <div className={style.card_text}>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'bold' }}
                            >{name_projeto || 'Projeto sem nome.'}
                        </h3>

                        <p style={{ fontSize: 'var(--font-size-h6)', fontWeight: '300' }}>{desc_projeto}</p>

                        <div className={style.card_rodape}>
                            {links_projeto && links_projeto.map(( link, index ) => (
                                    
                                    <a 
                                        key={index} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={style.botao_link}
                                    >
                                        <Icon icon={link.label} />
                                    </a>
                            ))}
                        </div>
                    </div>

                </div>
                </Dialog.Root>

            </div>
        </>
    )
}

export default Card_01;