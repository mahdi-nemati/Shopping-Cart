import Layout from "../Layout/Layout";
import * as data from "../Data/data";
import { useCartActions } from "../Providers/CartProvider";
const HomePage = () => {
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="productImg">
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div className="productDetails">
                  <p>{product.name}</p>
                  <p> $ {product.price}</p>
                </div>
                <button
                  onClick={() => addProductHandler(product)}
                  className="btn primary"
                >
                  Add to cart
                </button>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
