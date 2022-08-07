import React from 'react';

const NewsCard9 = ({ title, description, comment }) => {
    return (
        <div className="nfl_S5_middle_card">
            <a href="#!">
                <h4>{title}</h4>
                <p>{description} <span className='nfl_comment_num'>{comment}</span></p>
            </a>
        </div>
    );
};

export default NewsCard9;