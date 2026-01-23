import style from '@layout/Cards/StyleCards.module.css'

import CarrosselSimples from '@layout/Cards/CarrosselSimples'

function Card_01({ listaImagens }) {
    return (
        <>
            <div className={`${style.card_01} ${style.halfWidthField}`}>
                <CarrosselSimples listaImagens={listaImagens} />
                Card
            </div>
        </>
    )
}

export default Card_01;