import CardProjeto from '@layout/Cards/CardProjeto'
import style from '@style/StyleComponents.module.css'

import { Text, Heading } from '@radix-ui/themes'

// => Images
import image from '@assets/images/logo/logo_simples.png'
import mweb from '@assets/images/projetos/mweb.png'

export default function BlocoProjetos() {
    return(
        <>
        <Heading size="9" weight="medium" style={{ marginBottom: '5rem' }}>✨ Projetos ✨</Heading>

        <div className={style.cards_container}>
          <CardProjeto
                projeto={{
                    imagem: mweb,
                    titulo: 'MWeb - ERP System',
                    // categoria: 'Desenvolvimento',
                    descricao_completa: 'Um sistema de ERP responsável por agilizar e facilitar o trabalho no dia a dia, automatizando processos de preenchimento e cálculos. O sistema também oferece um controle pleno e visual do estoque.',
                    tecnologias: ['JavaScript', 'PHP', 'React'],
                    link_github: 'aaaa',
                }}
            />  

            <CardProjeto
                projeto={{
                    imagem: image,
                    titulo: 'Projeto 1',
                    // categoria: 'Desenvolvimento',
                    descricao_completa: 'Descrição do projeto 1.',
                    tecnologias: ['jsx', 'php'],
                    link_github: 'aaaa',
                }}
            /> 
        </div>
        
        </>
    )
}