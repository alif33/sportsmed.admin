import React from "react";
import Link from "next/link";
import Card from "./Card";
import Live from "./Live";
import LiveCard from "./LiveCard";

const Section = ({ title, live, lists }) => {
    
    return (
        <div className="container-fluid mt-2">
            <h4 className='nfl_card_title2 _smd_watch_live_title'>{ title } {live && <Live/>}</h4>
            <div className="row">
                {
                    lists && lists.map((item, index)=>{
                        return(
                            <div key={ index } className="col-md-3">
                                {
                                    live? <LiveCard
                                            item={ item }
                                        />: <Card 
                                            item={ item }
                                        />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Section;