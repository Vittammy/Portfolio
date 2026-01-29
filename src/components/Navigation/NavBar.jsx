import * as React from 'react';

import style from '@navigation/NavBar.module.css';
import { useIsMobile } from '@control/useControl'

// => Components
import HomeTitle from '@layout/Home/Home_Title'
import { Icon } from '@basics/icons';

function NavBar() {

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [contentKey, setContentKey] = React.useState("home");

    // => UseEffect.Scroll
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // => Verificações finais
    const temFundo = contentKey !== 'home' || isScrolled;
    const isMobile = useIsMobile();


    // => UseEffect.Observer
    React.useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setContentKey(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6, // 60% da seção visível
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    const color = 'navbar';


    return (
        <>

            <div className={style.navbar}
                style={{ background: temFundo ? "var(--background-blue)" : "transparent", }}
            >
                <a href="#home"
                    onClick={() => setContentKey('home')}
                    className={`${contentKey === 'home' ? style.link_ativo : style.navbar_link}`}
                >
                    <Icon icon="Home" name_color={color} />
                    Home
                </a>

                <a href="#projetos"
                    onClick={() => setContentKey('projetos')}
                    className={`${contentKey === 'projetos' ? style.link_ativo : style.navbar_link}`}
                >
                    <Icon icon="Projetos" name_color={color} />
                    Projetos
                </a>

                <a href="#sobre"
                    onClick={() => setContentKey('sobre')}
                    className={`${contentKey === 'sobre' ? style.link_ativo : style.navbar_link}`}
                >
                    <Icon icon="User" name_color={color} />
                    Sobre mim
                </a>

                <a href="#contatos"
                    onClick={() => setContentKey('contatos')}
                    className={`${contentKey === 'contatos' ? style.link_ativo : style.navbar_link}`}
                >
                    <Icon icon="Email" name_color={color} />
                    Contatos
                </a>
            </div>

            {isMobile && (
                <div className={style.navbar_02}>
                    <HomeTitle />
                </div>
            )}


        </>
    )
}

export default NavBar;