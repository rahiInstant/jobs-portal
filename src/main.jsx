import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Applied from "./components/Applied/Applied.jsx";
import Blog from "./components/Blog/Blog.jsx";
import ErrorPage from "./components/errorElement/ErrorPage.jsx";
import Root from "./components/Root/Root.jsx";
import Job from "./components/Job/Job.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/job/:jobID",
        loader:  async({ params }) => {
          const res = await fetch('/jobs.json')
          const data = await res.json()
          const actualData = data.find((item)=> item.id === parseInt(params.jobID))
          return actualData
        },
        element: <Job></Job>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
