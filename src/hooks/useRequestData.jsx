import { useEffect, useState } from "react";
import axios from "axios";

function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
                setIsError(false)
            })
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
                console.log(error)})
    }, [url])

    return [data, isLoading, isError]
}

export default useRequestData;