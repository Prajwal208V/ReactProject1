import React, { useContext } from 'react';
import { BlockContext } from '../block_context';
import TopPost from './top_posts';
import { useDispatch } from 'react-redux';
import { Pathchanger } from '../store/specificIteam';
import { useNavigate } from 'react-router-dom';
import './category_display.css';


const Categorydisplay = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const index = props.id[0];
  const category = props.id[1];
  const [blockList] = useContext(BlockContext);
  const date = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

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
    <div className="category_container">
      <div className="category_left_box">
        <h2>{category}</h2>
        <div className="left_box">
          {
            blockList[index].map((element, ind) => {
              return (
                <div key={element.id.toString()} className="category_box" onClick={() => pathChnger([index, ind])}>
                  <img src={element.image} alt="artical" />
                  <div className="category_block">
                    <div className="category_title"><h3>{element.title}</h3></div>
                    <div className="category_left_box_para" ><p>{element.para}.</p> </div>
                    <h6 className="h6"><span className="title">{category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="category_right_box">
        <TopPost id={[index, category]} />
      </div>
    </div>
  )
}

export default Categorydisplay;