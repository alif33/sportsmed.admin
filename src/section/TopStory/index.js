import TopStoryVerticalSlider from './TopStoryVerticalSlider';
import Image from 'next/image';
import NewsCard from '../../components/sectionCard/NewsCard';
import MiddleTitleCard from '../../components/sectionCard/MiddleTitleCard';

const TopStory = () => {
    return (
        <>
            <div className="container-fluid py-3">
                <div className="_smd_top_story_main">
                    <div>
                        <div className="_smd_newCard">
                            <h2>Top Story</h2>
                            <NewsCard img="/images/card-img/card-img2.png" title="  NBA free agency 2022 live tracker: News, rumors, trades, signings, as the offseason rolls on" description='NBA free agency 2022 live tracker: News, rumors, trades, signings, as the offseason rolls on' />
                        </div>
                    </div>
                    <div>
                        <h4 className='nfl_card_title2 mb-4 smd_border_bottom_Headlines'>Headlines</h4>
                        {[1, 1, 1, 1,1].map((item, i) => <MiddleTitleCard key={i} title="Hollinger: The 5 Kevin Durant trades that make" name="Scott Wheeler" comment="377" />)}
                    </div>
                    <div>
                        <h1 className='_smd_Upcoming_events'>Upcoming events</h1>
                        <TopStoryVerticalSlider />

                    </div>
                </div>
            </div>
        </>
    );
};

export default TopStory;