
import './App.css';

import Products from './modules/Products/container/Products';
import ProductDetails from './modules/ProductDetails/ProductDetails';
import Cart from "./modules/Cart/Cart";
import Order from './modules/Order/Order';

import { Outlet, useRoutes } from 'react-router-dom';

function App(){
  const routes = useRoutes([
    {
      path: "/",
      element: <Products />
    },
    {
      path: "/productDetails",
      element: <ProductDetails />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/order",
      element: <Order />
    }
  ]);
  return routes;
}

const AppRoot = () => {
  return (
    <div className="App">
      <div>This is the Games page</div>
      <Outlet />
    </div>
  );
}

export default App;


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children:[
//       {
//         path: "productDetails",
//         element: <Products />,
//       },
//     ]
//   },
// ]);

// function App() {
//   return  <RouterProvider router={router} /> ;
// }

