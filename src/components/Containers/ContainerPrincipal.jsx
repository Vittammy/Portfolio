import style from '@containers/StyleContainers.module.css'

// => Components - Blocos
import BlocoHome from '@containers/Blocos/BlocoHome'
import BlocoProjetos from '@containers/Blocos/BlocoProjetos'
import BlocoSobre from '@containers/Blocos/BlocoSobre'

import IconsTech from '@layout/Home/IconsTech'

import { Icon } from '@basics/icons'

export default function ContainerPrincipal() {

    const color = 'rodape';

    return (
        <>
            {/*     -----    Bloco Home     -----    */}
            <section id='home'>
                <BlocoHome />
            </section>

            {/*     =====>    Curva superior */}
            <svg className='curva_page' viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#f1f1f1"
                    d="M0,320 C480,260 960,260 1440,320 L1440,320 L0,320 Z">
                </path>
            </svg>


            <section style={{ backgroundColor: '#f1f1f1', height: '105%' }}>

                {/*     -----    Bloco Projetos     -----    */}
                <section id='projetos'>
                    <BlocoProjetos />
                </section>

                <section>
                    <IconsTech />
                </section>

                {/*     -----    Bloco Sobre     -----    */}
                <section id='sobre'>
                    <BlocoSobre />
                </section>

            </section>


            {/*     =====>    Curva inferior */}
            <svg className='curva_page' viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#f1f1f1"
                    d="M0,0 L1440,0 L1440,260 C960,300 480,300 0,260 Z">
                </path>
            </svg>


            {/*     =====>    Rodapé */}
            <div className={style.rodape_view} id='contatos' >

                <p style={{ fontSize: '25px' }}>© 2026 Vitória Amaral. Todos os direitos reservados.</p>

                <div className={style.rodape_icons}>
                    <a href="https://github.com/Vittammy"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="GitHub" name_color={color} />
                    </a>

                    <a href="https://www.linkedin.com/in/vitoria-tammy"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="Linkedin" name_color={color} />
                    </a>

                    <a href="mailto:vitoriatammytec@email.com?subject=Contato pelo Portfólio&body=Olá Vitória,%0D%0AVim pelo seu portfólio!"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="Email" name_color={color} />
                    </a>

                    <a href="https://wa.me/5512996787160?text=Olá%20Vitória,%20vim%20pelo%20seu%20portfólio!"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="Whatsapp" name_color={color} />
                    </a>
                </div>
            </div>
        </>
    )
}