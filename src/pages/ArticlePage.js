import React, {Fragment} from 'react';
import articleContent from '../pages/article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <h1>Article does not exist!</h1>

    return (
        <Fragment>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </Fragment>
    )
}

export default ArticlePage;