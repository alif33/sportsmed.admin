import React from 'react';
import NewsCard4 from '../../components/sectionCard/NewsCard4';

const Featured = () => {
    return (
        <div>
              <h1 className="nfl_card_title2 smd_border_bottom mb-4">Featured</h1>

              <NewsCard4 img="/images/landing_Page/featuredImg1.png"  title="Who profited most from transfer portal?" name="John Holinger" comment="541" />
              <NewsCard4 img="/images/landing_Page/featuredImg1.png"  title="Who profited most from transfer portal?" name="John Holinger" comment="541" />

        </div>
    );
};

export default Featured;