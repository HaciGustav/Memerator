import React from 'react';
import MemeStyle from './meme.module.css';

const Meme = ({ memeFromData }) => {
    const { url, name } = memeFromData;
    return (
        <div className={MemeStyle.container}>
            <img src={url} alt={name} />
        </div>
    );
};

export default Meme;
