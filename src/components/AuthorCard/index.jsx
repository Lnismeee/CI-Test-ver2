import { useState } from "react";
import React from "react";
import "./styles.css";
const AuthorCard = ({ quotes, author }) => {
    const [isShow, setIsShow] = useState(false);

    console.log(author, "::::", quotes);

    const handleOnClick = () => {
        setIsShow(!isShow);
    };
    return (
        <div>
            <button onClick={handleOnClick} className="btn">
                {author}
            </button>
            {isShow && (
                <>
                    {quotes.map((quote) => (
                        <li key={quote._id} className="content">
                            {quote.content}
                        </li>
                    ))}
                </>
            )}
        </div>
    );
};

export default AuthorCard;
