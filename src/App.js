import { Route, Switch, Redirect } from "react-router-dom";

import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
