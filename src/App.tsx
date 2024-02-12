import wretch from "wretch";
import React, { useState } from "react";


const App = () => {

    const [data, setData] = useState<unknown[]>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const showTable = !error && (data || loading)

    const findPeople = () => {
        setLoading(true)
        setError(false)
        let today = new Date();
        let month = String(today.getMonth() + 1).padStart(2, "0");
        let day = String(today.getDate()).padStart(2, "0");
        let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;
        // Use .res for the raw response, .text for raw text, .json for json, .blob for a blob ...
        wretch(url)
            .get()
            .json((json) => {
                setLoading(false)
                setData(json)
            })
            .catch((error) => {
                setError(true)
            })
    };
    return (
        <>
            <h1>Hello, world</h1>
        </>
    );
};

export default App;
