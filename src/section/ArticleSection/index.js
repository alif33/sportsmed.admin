import Article2 from "../../components/sectionCard/Article2.js";


const ArticleSection = () => {
    return (
        <div className="nfl_sec_four">
            <div className="nfl_con">
                <div className="row g-2 m-0">
                    {[1, 1, 1, 1].map((item, i) => <div key={i} className="col-lg-3 col-md-6">
                        <Article2 img="/images/landing_Page/nfl_S4.png" name="Article" title="Dynasty Values To Target" />
                    </div>)}


                </div>
            </div>
        </div>
    );
};

export default ArticleSection;