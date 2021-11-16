import React from 'react';
import { ClickableZone, CustomImage, Overlay } from '../../components';
import styles from './styles.module.scss';
import { useZoneAction } from '../../hooks';
import { constants } from '../../utils';

/**
 * Renders a <FirstPage /> container
 * @param  props
 * @param  props.zoneImageURL - URI of the image
 */
export function FirstPage() {
    const { zoneImageURL } = constants;
    const {
        isZoneClicked,
        isZoneTimeoutOver,
        showImage,
        zoneLabel,
        handleZoneClick,
    } = useZoneAction();

    return (
        <>
            <Overlay visible={isZoneClicked && !isZoneTimeoutOver} />
            <div className={`${styles.FirstPage}`}>
                <ClickableZone
                    text={zoneLabel}
                    handleZoneClick={handleZoneClick}
                    isClickable={!isZoneClicked && !isZoneTimeoutOver}
                />
                {showImage && <CustomImage url={zoneImageURL} />}
            </div>
        </>
    );
}
