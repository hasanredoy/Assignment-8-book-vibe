// import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer} from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import ListedBook from './components/listedBooks/ListedBook.jsx';
import PageToRead from './components/pageToRead/PageToRead.jsx';
import Blogs from './components/blogs/Blogs.jsx';
import About from './components/About/About.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Read from './components/read&wishlist/Read.jsx';
import Wishlist from './components/read&wishlist/Wishlist.jsx';
import React from 'react';
import Error from './components/error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedBooks",
        element:<ListedBook></ListedBook>,
        children:[
          {
            path:'',
            element:<Read></Read>
          },
          {
            path:"wishlist",
            element:<Wishlist></Wishlist>
          }
        ]
      },
      {
        path:"/pagesToRead",
        element:<PageToRead></PageToRead>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>,
        loader:()=> fetch(`https://dev.to/api/articles?per_page=15`)
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/bookDetails/:id",
        element:<BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
