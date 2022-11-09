import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>The Product Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">PS5</Link>
        </li>
        <li>
          <Link to="/products/p3">A Book</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
