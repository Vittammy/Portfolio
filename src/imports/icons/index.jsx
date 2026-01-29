import * as React from 'react';

/* => Emojis: ✨ */

import {
    UserSquare,
    FolderOpen,
    ChatCircle,
    GithubLogo,
    Planet,
    LinkedinLogo,
    Envelope,
    WhatsappLogo,
    HouseSimple,
    SquaresFour,
} from 'phosphor-react';


export const IconsList = {
    User: UserSquare,
    FolderOpen: FolderOpen,
    Chat: ChatCircle,
    GitHub: GithubLogo,
    Google: Planet,
    Linkedin: LinkedinLogo,
    Email: Envelope,
    Whatsapp: WhatsappLogo,
    Home: HouseSimple,
    Projetos: SquaresFour,
}

export function Icon({ icon, name_color }) {

    const wichColor = name_color;
    const isNavIcon = name_color === 'navbar';
    const isRodapeIcon = name_color === 'rodape';

    const IconComponent = IconsList[icon];

    if (!IconComponent) {
        return null;
    }

    const [size, setSize] = React.useState(35);
    const media = window.matchMedia("(max-width: 800px)");

    React.useEffect(() => {
        const updateSize = () => {
            setSize(media.matches ? 24 : 35);
        };
        updateSize();

        media.addEventListener("change", updateSize);
        return () => media.removeEventListener("change", updateSize);
    }, []);


    return <IconComponent 
                size={isRodapeIcon ? (size + 10) : size} 
                color={isNavIcon ? 'white'
                       : media.matches && isRodapeIcon ? 'white'
                       : 'var(--color-blue-principal)'} 
                weight="duotone" 
            />;
}