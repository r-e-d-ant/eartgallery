
import {useState, useEffect, useRef} from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const effectRun = useRef(false);

    useEffect(() => {
        console.log('mounted');

        const abortCont = new AbortController();

        if(effectRun.current === 'true') {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
                console.log(data);
            })
            .catch(err => {
                if(err.message === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
        }
        console.log('unmounted');
        effectRun.current = 'true';
        
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
