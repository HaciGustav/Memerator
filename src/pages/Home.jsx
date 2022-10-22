import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Meme from '../components/Meme';
import memeData from '../helper/memeData';

const Home = () => {
    const [memeFromData, setMemeFromData] = useState({});
    const { memes } = memeData.data;
    const getMeme = (data) => {
        const meme = memes[Math.floor(Math.random() * memes.length - 1)];
        setMemeFromData(meme);
    };
    useEffect(() => {
        getMeme(memes);
    }, []);

    return (
        <div>
            <Header />
            <Input getMeme={getMeme} />
            <Meme memeFromData={memeFromData} />
        </div>
    );
};

export default Home;
