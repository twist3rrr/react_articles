import React from 'react';

function Articles(props){
    const {articles} = props;
    const articlesBlocks = articles.map((article) => {
        return (
            <li key={article.id}>
                <p>{article.name}</p>
                <p>{article.id}</p>
                <p>{article.email}</p>
                <button type="button" onClick={() => props.deleteArticle(article.id)}>X</button>
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
