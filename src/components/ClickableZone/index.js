import React from 'react';
import styles from './styles.module.scss';

/**
 * Renders a <ClickableZone /> component
 * @param  props
 * @param  props.text - the text to show in the center
 * @param  props.handleZoneClick - the function that will run when we click to the component first time
 * @param  props.isClickable - Component is clickable or not (it will false after first click)
 */

export function ClickableZone(props) {
    const { text, handleZoneClick, isClickable } = props;

    const onClick = () => {
        handleZoneClick();
    };
    return (
        <div
            className={styles.ClickableZone}
            onClick={isClickable ? onClick : null}
            style={isClickable ? { cursor: 'pointer' } : null}
        >
            <span>{text}</span>
        </div>
    );
}
