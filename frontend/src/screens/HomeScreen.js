//import data from "../data";
import { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../Components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false }; //action.payload contains all products from backend
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    //logger dispatches actions
    products: [],
    loading: true,
    error: "",
  }); //useState poxum enq useReducer-ov
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data }); //result.data means products from backend
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="masthead">
      <Helmet>
        <title>The Christmas Boutique</title>
      </Helmet>
      {/* <div className="homescreen-title">
        <h1>Holiday Specials</h1>
        <br />
        <h5>YOUR SOURCE FOR ALL THINGS CHRISTMAS</h5>
      </div> */}
      <div className="products">
        <h1>Featured Products</h1>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // data.products-y poxum enq products
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
