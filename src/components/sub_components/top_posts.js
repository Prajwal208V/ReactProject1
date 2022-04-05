import React, { useContext } from 'react';
import { BlockContext } from '../block_context';
import { useDispatch } from 'react-redux';
import { Pathchanger } from '../store/specificIteam';
import { useNavigate } from 'react-router-dom';
import './top_posts.css';

const TopPost = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const index = props.id[0];
    const category = props.id[1];
    const [blockList] = useContext(BlockContext);
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var rank = 1;
    var new_arr = blockList[index].slice(10, 14);
    const pathChnger = ([ind1, ind2]) => {
        // console.log(blockList[ind1][ind2]);
        dispatch(Pathchanger(blockList[ind1][ind2]));
        const id = blockList[ind1][ind2].id;
        let artical;
        switch (true) {
            case (id >= 1 && id <= 15):
                artical = "Tourism";
                break;
            case (id >= 16 && id <= 30):
                artical = "Fitness";
                break;
            case (id >= 31 && id <= 45):
                artical = "Bollywood";
                break;
            case (id >= 46 && id <= 60):
                artical = "Food";
                break;
            default:
                artical = "Technology";
                break;
        }
        navigate(`/categoty/${artical}/articalNo/${id}`);
    }
    return (
        <div className="top_list_container">
            <h2><span className="top">Top</span>Posts</h2>
            <div className="top_most_box">
                <div onClick={() => pathChnger([index, 9])}>
                    <img src={blockList[index][9].image} alt={"blockList"} />
                    <div className="top_rank_box">
                        <div className="top_post_block">
                            <div className="top_post_title"><h5>{blockList[index][9].title}</h5></div>
                            <h6 className="top_post_h6"><span className="title">{category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                        </div >
                        <h2 className="top_rank">{rank++}</h2>
                    </div>
                </div>
                <div className="subTop_container">
                    {new_arr.map((element, ind) => {
                        return (
                            <div className="bottom_most_box" key={ind.toString()} onClick={() => pathChnger([index, ind + 10])}>
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