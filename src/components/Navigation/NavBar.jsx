import * as React from 'react';

import style from '@navigation/NavBar.module.css';

// => Components
import HomeTitle from '@layout/Home/Home_Title'

function NavBar() {

    const [ isScrolled, setIsScrolled ] = React.useState(false);
    const [ contentKey, setContentKey ] = React.useState("home");

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const temFundo = contentKey !== 'home' || isScrolled;


    return (
        <>
            <div className={style.navbar} 
                style={{ background: temFundo ? "var(--color-blue-principal)" : "transparent", }}
            >
                <a href="#home" 
                    onClick={() => setContentKey('home')}
                    className={`${contentKey === 'home' ? style.link_ativo : style.navbar_link}`}
                    >Home
                </a>

                <a href="#projetos"
                    onClick={() => setContentKey('projetos')}
                    className={`${contentKey === 'projetos' ? style.link_ativo : style.navbar_link}`}
                    >Projetos
                </a>

                <a href="#sobre" 
                    onClick={() => setContentKey('sobre mim')}
                    className={`${contentKey === 'sobre mim' ? style.link_ativo : style.navbar_link}`}
                    >Sobre mim
                </a>

                <a href="#contatos" 
                    onClick={() => setContentKey('contatos')}
                    className={`${contentKey === 'contatos' ? style.link_ativo : style.navbar_link}`}
                    >Contatos
                </a>
            </div>

            <div className={style.navbar_02}
                style={{ background: isScrolled ? "var(--background-blue)" : "transparent", }}
            >
                <HomeTitle/>
            </div>
        </>
    )
}

export default NavBar;