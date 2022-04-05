import React, { useContext } from 'react';
import { BlockContext } from '../block_context';
import { useDispatch } from 'react-redux';
import { Pathchanger } from '../store/specificIteam';
import classes from './latest_artical.module.css';
import { useNavigate } from 'react-router-dom';


const LatestArtical = () => {
    const dispatch = useDispatch();
    const [blockList] = useContext(BlockContext);
    const navigate = useNavigate();
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    // console.log(monthNames[date.getMonth()], date.getDate(),date.getFullYear());
    const iterator_category1 = Math.floor(Math.random() * 4);
    const iterator_ineer1 = Math.floor(Math.random() * 14);
    const iterator_category2 = Math.floor(Math.random() * 4);
    const iterator_ineer2 = Math.floor(Math.random() * 14);
    const iterator_category3 = Math.floor(Math.random() * 4);
    const iterator_ineer3 = Math.floor(Math.random() * 14);
    const title_getr = (itr) => {
        const titles = ['Toursim', 'Fitness', 'Bollywood', 'Food', 'Technology'];
        return titles[itr];
    }
    const slicer = (para) => {
        return para.slice(0, 250);
    }
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
        <div className={classes.container}>
            <h3><span className='lates_the'>Latest</span> Artical</h3>
            <div className={classes.latest_artical_container}>
                <div className={classes.boxContiner}>
                    <div className={classes.box01} onClick={() => pathChnger([iterator_category2, iterator_ineer1])}>
                        <img src={blockList[iterator_category2][iterator_ineer1].image} alt="artical" />
                        <div>
                            <div className={classes.box1Para}><p>{slicer(blockList[iterator_category2][iterator_ineer1].para)}.</p> </div>
                            <h5 className={classes.h5}><span className="title">{title_getr(iterator_category2)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                        </div>
                    </div>
                    <div className={classes.box01} onClick={() => pathChnger([iterator_category3, iterator_ineer1,])}>
                        <img src={blockList[iterator_category3][iterator_ineer1].image} alt="artical" />
                        <div>
                            <div className={classes.box1Para}><p>{slicer(blockList[iterator_category3][iterator_ineer1].para)}.</p> </div>
                            <h5 className={classes.h5}><span className="title">{title_getr(iterator_category3)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                        </div>
                    </div>
                    <div className={classes.box01} onClick={() => pathChnger([iterator_category1, iterator_ineer2,])}>
                        <img src={blockList[iterator_category1][iterator_ineer2].image} alt="artical" />
                        <div>
                            <div className={classes.box1Para}><p>{slicer(blockList[iterator_category1][iterator_ineer2].para)}.</p> </div>
                            <h5 className={classes.h5}><span className="title">{title_getr(iterator_category1)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                        </div>
                    </div>
                    <div className={classes.box01} onClick={() => pathChnger([iterator_category2, iterator_ineer2,])}>
                        <img src={blockList[iterator_category2][iterator_ineer2].image} alt="artical" />
                        <div>
                            <div className={classes.box1Para}><p>{slicer(blockList[iterator_category2][iterator_ineer2].para)}.</p> </div>
                            <h5 className={classes.h5}><span className="title">{title_getr(iterator_category2)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                        </div>

                    </div>
                    <div className={classes.box01} onClick={() => pathChnger([iterator_category3, iterator_ineer3,])}>
                        <img src={blockList[iterator_category3][iterator_ineer3].image} alt="artical" />
                        <div>
                            <div className={classes.box1Para}><p>{slicer(blockList[iterator_category3][iterator_ineer3].para)}.</p> </div>
                            <h5 className={classes.h5}><span className="title">{title_getr(iterator_category3)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                        </div>
                    </div>
                </div>
                <div className={classes.box2} >
                    <img src="https://user-images.githubusercontent.com/92531202/158222759-225ef193-6544-45cb-bd25-b0538071d64b.png" alt="prep" />
                    <img src="https://user-images.githubusercontent.com/92531202/158236898-54075208-fbd8-49e4-a2f1-4cf36bd5e893.png" alt="prep" />
                </div>
            </div>
        </div>
    )
}

export default LatestArtical;