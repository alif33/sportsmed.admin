import React from 'react';
import MoreNewsCard from '../../components/sectionCard/MoreNewsCard';

const MoreNews = ({ posts }) => {
    return (
        <div className="nfl_con">
            <div className="nfl_S6">
                <h1 className='nfl_card_title2'>More Stories</h1>
                <div className="nfl_S6_card_main mt-2 mt-md-3">
                    { posts.map((item, index) => <MoreNewsCard key={index} 
                                                img={ item.image }
                                                title={ item.title }
                                            />)}
                </div>
            </div>
        </div>
    );
};

export default MoreNews;