import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Signup from './signup/signup'
import Login from './login/login'
import Homepage from './home/homepage'
import Homes from './home/homes'
import Products from './products/products'
import Wishlist from './wishlist/wishlist'
import Detail from './detail/detail'
import Cart from './cart/cart'
import Chekout from './chekout/chekout'
import Account from './account/account'
import About from './about/about'
import Contact from './contact/contact'
import Infopage from './products/infopage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/homepage",
          element: <Homepage />
        },
        {
          path: "/homes",
          element: <Homes />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/infopage/:id",
          element: <Infopage />
        },
        {
          path: "/wishlist",
          element: <Wishlist />
        },
        {
          path: "/detail",
          element: <Detail />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/chekout",
          element: <Chekout />
        },
        {
          path: "/account",
          element: <Account />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App





// import Login from "./login/login";
// import Registration from "./signup/signup";
// import React from "react";
// const App = () => {
//   return (
//     <div>
//       <Registration />
//       <Login />
//     </div>
//   );
// };

// export default App;