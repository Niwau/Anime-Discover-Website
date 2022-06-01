import {useState, useEffect} from "react";

export const useFetchMaisFamosos = () => {

    const [ maisFamosos, setMaisFamosos ] = useState([]);
    const [ isLoadedMaisFamosos, setIsLoadedMaisFamosos ] = useState(false);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime")
        .then( res => res.json() ) 
        .then( json => setMaisFamosos(json.data.splice(0,8)) )
        .then( () => setIsLoadedMaisFamosos(true) )
    }, [])

    return [maisFamosos, isLoadedMaisFamosos];
}