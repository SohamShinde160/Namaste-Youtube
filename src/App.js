import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import MainConatiner from "./components/MainConatiner";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watchpage from "./components/Watchpage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element: <MainConatiner/>,
    },
    {
      path:"watch",
      element:<Watchpage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
