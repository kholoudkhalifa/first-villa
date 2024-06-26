import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import Navbar from '../Navbar';

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      
        "id": "101 Cookbooks",
        "title": "Best Pizza",
        "source_url": "http://www.101cookbooks.com/archives/001199.html",
        "recipe_id": "47746",
        "image_url": "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
        "price": 50,
        "publisher_url": "http://www.101cookbooks.com"
        },
        {
        "id": "The Pioneer Woman",
        "title": "Deep Pizza",
        "source_url": "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
        "recipe_id": "46956",
        "image_url": "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
        "price": 50,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "id": "Closet Cooking",
        "title": "Pizza Dip",
        "source_url": "http://www.closetcooking.com/2011/03/pizza-dip.html",
        "recipe_id": "35477",
        "image_url": "http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg",
        "price": 50,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "id": "Closet Cooking",
        "title": "Cauliflower Pizza ",
        "source_url": "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html",
        "recipe_id": "41470",
        "image_url": "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
        "price": 50,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "id": "Closet Cooking",
        "title": "Pizza Quesad)",
        "source_url": "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html",
        "recipe_id": "35478",
        "image_url": "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
        "price": 50,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "id": "Two Peas and Their Pod",
        "title": "Sweet Potato ",
        "source_url": "http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/",
        "recipe_id": "54454",
        "image_url": "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",
        "price": 99,
        "publisher_url": "http://www.twopeasandtheirpod.com"
        },
        {
        "id": "My Baking Addiction",
        "title": "Pizza Dip",
        "source_url": "http://www.mybakingaddiction.com/pizza-dip/",
        "recipe_id": "2ec050",
        "image_url": "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg",
        "price": 95,
        "publisher_url": "http://www.mybakingaddiction.com"
        },
        {
        "id": "The Pioneer Woman",
        "title": "Pizza Potato",
        "source_url": "http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/",
        "recipe_id": "6fab1c",
        "image_url": "http://forkify-api.herokuapp.com/images/pizza3464.jpg",
        "price": 99,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "id": "Bon Appetit",
        "title": "No-Knead ",
        "source_url": "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
        "recipe_id": "49346",
        "image_url": "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
        "price": 99,
        "publisher_url": "http://www.bonappetit.com"
        },
        {
        "id": "Simply Recipes",
        "title": "Homemade Pizza",
        "source_url": "http://www.simplyrecipes.com/recipes/homemade_pizza/",
        "recipe_id": "36453",
        "image_url": "http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg",
        "price": 99,
        "publisher_url": "http://simplyrecipes.com"
        },
        {
        "id": "Closet Cooking",
        "title": "Taco  Pizzas",
        "source_url": "http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html",
        "recipe_id": "35626",
        "image_url": "http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg",
        "price": 99,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "id": "All Recipes",
        "title": " Pizza Crust",
        "source_url": "http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx",
        "recipe_id": "17796",
        "image_url": "http://forkify-api.herokuapp.com/images/237891b5e4.jpg",
        "price": 99,
        "publisher_url": "http://allrecipes.com"
        },
        {
        "id": "Closet Cooking",
        "title": "Avocado Pizza ",
        "source_url": "http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html",
        "recipe_id": "35097",
        "image_url": "http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg",
        "price": 99,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "id": "The Pioneer Woman",
        "title": "Pizza Burgers",
        "source_url": "http://thepioneerwoman.com/cooking/2012/10/pepperoni-pizza-burgers/",
        "recipe_id": "46895",
        "image_url": "http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg",
        "price": 99,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "id": "Closet Cooking",
        "title": "Chicken Pizza ",
        "source_url": "http://www.closetcooking.com/2012/02/thai-chicken-pizza-with-sweet-chili.html",
        "recipe_id": "35635",
        "image_url": "http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg",
        "price": 99,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "id": "The Pioneer Woman",
        "title": "Pizza Crust",
        "source_url": "http://thepioneerwoman.com/cooking/2011/09/steakhouse-pizza/",
        "recipe_id": "47000",
        "image_url": "http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg",
        "price": 99,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "id": "Two Peas and Their Pod",
        "title": "Balsamic Pizza",
        "source_url": "http://www.twopeasandtheirpod.com/peach-basil-mozzarella-balsamic-pizza/",
        "recipe_id": "54491",
        "image_url": "http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg",
        "price": 99,
        "publisher_url": "http://www.twopeasandtheirpod.com"
        },
        {
        "id": "Real Simple",
        "title": "Egg Pizzas",
        "source_url": "http://www.realsimple.com/food-recipes/browse-all-recipes/english-muffin-egg-pizzas-5000000663044/index.html",
        "recipe_id": "38812",
        "image_url": "http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg",
        "price": 99,
        "publisher_url": "http://realsimple.com"
        },
        {
        "id": "My Baking Addiction",
        "title": "Pizza Dough",
        "source_url": "http://www.mybakingaddiction.com/no-knead-pizza-dough-recipe/",
        "recipe_id": "dd21dd",
        "image_url": "http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg",
        "price": 99,
        "publisher_url": "http://www.mybakingaddiction.com"
        },
        {
        "id": "The Pioneer Woman",
        "title": " Pizza",
        "source_url": "http://thepioneerwoman.com/cooking/2011/07/grilled-vegetable-pizza/",
        "recipe_id": "47011",
        "image_url": "http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg",
        "price": 99,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "id": " Addiction",
        "title": "Spicy Chicken and Pepper Jack Pizza",
        "source_url": "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/",
        "recipe_id": "0fb8f4",
        "image_url": "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg",
        "price": 99,
        "publisher_url": "http://www.mybakingaddiction.com"
        },
        {
        "id": "Simply Recipes",
        "title": "Grill Pizza",
        "source_url": "http://www.simplyrecipes.com/recipes/how_to_grill_pizza/",
        "recipe_id": "36476",
        "image_url": "http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg",
        "price": 99,
        "publisher_url": "http://simplyrecipes.com"
        },
        {
        "id": "The Pioneer Woman",
        "title": "Favorite Pizza",
        "source_url": "http://thepioneerwoman.com/cooking/2010/02/my-favorite-pizza/",
        "recipe_id": "47161",
        "image_url": "http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg",
        "price": 99,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "id": "My Baking Addiction",
        "title": "Chicken Pizza",
        "source_url": "http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/",
        "recipe_id": "a723e8",
        "image_url": "http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg",
        "price": 99,
        "publisher_url": "http://www.mybakingaddiction.com"
        },
        {
        "id": "Two Peas ",
        "title": "Avocado Pita Pizza with Cilantro Sauce",
        "source_url": "http://www.twopeasandtheirpod.com/avocado-pita-pizza-with-cilantro-sauce/",
        "recipe_id": "54388",
        "image_url": "http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg",
        "price": 99,
        "publisher_url": "http://www.twopeasandtheirpod.com"
        },
        {
        "id": "What's Gaby Cooking",
        "title": "Pizza ",
        "source_url": "http://whatsgabycooking.com/pizza-monkey-bread/",
        "recipe_id": "ead4e0",
        "image_url": "http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg",
        "price": 992,
        "publisher_url": "http://whatsgabycooking.com"
        },
        {
        "id": "The Pioneer Woman",
        "title": "Supreme ",
        "source_url": "http://thepioneerwoman.com/cooking/2012/10/supreme-pizza-burgers/",
        "recipe_id": "46892",
        "image_url": "http://forkify-api.herokuapp.com/images/burger53be.jpg",
        "price": 99,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "id": "Closet Cooking",
        "title": "Balsamic Strawberry ",
        "source_url": "http://www.closetcooking.com/2012/07/balsamic-strawberry-and-chicken-pizza.html",
        "recipe_id": "35128",
        "image_url": "http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg",
        "price": 99,
        "publisher_url": "http://closetcooking.com"
        } ,
  ];

  return (
    <div>
      <Container>
        <Row>
        {products.map((p) => (
        <Col md="4" key={p.id} className="text-center mb-4">
          <img src={p.image_url} className="img-fluid" style={{height:"350px"}}></img>
         <h3>{p.title}</h3>
         <h5>{p.price}</h5>
          <button className="btn btn-primary mt-3" onClick={() => addItem(p)}>Add to cart</button>
        </Col>
      ))}

        </Row>
      </Container>
     
    </div>
  );
}

function Cart() {
  const { isEmpty,totalUniqueItems, items, updateItemQuantity, removeItem,emptyCart,totalItems,cartTotal,
  } = useCart();

  if (isEmpty) return <h3 className="text-center">Your cart is empty</h3>;

  return (
    <div>
      <h1 className="text-center">Cart ({totalUniqueItems})</h1>
      <button className="btn btn-danger" onClick={()=>emptyCart()}>Delete</button>
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
            <button className="btn btn-warning"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className="btn btn-success mx-2"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
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


          </Col>
        </Row>
      </Container>

     
    </div>
  );
}

function AllFeatures() {
  return (
    <CartProvider>
       <div>
         <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <ul className="info">
            <li><i className="fa fa-envelope"></i> info@company.com</li>
            <li><i className="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4">
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
         {/* <!-- ***** Header Area Start ***** --> */}
         <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
               <Navbar/>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}
        
      </div>
      <Page />
      {/* <Cart /> */}
    </CartProvider>
    
  );
}export default AllFeatures;
