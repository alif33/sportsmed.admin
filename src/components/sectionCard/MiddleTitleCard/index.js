import React from 'react';

const MiddleTitleCard = ({ title, name, comment }) => {
    return (
        <div className="nfl_S5_middle_card">
            <a href="#!">
                <h4>{title}</h4>
                <p>{name} <span className='nfl_comment_num'>{comment}</span></p>
            </a>
        </div>
    );
};

export default MiddleTitleCard;