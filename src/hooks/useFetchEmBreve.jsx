import {useState, useEffect} from "react";

export const useFetchEmBreve = () => {

    const [ emBreve, setEmBreve ] = useState([]);
    const [ isLoadedEmBreve, setIsLoadedEmBreve ] = useState(false);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/seasons/upcoming")
        .then( res => res.json() ) 
        .then( json => setEmBreve(json.data.splice(0,8)) )
        .then( () => setIsLoadedEmBreve(true) )
    }, [])

    return [emBreve, isLoadedEmBreve];
}