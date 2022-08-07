import Navbar from "../../src/components/headers/Navbar";
import TopHeading from "../../src/components/headers/TopHeading";
import ScoreSlider from "../../src/components/ScoreSlider";
import ArticleCard from "../../src/components/sectionCard/Article";
import SMDFooter from "../../src/components/SMDFooter";
import TopStory from "../../src/section/TopStory";
import PlayerSection from "../../src/section/PlayerSection";
import TopPicks from "../../src/section/TopPicks";
import BettingFantasy from "../../src/section/BettingFantasy";
import RecentStories from "../../src/section/RecentStories";
import Featured from "../../src/section/Featured";
import db from "../../utils/db";
import Post from "../../models/Post";
import _ from "lodash";

const Golf = ({ posts }) => {
    return (
        <div className="_LandingPage">
            <TopHeading />
            <Navbar />
            <div className="bg-black container-fluid py-1">
                <div className="d-flex _smd_headers_article flex-column flex-md-row gap-2 gap-md-0">
                    {
                        posts.slice(0, 4).map((item, index) => <ArticleCard key={index}
                            post={item}
                        />)
                    }
                </div>
            </div>
            <ScoreSlider />
            <div className="container-fluid">
                <div className='nfl_hr_line'></div>
            </div>
            <TopStory />
            <div className="container-fluid">
                <div className='nfl_hr_line'></div>
            </div>
            {/* Player News */}
            <PlayerSection />
            {/* Player News */}

            <div className="container-fluid">
                <div className='nfl_hr_line'></div>
            </div>

            {/* Top Picks */}
            <TopPicks />
            {/* Top Picks */}

            {/* Betting & Fantasy */}

            <BettingFantasy title="Betting & Fantasy" />

            {/* Betting & Fantasy */}

            {/* recent,feature,fannation */}
            <div className="container-fluid py-3">
                <div className="row m-0 g-2">
                    <div className="col-lg-5 col-md-6">
                        <RecentStories />
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <Featured />
                    </div>
                    <div className="col-lg-4">
                        <h1 className="nfl_card_title2 smd_border_bottom mb-4">Fannation</h1>

                        {[1, 1, 1].map((item, i) => <a key={i} href="#!">
                            <div className="border-bottom">
                                <h4 style={{ color: '#121212' }} className="mt-2">FanNation Grades Every NFL Team’s Offseason</h4>
                                <p className="mt-1">John Holinger</p>
                            </div>
                        </a>)}

                    </div>
                </div>
            </div>
            {/* recent,feature,fannation */}

            <SMDFooter />
        </div>
    );
};

export default Golf;

export async function getServerSideProps() {

    await db.connect();
    const posts = await Post.find()
        .lean()
        .limit(50);
    await db.disconnect();
    console.log(posts);

    return {
        props: {
            // adress: ['ismail', 'alif', 'hosen'],
            posts: posts.map(db.convertDocToObj)
            // mlbs,
        },
    };
}