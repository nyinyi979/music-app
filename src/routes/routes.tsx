import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Songs from "../pages/Song";
import PlaylistsPage from "../pages/Playlist";
const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/songs/:id",
          element: <Songs />
        },
        {
          path: "/playlists",
          element: <PlaylistsPage />
        }
      ],
    },
  ];

  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Routes;
