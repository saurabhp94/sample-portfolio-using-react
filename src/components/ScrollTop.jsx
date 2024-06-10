import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTop = () => {
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
                cursor: 'pointer'}}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <FontAwesomeIcon icon={faArrowUp} 
            style={{ color: 'white', fontSize: '35px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
    );
};

export default ScrollTop;