import React, { useState } from 'react'
import ProgressBar from './progressBar';


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png','image/jpeg'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };

    return (
        <form className='input-form'>
            <label htmlFor="file" className="label-file">Choisir une image</label>
            <input id="file" className="input-file" type="file" onChange={changeHandler} />
            <div className='output'>
                {error && <div className='error'>{ error }</div> }
                {file && <div>{ file.name }</div> }
                {file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
}

export default UploadForm;
