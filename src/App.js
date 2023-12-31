import React, { Component } from "react";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path : '/' , element: <Layout /> , children: [
    {index: true, element: <Home />},
    {path:'about', element: <About/>},
    {path:'portfolio', element: <Portfolio />},
    {path:'contact', element: <Contact />},
  ]}
])

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
