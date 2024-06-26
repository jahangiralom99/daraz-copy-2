import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AddToCart from "../Pages/AddToCart/AddToCart";
import Checkout from "../Pages/Checkout/Checkout";
import AjkerDeal from "../Pages/AjkerDeal/AjkerDeal";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <ProductDetails />,
      },
      {
        path: "/addToCard",
        element: <AddToCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/ajkerDeal",
        element: <AjkerDeal />,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
    ],
  },
]);

export default Routes;
