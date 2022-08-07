import React, { useState } from 'react';
import MiddleTitleCard from '../../components/sectionCard/MiddleTitleCard';
import NewsCard from '../../components/sectionCard/NewsCard';
import NewsCard5 from '../../components/sectionCard/PlayerCard';

const NbaNews = ({title}) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div className="nfl_con">
            <h4 className='nfl_card_title2 mt-3'>{title}</h4>
            <div className="nfl_sec_two">
                <div>
                    <NewsCard img="/images/landing_Page/nfl_S5.png" title="  NBA free agency 2022 live tracker: News, rumors, trades, signings, as the offseason rolls on" description="  Follow here for signings, trades, rumors and analysis from The Athletic's staff as the" />
                </div>
                <div>

                    {[1, 1, 1, 1, 1].map((item, i) => <MiddleTitleCard key={i} title="Hollinger: The 5 Kevin Durant trades that make" name="Scott Wheeler" comment="377" />)}



                </div>
                <div className='position-relative'>
                    <div className='nfl_sec2_vertical_line'></div>
                    <div className='d-flex'>
                        <h3
                            className={toggleState === 1 ? 'nfl_3rd_title_active nfl_3rd_title' : 'nfl_3rd_title'}
                            onClick={() => toggleTab(1)}
                        >NFL</h3>
                        <h3
                            className={toggleState === 2 ? 'nfl_3rd_title_active nfl_3rd_title' : 'nfl_3rd_title'}
                            onClick={() => toggleTab(2)}
                        >NBA</h3>
                        <h3
                            className={toggleState === 3 ? 'nfl_3rd_title_active nfl_3rd_title' : 'nfl_3rd_title'}
                            onClick={() => toggleTab(3)}
                        >MLB</h3>
                    </div>

                    <div className={toggleState === 1 ? 'd-block' : 'd-none'}>

                        <NewsCard5 />
                        <NewsCard5 />
                        <NewsCard5 />
                        <NewsCard5 />

                        <a href='#!' className='see_all_news'>See All News</a>
                    </div>

                    <div className={toggleState === 2 ? 'd-block' : 'd-none'}>
                        <NewsCard5 />
                        <a href='#!' className='see_all_news'>See All News</a>
                    </div>

                    <div className={toggleState === 3 ? 'd-block' : 'd-none'}>

                        <NewsCard5 />
                        <NewsCard5 />
                        <NewsCard5 />

                        <a href='#!' className='see_all_news'>See All News</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NbaNews;