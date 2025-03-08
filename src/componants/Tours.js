import Cards from './Cards';

function Tours({tour,removeHandler})
{
  return(
    <div className='container'>
       <div>
    <h2 className='title'>Plan With Love</h2>
    </div>
    <div className='cards'>
        {
          tour.map((tour)=>{
                return <Cards key={tour.id} {...tour} removeHandler={removeHandler}></Cards>
            }
          )  
        }
    </div>
    </div>
  );
}

export default Tours;