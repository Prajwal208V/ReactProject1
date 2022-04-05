import React, { useContext } from 'react';
import { BlockContext } from '../block_context';
import { useDispatch } from 'react-redux';
import { Pathchanger } from '../store/specificIteam';
import { useNavigate } from 'react-router-dom';
import './topPost.css';

const TopPost = () => {
    const dispatch = useDispatch();
    const [blockList] = useContext(BlockContext);
    const navigate = useNavigate();
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const counter = [];
    for (let i = 1; i <= 8; i++) {
        let main_itr = Math.floor(Math.random() * 4);
        let inner_itr = Math.floor(Math.random() * 7);
        counter.push([main_itr, inner_itr]);
    }


    const caller = (ind) => {
        return counter[ind];
    }

    const title_getr = (itr) => {
        const titles = ['Toursim', 'Fitness', 'Bollywood', 'Food', 'Technology'];
        return titles[itr];
    }
    var rank = 1;
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
        <div className="main-container">
            <h3><span className='lates_the'>Top</span> Post</h3>
            <div className="top_post_container">
                {
                    counter.map((value, index) => {
                        let compoent_varible = caller(index);
                        return (
                            <div className='post_box' key={index.toString()} onClick={() => pathChnger([compoent_varible[0], [compoent_varible[1]]])}>
                                <div className="rank_box">
                                    <img src={blockList[compoent_varible[0]][compoent_varible[1]].image} alt="artical" />
                                    <h2>{rank++}</h2>
                                </div>
                                <div className="block">
                                    <div className="box1Para"><p>{(blockList[compoent_varible[0]][compoent_varible[1]].para).slice(0, 150)}.</p> </div>
                                    <h6 className="h5"><span className="title">{title_getr(compoent_varible[0])} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TopPost;