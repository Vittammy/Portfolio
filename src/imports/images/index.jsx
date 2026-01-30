// => Imagens
import perfil from '@assets/images/perfil/vitoria1.jpg';

// # Projeto - MWeb
import mweb1 from '@assets/images/projetos/mweb/mweb1.png'
import mweb2 from '@assets/images/projetos/mweb/mweb2.png'
import mweb3 from '@assets/images/projetos/mweb/mweb3.png'

// => CSS
import style from '@basics/images/StyleImages.module.css'


export const Projeto = {
    MWeb: [mweb1],
    Perfil: [perfil],
}


function Image({ imagem, title, estilo }) {
    return (
        <>
            <img src={imagem} alt={title} className={estilo} />
        </>
    )
}


export const Images = {
    Perfil: () => {
        return (
            <Image
                imagem={perfil}
                title="Profile"
                estilo={style.profile_img}
            />
        )
    },

    MWeb: () => {
        return (
            <Image
                imagem={mweb2}
                title="Project - MWeb"
                estilo={style.projects_img}
            />
        )
    },
}

export const ProjetosEstilizados = {
    Mweb: () => Projeto.mweb.map((img, index) => {
        return (
            <Image
                key={index}
                imagem={img}
                title={`MWeb - ${index}`}
                estilo={style.projeto_img}
            />
        )
    }),

    Pessoa: () => Projeto.pessoa.map((img, index) => {
        return (
            <Image
                key={index}
                imagem={img}
                title={`Pessoa - ${index}`}
                estilo={style.projeto_img}
            />
        )
    }),
}