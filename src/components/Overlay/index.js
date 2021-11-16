import React from 'react';
import styles from './styles.module.scss';

/**
 * Renders a <Overlay /> component
 * @param  props
 * @param  props.visible - if true overlay will be visible
 */
export function Overlay(props) {
    const { visible } = props;
    return (
        <div
            className={styles.Overlay}
            style={
                visible ? { opacity: 0.5, zIndex: 2 } : { opacity: 0, zIndex: -1}
            }
        />
    );
}
