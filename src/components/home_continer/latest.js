import React, { useContext } from 'react';
import { BlockContext } from '../block_context';
import './latest.css';

const Latest = () => {
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const [blockList] = useContext(BlockContext);
    const iterator_category1 = Math.floor(Math.random() * 4);
    const iterator_ineer1 = Math.floor(Math.random() * 14);
    const iterator_category2 = Math.floor(Math.random() * 4);
    const iterator_ineer2 = Math.floor(Math.random() * 14);
    const iterator_category3 = Math.floor(Math.random() * 4);
    const title_getr = (itr) => {
        const titles = ['Toursim', 'Fitness', 'Bollywood', 'Food', 'Technology'];
        return titles[itr];
    }
    const slicer = (para) => {
        return para.slice(0, 250);
    }
    const pathChnger=([ind1,ind2])=>{
        console.log(blockList[ind1][ind2]);
    }
    return (
        <div className="lest_container">
            <h3><span className='lates_the'>The</span> Latest</h3>
            <div className="lest_box">
                <div className="box" onClick={()=> pathChnger([iterator_category1,iterator_ineer1,])}>
                    <img src={blockList[iterator_category1][iterator_ineer1].image} alt="artical" />
                    <div className="para_box"><p>{slicer(blockList[iterator_category1][iterator_ineer1].para)}.</p> </div>
                    <h5><span className="title">{title_getr(iterator_category1)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                </div>
                <div className="box" onClick={()=> pathChnger([iterator_category2,iterator_ineer2])}>
                    <img src={blockList[iterator_category2][iterator_ineer2].image} alt="artical" />
                    <div className="para_box"><p>{slicer(blockList[iterator_category2][iterator_ineer2].para)}.</p> </div>
                    <h5><span className="title">{title_getr(iterator_category2)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                </div>

                <div className="box" onClick={()=> pathChnger([iterator_category3,iterator_ineer1,])}>
                    <img src={blockList[iterator_category3][iterator_ineer1].image} alt="artical" />
                    <div className="para_box"><p>{slicer(blockList[iterator_category3][iterator_ineer1].para)}.</p> </div>
                    <h5><span className="title">{title_getr(iterator_category3)} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                </div>
            </div>
        </div>
    )
}

export default Latest;