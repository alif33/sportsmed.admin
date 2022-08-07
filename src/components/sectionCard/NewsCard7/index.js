import React from 'react';

const NewsCard7 = ({ img, title, description }) => {
    return (
        <a href="#!">
            <div className='d-flex nfl_sec_two_middle'>
                <div>
                    <p className='nfl_card_title1'>
                        {title}
                    </p>
                    <p className='nfl_card_desc'>{description}</p>
                </div>
                <img src={img} className='w-75' alt="" />
            </div>
        </a>
    );
};

export default NewsCard7;