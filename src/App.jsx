import { Children, useState,useParams } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Lates from './pages/Lates';
import Cate from './pages/Cate';
import Root from './pages/Root';
import Details from './pages/Details';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Lates/>
      },
      {
        path:'Cate',
        element: <Cate/>
        
      },

      {
        path:'cate/:id',
        element:<Details/>
      }

      
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default App
