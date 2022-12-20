import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState<number>();

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();
        //clear hook after component unmount
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};

// export default useScrollPosition;
