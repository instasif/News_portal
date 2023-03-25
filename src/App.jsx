import Button from "react-bootstrap/Button";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

// https://dragon-news-server-chi-six.vercel.app/


