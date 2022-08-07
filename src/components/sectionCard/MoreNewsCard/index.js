import React from 'react';

const MoreNewsCard = ({ img, title}) => {
    return (
        <div className="more-news-card" >
        <a href="#!">
            <img src={img} className="w-100" alt="" />
            <p className='nfl_card_Desc'>{title}</p>
        </a>
    </div>
    );
};

export default MoreNewsCard;