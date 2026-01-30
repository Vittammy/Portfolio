import style from '@layout/Home/StyleHome.module.css';

import ScrambleTitle from '@layout/Texts/ScrambleTitle';
import { Icon } from '@basics/icons'

function HomeTitle() {
    return (
        <>
            <div className={style.home_nome}>
                {/* <ScrambleTitle text='Vitória Amaral'/> */}
                {/* <h5>Web Developer | Frontend</h5> */}

                <h1 style={{ letterSpacing: '0.4rem', color: 'white', 
                             fontSize: 'var(--font-size-display)',
                             fontWeight: '400' }}
                >Vitória Amaral</h1>

                <ScrambleTitle text="new Developer ( ' Front-end ' ) ;" />

                <div className={style.home_links}>
                   <h5 className={style.link_item}><Icon icon='GitHub' name_color='navbar' /> GitHub</h5>
                   <h5 className={style.link_item}><Icon icon='Linkedin' name_color='navbar' />LinkedIn</h5> 
                </div>
                
            </div>
        </>
    )
}

export default HomeTitle;