import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { Store } from './Store';
import { Shopping } from './shopping';
import { Cart } from './Cart';
 const router= createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"Shopping",
    element:<Shopping/>,
    children:[
      {

        path:"store",
        element:<Store/>

      },
      {
        path:"cart",
        element:<Cart/>
      }

    ]
  }
  
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
