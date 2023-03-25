import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://dragon-news-server-chi-six.vercel.app/news"),
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-chi-six.vercel.app/category/${params.id}`
          ),
        element: <Category />,
      },
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-chi-six.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
