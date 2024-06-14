import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return(
    <RouterProvider router={router}></RouterProvider>
  )
};

export default App;
