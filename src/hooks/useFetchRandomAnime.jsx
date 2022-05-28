import {useState, useEffect} from "react";

export const useFetchRandomAnime = () => {

    const GetRandomNumber = () => Math.floor(Math.random() * 20);

    const [randomAnime, setRandomAnime] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/seasons/now")
        .then(res => res.json())
        .then(json => setRandomAnime(json.data[GetRandomNumber()]))
        .then(() => setIsLoaded(true))
    }, [])

    return [randomAnime, isLoaded];
}       