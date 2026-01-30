import style from '@containers/StyleContainers.module.css';

import { useIsMobile } from '@control/useControl';

import HomeTitle from '@layout/Home/Home_Title'
import { Images } from '@basics/images'

export default function BlocoHome() {

    const isMobile = useIsMobile();

    return (
        <>

            <div className={style.bloco_home} style={{ marginTop: isMobile ? '1rem' : '3rem' }}>

                <div className={style.home_img}>
                    <Images.Perfil />
                </div>

                <HomeTitle className={style.home_title} />

            </div>
        </>
    )
}