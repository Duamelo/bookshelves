import { useCallback, useEffect, useState } from "react";

export function useBook(bookId: string): Book | undefined {
    const [data, setData] = useState();
    useEffect(()=>{
        fetchJSON(`https://api.glose.com/forms/${bookId}`).then(setData)
    }, [bookId])
    return data;
}


async function fetchJSON<T>(url: string): Promise<T> {
    return fetch(url).then((res) => res.json());
}
// <>