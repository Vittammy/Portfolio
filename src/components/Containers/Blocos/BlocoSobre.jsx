import style from '@containers/StyleContainers.module.css'

import { Images } from '@basics/images'
import perfil from '@assets/images/perfil/vitoria1.jpg';

export default function BlocoSobre() {
    return(
        <>
            <div className={style.bloco_sobre}>
                
                <img src={perfil} className={style.sobre_img} />

                <div className={style.sobre_divider}>
                    <h1>Sobre Mim</h1>

                    <h4>Desenvolvedora Full Stack com foco em React e Node.js, apaixonada por criar soluções inovadoras e eficientes.</h4>
                </div>
                
            </div>
        </>
    )
}