import style from '@layout/Home/StyleHome.module.css';

function HomeTitle() {
    return (
        <>
            <div className={style.home_nome}>
                <h1 style={{ color: 'white' }}>Vitória Amaral </h1>

                <h5 style={{ marginLeft: '0.7rem', }}>Dev Front-end | Web Designer </h5>
            </div>
        </>
    )
}

export default HomeTitle;