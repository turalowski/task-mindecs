import { useState } from 'react';

export const useZoneAction = () => {
    const [isZoneClicked, setIsZoneClicked] = useState(false);
    const [isZoneTimeoutOver, setIsZoneTimeoutOver] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [zoneLabel, setZoneLabel] = useState('Switch');

    /**
     * This functions runs when 5 seconds waiting is over (+ 3s animation).
     * It will show image after 3seconds;
     */
    const handleShowImage = () => {
        setTimeout(() => {
            setShowImage(true);
        }, 3000);
    };

    /**
     * This function will run when the waiting is over (8 seconds)
     * It will update the text and start fade-out animation
     */
    const handleTimeout = () => {
        setZoneLabel('Switch');
        setIsZoneTimeoutOver(true);
        handleShowImage();
    };

    /**
     * When we click to clickable zone, this function will run.
     * It will trigger overlay animation in and the label will change.
     */
    const handleZoneClick = () => {
        if (!isZoneClicked) {
            setIsZoneClicked(true);
            setZoneLabel('Switching...');
            setTimeout(() => {
                handleTimeout();
            }, 8000);
        }
    };

    return {
        isZoneClicked,
        isZoneTimeoutOver,
        showImage,
        zoneLabel,
        handleZoneClick,
    };
};

export default useZoneAction;
