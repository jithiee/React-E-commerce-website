import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { context } from './Context'
import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {MdShoppingCartCheckout} from 'react-icons/md'




function ViewPdct() {
  const { state, cart, setCart, auth } = useContext(context)
  const navigate = useNavigate()
 const { id } = useParams()
 const newCart = state.filter((item)=>item.id === parseInt(id))

const handleAddtocart = () => {
     if (auth === true) {
      const [goods] = newCart
       const cartProduct = cart.filter((item) => item.id === goods.id) 
   
       if(cartProduct.length > 0){
         alert("product Alredy in the cart")
        }else {
          document.getElementById("cartButton").style.display = "none";
          const [goods] = newCart
          setCart((prevState )=> [...prevState , goods]);
          document.getElementById("cartImage").style.display = "block";
          alert('Successfully Added To Cart')
          
        }
            }else{
              alert('Please Login');
              navigate('/login')
            }
    
    }
  
  return (
  <>

    <div className='pb-5' >
      {newCart.map((cart)=>
    
      <Card className='w-25  mt-5 d-inline-block shadow   ' key={cart.id}  >
        <Card.Img  variant="top" src={cart.image} />
        <Card.Body>
          <Card.Title>{cart.ProductName}</Card.Title>
          <Card.Text>${cart.price} </Card.Text>
           <Button className='cartbtn shadow' style={{fontFamily:'cursive',backgroundColor:'#2C73D2',}} id={cart.id} onClick={handleAddtocart} >< MdShoppingCartCheckout/> Add To Cart </Button>
        
        
        </Card.Body>
      </Card>
        )
      }


    </div>

  </>
)
}

export default ViewPdct
