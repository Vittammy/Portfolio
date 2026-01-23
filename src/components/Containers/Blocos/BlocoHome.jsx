import style from '@containers/StyleContainers.module.css';

import { useIsMobile } from '@control/useControl';
// import { Text, Heading } from '@radix-ui/themes'

import HomeTitle from '@layout/Home/Home_Title'
import { Images } from '@basics/images'

export default function BlocoHome() {

    const isMobile = useIsMobile();

    return (
        <>
            <div className={style.bloco_home}>

                <div className={style.home_img}>
                    <Images.Perfil />
                </div>

                <HomeTitle className={style.home_title} />

            </div>
        </>
    )
}