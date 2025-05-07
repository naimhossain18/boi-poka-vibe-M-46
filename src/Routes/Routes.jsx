import React from 'react';

import {
    createBrowserRouter,
    
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Book from '../pages/Books/Book';
import BookDetails from '../pages/bookDetails/BookDetails';

   export const router = createBrowserRouter( [
    {
        path: '/', 
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: ()=> fetch("bookData.json"),
                Component: Home,
            },
            {
                path: '/',
                Component: Book
            },
            {
                path: '/bookDetails/:id',
                Component: BookDetails,
                loader: ()=>fetch('bookData.json')
            }
        ]
    }

  ]);