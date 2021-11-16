import React from 'react';

/**
 * Renders a <CustomImage /> component
 * @param  props
 * @param  props.url - URI of the image
 * @param  props.alt - This text will be shown when it failed to load
 */

export function CustomImage(props) {
    const { url, alt = 'image' } = props;
    return (
        <div style={{ marginTop: '100px' }}>
            <img src={url} alt={alt} />
        </div>
    );
}
