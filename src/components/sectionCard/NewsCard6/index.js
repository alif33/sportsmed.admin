import React from 'react';

const NewsCard6 = ({ img, title, description }) => {
    return (
        <div>
            <a href="#!">
                <img src={img} className="w-100" alt="" />
                <h5 className="nfl_para1 text-white">{title}</h5>
                <p className="_smd_bf_card_desc">
                    {description}
                </p>
            </a>
        </div>
    );
};

export default NewsCard6;