import { useEffect, useRef } from 'react';

export default function useComponentVisible(setInitialIsVisible) {
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setTimeout(() => {
                setInitialIsVisible(false)
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