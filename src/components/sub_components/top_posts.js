import React, { useContext } from 'react';
import { BlockContext } from '../block_context';
import './top_posts.css';

const TopPost = (props) => {
    const index = props.id[0];
    const category = props.id[1];
    const [blockList] = useContext(BlockContext);
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var rank = 1;
    var new_arr = blockList[index].slice(10, 14);
    return (
        <div className="top_list_container">
            <h2><span className="top">Top</span>Posts</h2>
            <div className="top_most_box">
                <img src={blockList[index][9].image} alt={"blockList"} />
                <div className="top_rank_box">
                    <div className="top_post_block">
                        <div className="top_post_title"><h5>{blockList[index][9].title}</h5></div>
                        <h6 className="top_post_h6"><span className="title">{category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                    </div >
                    <h2 className="top_rank">{rank++}</h2>
                </div>
                <div className="subTop_container">
                    {new_arr.map((element, index) => {
                        return (
                            <div className="bottom_most_box" key={index.toString()}>
                                <img src={element.image} alt={"sub_post"} />
                                <div className="top_most_title_box">
                                    <div className="top_most_title"><h3>{element.title}</h3></div>
                                    <h6 className="h6"><span className="title">{category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                                </div>
                                <h2 className="top_rank">{rank++}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="advertisement">
                <img src="https://user-images.githubusercontent.com/92531202/158222759-225ef193-6544-45cb-bd25-b0538071d64b.png" alt="prep" />
                <img src="https://user-images.githubusercontent.com/92531202/158236898-54075208-fbd8-49e4-a2f1-4cf36bd5e893.png" alt="prep" />
            </div>
        </div>
    )
}

export default TopPost;