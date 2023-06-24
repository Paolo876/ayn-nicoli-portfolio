import React, { useState, useEffect, useRef } from 'react'
import { storage } from '../firebase/config';
import { ref, listAll, getDownloadURL, list } from "firebase/storage";

export const useStorage2 = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isCancelled, setIsCancelled ] = useState(false); 
    const [ error, setError ] = useState(null);
    const [files, setFiles ] = useState([])

    const downloadFiles = async (storagePath) => {
        setFiles([]);
        setError(null);
        setIsLoading(true);

        let listRef = ref(storage, storagePath);
        const res = await listAll(listRef);
        try {
            let promises = []
            for(const items of res.prefixes){
                const files = await listAll(items);
                promises = [...files.items.map(i => getDownloadURL(i)), ...promises];
            }
            // await Promise.all(promises)
            return await Promise.all(promises)
            

        }catch(err){
            setError(err.message)
        }

    }

    return {
        downloadFiles, error, files
    }
}
