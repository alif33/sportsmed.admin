import React from 'react';

const NewsCard3 = ({ img, title, comment, name, link }) => {
    return (
        <a href="#!" className="mb-2 d-inline-block">
            <div className="d-flex gap-2">
                <img src={img} className="palyer_news_card_img" alt="" />
                <div>
                    <h4 style={{ color: '#121212' }}>{title}</h4>
                    <p className="mt-2">{name} <span className='nfl_comment_num'>{comment}</span></p>
                </div>
            </div>
        </a>
    );
};

export default NewsCard3;