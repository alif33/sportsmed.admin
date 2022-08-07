import React from 'react';

const HeadingSection = () => {
    return (
       <div className="_smd_heading_section">
        <h2>
        Headlines
        </h2>
        <div className="_smd_news_heading_card">
            <h2></h2>
            <div className="d-flex justify-content-between align-items-center">
                <p>John Hollinger</p>
                <p><img src="/images/iocn/comment.png" alt="" />377</p>
            </div>
        </div>
       </div>
    );
};

export default HeadingSection;