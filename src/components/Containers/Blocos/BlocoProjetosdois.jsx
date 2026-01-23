import style from '@containers/StyleContainers.module.css'
import { Projeto } from '@basics/images'

// => Components
import Card_01 from '@layout/Cards/Card_01'

function BlocoProjetos() {
    return (
        <>
            <div className={style.bloco_projetos}>
                <h1>Projetos</h1>

                <div className={style.grid_projetos}>
                    <Card_01 listaImagens={Projeto.mweb} />
                    <Card_01 listaImagens={Projeto.mweb} />
                    <Card_01 listaImagens={Projeto.mweb} />
                </div>
            </div>
        </>
    )
}

export default BlocoProjetos;