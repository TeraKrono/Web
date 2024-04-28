import React, { useState, useEffect, useRef } from 'react';
import './Zmena.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Zmena() {
    const [scale, setScale] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const redBoxzRef = useRef(null);
    const sizeSliderzRef = useRef(null);

    useEffect(() => {
        const redBoxzElement = redBoxzRef.current;
        const sizeSliderzElement = sizeSliderzRef.current;

        function zoom(event) {
            event.preventDefault();
            let newScale = scale + event.deltaY * -0.01;
            newScale = Math.min(Math.max(0.1, newScale), 2);
            setScale(newScale);
            // Set font size directly
            redBoxzElement.style.fontSize = `${16 * newScale}px`; // Adjust the base font size as needed
        }

        function updateSize(event) {
            const newScale = event.target.value;
            setScale(newScale);
            redBoxzElement.style.transform = 'scale(${newScale})';
        }

        redBoxzElement.addEventListener('wheel', zoom);
        sizeSliderzElement.addEventListener('input', updateSize);

        return () => {
            redBoxzElement.removeEventListener('wheel', zoom);
            sizeSliderzElement.removeEventListener('input', updateSize);
        };
    }, [scale]);

    function handleMouseOver() {
        setIsHovered(true);
    }

    function handleMouseOut() {
        setIsHovered(false);
    }

    return (
            <div className="contz">
                <div className="boxz-container">
                    <div
                        className="boxz red"
                        ref={redBoxzRef}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <strong>Zmena písma:</strong>
                        {isHovered ? (
                            <div>
                                <p>1)Zmena velkosti tlacidiel pre mobilne zariadenia</p>
                                <p>2)Zmena veľkosti písma v tlacidlach</p>
                                <p>3)Zmena pozicie tlacidiel</p>

                            </div>
                        ) : (
                            <div>
                                <p>1)Zmena veľkosti písma pre počítač</p>
                                <p>2)Zmena veľkosti písma pre mobilné prenosové zariadenia (napríklad, pre 550px - 260px už je veľkosť 36px)</p>
                                <strong>3)Presuň kurzor na mňa a otáčaj kolieskom myši</strong>
                            </div>
                        )}
                    </div>
                </div>

                <input type="range" min="0.1" max="2" step="0.1" value={scale} ref={sizeSliderzRef} />
            </div>
    );
}

export default Zmena;