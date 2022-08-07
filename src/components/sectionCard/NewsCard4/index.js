import React from 'react';

const NewsCard4 = ({ img, title, name, comment, description }) => {
    return (
        <a href="#!">
            <div>
                <img src={img} className="w-100" alt="" />
                <h3 style={{ color: '#121212' }} className="mt-2">{title}</h3>
                {description && <p className='nfl_para1'>
                    {description}
                </p>}

                <p className="mt-1">{name} <span className='nfl_comment_num'>{comment}</span></p>
            </div>
        </a>
    );
};

export default NewsCard4;