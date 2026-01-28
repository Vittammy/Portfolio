import style from '@containers/StyleContainers.module.css'
import { Projeto } from '@basics/images'

// => Components
import Card_01 from '@layout/Cards/Card_01'

function BlocoProjetos() {

    const Projetos = [
        {   name: 'MWeb', 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: [
                { label: 'Google', url: 'https://site.com/...' },
                { label: 'GitHub', url: 'https://github.com/...' },
            ],
        },

        {   name: 'MWeb', 
            desc: 'Outra descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
            link: [
                { label: 'Google', url: 'https://site.com/...' },
                { label: 'GitHub', url: 'https://github.com/...' },
            ],
        },

        {   name: 'MWeb', 
            desc: 'Terceiraaa descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: [
                { label: 'GitHub', url: 'https://github.com/...' },
            ],
        },
    ]

    return (
        <div style={{ width: '100%', height: '100%' }}>

            <div className={style.bloco_projetos}>

                <div className={style.text_projetos}>
                    <h1>My Work</h1>
                    <p>A collection of projects I've worked on.</p>
                </div>

            </div>

            <div className={style.grid_projetos}>
                {Projetos.map((projeto, index) => (
                    <Card_01 
                        key={projeto.id || index}
                        name_projeto={projeto.name}
                        desc_projeto={projeto.desc}
                        links_projeto={projeto.link} 
                    />
                ))}
            </div>
            
        </div>
    )
}

export default BlocoProjetos;