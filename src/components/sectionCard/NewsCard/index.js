import Link from 'next/link';
import React from 'react';

const NewsCard = ({ img, title, description }) => {
    return (

        <a href="/">
            <img src={img} alt="" className="w-100" />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
};

export default NewsCard;