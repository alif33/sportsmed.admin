import Navbar from '../../src/components/headers/Navbar';
import NavHeaders from '../../src/components/headers/NavHeader';
import TopHeading from '../../src/components/headers/TopHeading';
import NbaHero from '../../src/section/hero/NbaHero';
import SMDFooter from '../../src/components/SMDFooter';
import BettingFantasy from '../../src/section/BettingFantasy';
import MoreNews from '../../src/section/MoreNews';
import NbaNews from '../../src/section/NbaNews';
import PlayerSection from '../../src/section/PlayerSection';
import TopPicks from '../../src/section/TopPicks';

const Soccer = () => {
    return (
        <div>
            <TopHeading />
            <Navbar />
            <NavHeaders />

            <NbaHero />

            <NbaNews title="Soccer News" />
            {/* Top Picks */}
            <TopPicks />
            {/* Top Picks */}
            {/* Betting & Fantasy */}
            <BettingFantasy title="Trendings" />
            {/* Betting & Fantasy */}
            {/* Player News */}
            <PlayerSection />
            {/* Player News */}
            {/* nfl sec six start */}
            <MoreNews />
            {/* nfl sec six end */}
            <SMDFooter />
        </div>
    );
};

export default Soccer;