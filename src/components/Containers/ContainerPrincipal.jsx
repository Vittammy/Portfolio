import style from '@style/StyleComponents.module.css'

// => Components - Blocos
import BlocoHome from '@containers/Blocos/BlocoHome'
import BlocoProjetos from '@containers/Blocos/BlocoProjetosdois'

export default function ContainerPrincipal() {
    return(
        <>
            <section id='home'>
                <BlocoHome />
            </section>
            
            {/* <div id='projetos' className={`${style.container_principal} rounded-t-[200px]`}>
                <BlocoProjetos />
            </div> */}

            <section id='projetos'>
                <BlocoProjetos />
            </section>
        </>
    )
}