import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect (()=> {
        //references
        const storageRef = spaceRef(file.name);
        storageRef.p
    },[file])
}