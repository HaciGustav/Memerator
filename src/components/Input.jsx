import React from 'react';
import Form from 'react-bootstrap/Form';

const Input = ({ getMeme, getValue, texts }) => {
    return (
        <div className="mt-3">
            <div className="input-group mb-3 d-flex w-50 m-auto ">
                <input
                    onChange={(e) => getValue(e)}
                    type="text"
                    name="top"
                    value={texts.top}
                    className="form-control me-3 p-3 rounded"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Top Text"
                />
                <input
                    onChange={(e) => getValue(e)}
                    type="text"
                    name="bottom"
                    value={texts.bottom}
                    className="form-control ms-3 rounded"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Bottom Text"
                />
            </div>
            <button
                onClick={(memes) => getMeme(memes)}
                className="btn btn-warning w-25">
                Get Meme
            </button>
        </div>
    );
};

export default Input;
