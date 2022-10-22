import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Meme from '../components/Meme';
import memeData from '../helper/memeData';

const Home = () => {
    const [memeFromData, setMemeFromData] = useState({});
    const [texts, setTexts] = useState({
        top: '',
        bottom: '',
    });
    console.log(texts);
    const getValue = (e) => {
        setTexts((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: e.target.value,
            };
        });
    };
    const { memes } = memeData.data;
    const getMeme = (data) => {
        const meme = memes[Math.floor(Math.random() * memes.length)];
        setMemeFromData(meme);
        setTexts({ top: '', bottom: '' });
    };
    useEffect(() => {
        getMeme(memes);
    }, []);

    return (
        <div>
            <Header />
            <Input getMeme={getMeme} getValue={getValue} texts={texts} />
            <Meme memeFromData={memeFromData} meme={memes} texts={texts} />
        </div>
    );
};

export default Home;
