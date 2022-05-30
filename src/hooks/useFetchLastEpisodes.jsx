import {useState, useEffect} from "react";

export const useFetchLastEpisodes = () => {

    const [ lastEpisode, setLastEpisode ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/watch/episodes")
        .then( res => res.json() ) 
        .then( json => setLastEpisode(json) )
        .then( () => setIsLoaded(true) )
    }, [])

    return [lastEpisode, isLoaded]

}