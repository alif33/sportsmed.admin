import Link from 'next/link';
import { useState } from 'react';
import Card from './Card';

const PlayerSection = ({ players }) => {

    const [toggleState, setToggleState] = useState(1);
    const titles = ['NFL', 'NBA', 'MLB'];

    const toggleTab = index => {
        setToggleState(index)
    }

    return (
        
        <div>
            <div className='d-flex'>
                {
                    titles.map((item, index)=>{
                        return(
                        <h3 
                            key={ index }
                            className={ toggleState === index+1 ? 'nfl_3rd_title_active nfl_3rd_title' : 'nfl_3rd_title' }
                            onClick={ () => toggleTab(index+1) }
                        >{ item }</h3>
                        )
                    })
                }
            </div>

            {
                titles.map((item, index)=>{
                    return(
                        <div key={ index } className={ toggleState === index+1 ? 'd-block' : 'd-none' }>
                            <Card />
                            <Link href={`/${item.toLowerCase()}`}><a className='see_all_news'>See All News</a></Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PlayerSection;


