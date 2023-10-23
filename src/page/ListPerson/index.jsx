/* eslint-disable react/prop-types */

import AuthorCard from "../../components/AuthorCard";

const ListPerson = (props) => {
    const { quotes } = props;
    const authors = [];

    quotes.forEach((quote) => {
        if (!authors.includes(quote.author)) {
            authors.push(quote.author);
        }
    });

    return (
        <>
            <div className="row">
                {authors.map((author) => {
                    const authorQuote = quotes.filter(
                        (quote) => quote.author === author
                    );
                    return (
                        <AuthorCard
                            key={author}
                            author={author}
                            quotes={authorQuote}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ListPerson;
