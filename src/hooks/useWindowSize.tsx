import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};

function useWindowSize(delay = 0) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        const debouncedHandleResize = debounce(handleResize, delay);
        window.addEventListener('resize', debouncedHandleResize);
        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, [delay]);

    return windowDimensions;
}

export default useWindowSize;
