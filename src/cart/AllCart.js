import React from 'react'
import { CartProvider,useCart } from 'react-use-cart';
import { Container,Row ,Col } from 'reactstrap';
import Header from'./Header'
import Subheader from './Subheader'

function Cart() {
    const { isEmpty,totalUniqueItems, items, updateItemQuantity, removeItem,emptyCart,totalItems,cartTotal,
    } = useCart();
  
    if (isEmpty) return <h3 className="text-center">Your cart is empty</h3>;
  
    return (
      <div>
      
        <h1 className="text-center">Cart ({totalUniqueItems})</h1> 
        
        {/* <but className="text-center mx-6">
        <button className="btn btn-danger " onClick={()=>emptyCart()}>Delete</button>
        </but> */}
        <Container>
          <Row>
            <Col md="10" className="m-auto">
            <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price*item.quantity}</td>
              <td>
              {item.quantity} x {item.title};
              <button className="btn btn-warning mx-3"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button className="btn btn-success mx-2"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button className="btn btn-danger mx-3" onClick={() => removeItem(item.id)}>&times;</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>total</td>
            <td>--------</td>
            <td>{totalItems}</td>
            <td>{cartTotal}</td>
            <td>----------</td>
          </tr>
          </tbody>
        </table>
        <but className="text-center m-auto">
        <button className="btn btn-danger " onClick={()=>emptyCart()}>Delete</button>
        </but>
  
  
            </Col>
          </Row>
        </Container>
  
       
      </div>
    );
  }

function AllCart() {
  return (
    <CartProvider>
        <Subheader/>
        <Header/>
        <Cart/> 
    </CartProvider>
  )
}

export default AllCart
