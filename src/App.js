import { Route } from "react-router-dom";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>{" "}
        <Route path="/products">
          <Product />
        </Route>{" "}
      </main>{" "}
    </div>
  );
}

export default App;
