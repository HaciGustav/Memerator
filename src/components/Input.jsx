import React from 'react';
import Form from 'react-bootstrap/Form';

const Input = () => {
    return (
        <div className="">
            <div className="input-group mb-3 d-flex w-50 m-auto ">
                <input
                    type="text"
                    className="form-control me-3 p-3 rounded"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Top Text"
                />
                <input
                    type="text"
                    className="form-control ms-3 rounded"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Bottom Text"
                />
            </div>
            <button className="btn btn-warning">Get Meme</button>
        </div>
    );
};

export default Input;
