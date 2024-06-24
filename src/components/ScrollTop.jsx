import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

 
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className="scroll-top"
            style={{
                position: 'fixed',
                zIndex: '999',
                bottom: '20px',
                right: '20px',
                width: '50px', height: '50px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                cursor: 'pointer',
                display: isVisible ? 'block' : 'none' // Hide or show element
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <FontAwesomeIcon icon={faArrowUp}
            style={{ color: 'white', fontSize: '35px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
    );
};

export default ScrollTop;
