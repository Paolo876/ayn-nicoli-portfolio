import React, { useState, useEffect, useRef } from 'react'
import { storage } from '../firebase/config';
import { ref, listAll, getDownloadURL, list } from "firebase/storage"

export const useStorage = (storagePath, subFolder = null) =>  {

    const [ files, setFiles ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isCancelled, setIsCancelled ] = useState(false); 
    let path = storagePath;    
    if(subFolder) path = storagePath+subFolder;
    let listRef = ref(storage, path);

    const downloadFiles = async (storagePath, subFolder = null) => {
        setFiles([]);
        setError(null);
        setIsLoading(true);
        let listRef = ref(storagePath);

        const res = await listAll(storage, listRef);
        if(subFolder){
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then( url => setFiles(prevState => [...prevState, {url, isLoading: true}]))
            });
        } else {
            // let promises = [];
            // for(let i = 0; i < res.prefixes.length; i++){
            //     const folderRef = await listAll(res.prefixes[i]);
            //     const file = folderRef.items.map(_item => getDownloadURL(_item));
            //     await Promise.all(file).then(item => promises.push(...item))
            // }
            console.log("STOR")
            // return promises;
        }
    }
    // useEffect(()=>{
    //     if(!isCancelled){
    //         setFiles([]);
    //         setError(null);
    //         setIsLoading(true);

    //         listAll(listRef)
    //             .then( res => {
    //                 if(subFolder){
    //                     res.items.forEach((itemRef) => {
    //                         getDownloadURL(itemRef).then( url => setFiles(prevState => [...prevState, {url, isLoading: true}]))
    //                     });
    //                 }
    //                 else {
    //                     const asyncFunction = async () => {
    //                         let promises = []
    //                         for(let i = 0; i < res.prefixes.length; i++){
    //                             const folderRef = await listAll(res.prefixes[i]);
    //                             const file = folderRef.items.map(_item => getDownloadURL(_item));
    //                             await Promise.all(file).then(item => promises.push(...item))
    //                         }
    //                         setIsLoading(false)
    //                         setFiles(promises)
    //                     }
    //                     asyncFunction();
    //                 }
    //             })
    //             .catch(err => {
    //                 setError(err.message)
    //             });
    //     }

    //     return () => {
    //         console.log("unmount")
    //         setIsCancelled(true)
    //     };
    // },[storagePath, subFolder]);
  return {
    files, error, isLoading, downloadFiles
  }
}
