import { useEffect, useRef } from 'react';

export default function useComponentVisible(setInitialIsVisible, closeFunction) {
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setTimeout(() => {
                setInitialIsVisible(false);
                closeFunction && closeFunction();
            }, 1);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref };
}