import {useState} from "react";

function Cards({id,image,info,price,name,removeHandler})
{

const [readmore,setReadmore]= useState(false);
const descrip= readmore ? info : `${info.substring(0,20)}....`

 function readmoreHandler()
 {
    setReadmore(!readmore);

 }
  
  return(
    <div className="card">
     <img src={image} className="image"></img>
    <div className="tour-info">
    <div className="tour-detail">
        <h4 className="tour-price">₹{price}</h4>
        <h4 className="tour-name">{name}</h4>
     </div>
     <div className="description">{descrip}
     <span className="read-more" onClick={readmoreHandler}>{readmore ? `ShowLess` : `ReadMore`}</span>
     </div>
    </div>
      <button className="btn-red" onClick={()=>removeHandler(id)}>
      Not Intrested</button>
    </div>
  );
}

export default Cards;