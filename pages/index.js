import Navbar from "../src/components/headers/Navbar";
import TopHeading from "../src/components/headers/TopHeading";
import ScoreSlider from "../src/components/ScoreSlider";
import ArticleCard from "../src/components/sectionCard/Article";
import SMDFooter from "../src/components/SMDFooter";
import db from "../utils/db";
import _ from "lodash";
import Post from "../models/Post";
import Player from "../models/Player";
import TopStory from "../src/section/TopStory";
import PlayerSection from "../src/section/PlayerSection";
import TopPicks from "../src/section/TopPicks";
import BettingFantasy from "../src/section/BettingFantasy";
import Fannation from "../src/section/Fannation";


const LandingPage = ({ posts, players }) => {

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

            <PlayerSection players={ players } />

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
          <Fannation />
            {/* recent,feature,fannation */}

            <SMDFooter />
        </div>
    );
};

export default LandingPage;


export async function getServerSideProps() {

    await db.connect();
    const posts = await Post.find()
        .lean()
        .limit(50);

    const players = await Player.find()
        .lean()
        .limit(50);
    await db.disconnect();
    // console.log(posts);

    return {
        props: {
            // adress: ['ismail', 'alif', 'hosen'],
            posts: posts.map(db.convertDocToObj),
            players: players.map(db.convertDocToObj),
            // mlbs,
        },
    };
}

