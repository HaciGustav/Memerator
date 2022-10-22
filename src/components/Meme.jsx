import React from 'react';
import MemeStyle from './meme.module.css';

const Meme = ({ memeFromData, texts }) => {
    const { url, name } = memeFromData;
    return (
        <div className={MemeStyle.container}>
            <img src={url} alt={name} />
            <span className={MemeStyle.topText}>{texts.top}</span>
            <span className={MemeStyle.bottomText}>{texts.bottom}</span>
        </div>
    );
};

export default Meme;
