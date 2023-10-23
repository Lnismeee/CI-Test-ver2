/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";

const Header = ({ quotes }) => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleRamdomOnClick = () => {
        let randomIndex = randomInteger(0, quotes.length - 1);
        while (randomIndex === quoteIndex) {
            randomIndex = randomInteger(0, quotes.length - 1);
        }
        setQuoteIndex(randomIndex);
    };

    return (
        <>
            <header>
                <h1 className="header">List Person</h1>
                <button onClick={handleRamdomOnClick} className="btn">
                    Ramdom Quote
                </button>
                <p className="content">
                    {quotes.length > 0 && quotes[quoteIndex].content}
                </p>
                <p className="tag">
                    Tag:
                    {quotes.length > 0 &&
                        quotes[quoteIndex].tags.map((tag) => (
                            <span key={tag}> {tag}, </span>
                        ))}
                </p>
            </header>
        </>
    );
};

export default Header;
