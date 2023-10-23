import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListPerson from "./page/ListPerson";
import axios from "axios";
import React from "react";
import "./App.css";
const App = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const getQuotes = async () => {
            const response = await axios.get("https://api.quotable.io/quotes");
            setQuotes(response.data.results);
        };

        getQuotes();
    }, []);

    return (
        <>
            <div className="container">
                <Header quotes={quotes} />
                <ListPerson quotes={quotes} />
            </div>
        </>
    );
};

export default App;
