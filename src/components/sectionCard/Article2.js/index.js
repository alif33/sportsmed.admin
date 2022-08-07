import React from 'react';

const Article2 = ({ img, title, name}) => {
    return (
        <a href="#!">
            <div className='position-relative'>
                <img src={img} className='w-100' alt="" />
                <p className='nfl_Article'>{name}</p>
                <div className='nfl_S4_overlay'>
                    <p>{title}</p>
                </div>
            </div>
        </a>
    );
};

export default Article2;