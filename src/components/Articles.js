import React from 'react';

function Articles(props){
    const {articles} = props;
        const articlesBlocks = articles.map((article) => {
            return (
                <li key={article.id}>
                    <p>{article.name}</p>
                    <p>{article.id}</p>
                    <p>{article.email}</p>
                    <hr/>
                </li>
            );
        });


    return (
        <ul>
            { articlesBlocks }
        </ul>
    );
}

export default Articles;