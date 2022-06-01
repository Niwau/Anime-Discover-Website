import { useState, useEffect } from "react"

export const useFetchSeasonNow = () => {
    const [seasonNow, setSeasonNow] = useState([]);
    const [isLoadedSeasonNow, setIsLoadedSeasonNow] = useState(false);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/seasons/now")
        .then(res => res.json())
        .then(item => item.data.slice(0, 8))
        .then(json => setSeasonNow(json))
        .then(() => setIsLoadedSeasonNow(true))
    }, [])

    return [seasonNow, isLoadedSeasonNow]
}