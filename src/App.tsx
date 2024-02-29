import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SingleNews from "./pages/SingleNews";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "singlenews/:id",
      element: <SingleNews />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
