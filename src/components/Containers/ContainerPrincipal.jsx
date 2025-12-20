import style from '@/css/StyleComponents.module.css'

// => Components - Blocos
import BlocoHome from './Blocos/BlocoHome'
import BlocoProjetos from './Blocos/BlocoProjetos'

export default function ContainerPrincipal() {
    return(
        <>
            <BlocoHome />
            
            <div className={`${style.container_principal} rounded-t-[200px]`}>
                <BlocoProjetos />
            </div>
        </>
    )
}