import React, { useContext } from 'react';
import { BlockContext } from './block_context';
import Latest from './home_continer/latest';
import LatestArtical from './home_continer/latest_artical';
import TopPost from './home_continer/topPost';
import './home.css';

const Home = () => {
  const [blockList] = useContext(BlockContext);
  const date = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  // console.log(monthNames[date.getMonth()], date.getDate(),date.getFullYear());
  const iterator_category1 = Math.floor(Math.random() * 4);
  const iterator_ineer1 = Math.floor(Math.random() * 14);
  const iterator_category2 = Math.floor(Math.random() * 4);
  const iterator_ineer2 = Math.floor(Math.random() * 14);
  const iterator_category3=Math.floor(Math.random() * 4);
  // console.log(main_artical,latest_artical,post_artical);
  const title_getr = (itr) => {
    const titles = ['Toursim', 'Fitness', 'Bollywood', 'Food', 'Technology'];
    return titles[itr];
  }
  const pathChnger=([ind1,ind2])=>{
    console.log(blockList[ind1][ind2].id);
  }
  return (
    <div className='home-container'>
      <div className='main_artical'>
        <div className='left_main_artical mouse_hover' onClick={()=> pathChnger([iterator_category1,iterator_ineer1,])}>
          <img src={blockList[iterator_category1][iterator_ineer1].image} alt="artical" />
          <div className='left_main_artical_box'>
            <h5>{blockList[iterator_category1][iterator_ineer1].title}</h5>
            <p>{title_getr(iterator_category1)} / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
          </div>
        </div>
        <div className='right_main_artical'>
          <div className='right_main_articals' onClick={()=> pathChnger([iterator_category2,iterator_ineer2])}>
            <img src={blockList[iterator_category2][iterator_ineer2].image} alt="artical"  />
            <div className='right_main_artical_box'>
              <h6>{blockList[iterator_category2][iterator_ineer2].title}</h6>
              <p>{title_getr(iterator_category2)} / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
            </div>
          </div>
          <div className='right_main_articals' onClick={()=> pathChnger([iterator_category3,iterator_ineer1])}>
            <img src={blockList[iterator_category3][iterator_ineer1].image} alt="artical" />
            <div className='right_main_artical_box'>
              <h6>{blockList[iterator_category3][iterator_ineer1].title}</h6>
              <p>{title_getr(iterator_category3)} / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Latest_container">
              <Latest />
      </div>
      <div className="Latest_artical">
              <LatestArtical />
      </div>
      <div className="TopPost_artical">
              <TopPost />
      </div>
    </div>
  )
}

export default Home;