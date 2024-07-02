import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Landing from "./Pages/LandingPage";
import ProductDetailPage from "./Pages/ProductDetalsPage";
import AddProductPage from "./Pages/AddProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/add-product",
    element: <AddProductPage />,
  },
  {
    path: "/:id",
    element: <ProductDetailPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
