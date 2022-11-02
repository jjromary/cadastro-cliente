import { useState, useEffect } from "react";
import { api } from "../api";

export function useAPI(url: string) {
    const [values, setValues] = useState<object | null>({});
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        api.get(url).then((response) => {
            setValues(response.data);
        })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsFetching(false)
            })
    }, []);

    return { values, isFetching, error }
}