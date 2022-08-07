import NewsCard from '../../components/sectionCard/NewsCard';
import NewsCard3 from '../../components/sectionCard/NewsCard3';

const TopPicks = () => {


    return (
        <div className="container-fluid py-3">
            <h1 className="nfl_card_title2">Top Picks</h1>
            <div className="row m-0 mt-2">
                <div className="col-lg-7">

                    <NewsCard img="/images/landing_Page/top_picks_img1.png" title="  Who profited most from transfer portal? Illinois, Creighton among big winners" description='  Our college basketball experts pick the teams that helped themselves the most during the transfer shopping season.' />

                </div>
                <div className="col-lg-5">

                <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />
                <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />
                <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />

                </div>
            </div>
        </div>
    );
};

export default TopPicks;