import React from 'react';

const ArticleCard = ({ post }) => {
    return (
        <div className="_smd_article_card w-100 w-md-25 mx-0 mx-md-1">
            <img src={ post.image } alt={ post.title } />
            <h4>Article</h4>
        </div>
    );
};

export default ArticleCard;