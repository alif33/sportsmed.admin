import dateformat from 'dateformat';
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from 'react-feather';
import { getData } from '../../../../__lib__/helpers/HttpService';
import Card from './Card';



const DateWise = ({ fetchPosts, posts }) => {
    const [postOpen, setPostOpen] = useState()

    return (
        <>

            {
                posts.map((item, index) => (
                    <div key={item._id} className="bg-white p-75 ">
                        <div className="d-flex justify-content-between">
                            <h5 className="mb-0" >{dateformat(item._id, 'dd mmmm yyyy')}</h5>

                            <hr />
                            
                            <h5 >
                                {(postOpen === index) ? <ChevronUp onClick={() => setPostOpen(postOpen === index ? '' : index)} /> : 
                                <ChevronDown onClick={() => setPostOpen(postOpen === index ? '' : index)} />}
                            </h5>
                        </div>
                        <hr />

                        {(postOpen === index) && item.items?.map((post, i) => <Card key={i} index={i} item={post} fetchPosts={fetchPosts} />)}
                    </div>
                ))}
        </>
    );
};

export default DateWise;