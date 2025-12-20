import * as React from 'react';

export function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const media = window.matchMedia("(max-width: 800px)");
        
        setIsMobile(media.matches);

        const listener = () => setIsMobile(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);

    return isMobile;
}