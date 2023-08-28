import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path:''
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinations);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
