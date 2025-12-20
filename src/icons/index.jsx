import * as React from 'react';

/* => Emojis: ✨ */

import {
    UserSquare,
    FolderOpen,
    ChatCircle,
    GitBranch,
} from 'phosphor-react';


export const IconsList = {
    User: UserSquare,
    FolderOpen: FolderOpen,
    Chat: ChatCircle,
    GitHub: GitBranch,
}

export function Icon({ icon }) {
    const IconComponent = IconsList[icon];
    if (!IconComponent) {
        return null;
    }

    const [size, setSize] = React.useState(35);

    React.useEffect(() => {
        const media = window.matchMedia("(max-width: 800px)");
        const updateSize = () => {
            setSize(media.matches ? 24 : 35);
        };

        updateSize();
        media.addEventListener("change", updateSize);
        return () => media.removeEventListener("change", updateSize);
    }, []);


    return <IconComponent size={size} color="var(--color-lilas)" weight="duotone" />;
}