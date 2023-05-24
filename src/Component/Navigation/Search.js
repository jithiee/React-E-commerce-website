


import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';


const Search = () => {

    const { state , search} = useContext(context)
    const navigate = useNavigate
 
    console.log(search);
  
  return (
    <div>
  
      <div >
        <div  >

          {state.filter((val) => {

        if(search ===" "){
          return val;
        }
        else if(val.ProductName.toLowerCase().includes(search.toLowerCase())){
          return val;
        }else{
          return false;
        }

      })
    
      .map((item)=>(

    
        <Card className='  w-25  mt-5 d-inline-block shadow   ' key={item.id}  >
            <Card.Img  className='men' variant="top"  style={{cursor:'pointer'}} onClick={() => navigate(`/viewpdct/${item.id} `)}  src={item.image} />
            <Card.Body>
              <Card.Title>{item.ProductName}</Card.Title>
              <Card.Text>${item.price} </Card.Text>
              <Button variant="primary" onClick={() => navigate(`/viewpdct/${item.id} `)} >View product</Button>
            </Card.Body>
          </Card>

      ))

      }
        </div>
      </div>
    </div>
  
  )
}

export default Search