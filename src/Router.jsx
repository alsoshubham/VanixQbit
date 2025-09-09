import About from "./pages/About";
import Hero from "./pages/Hero";
import Testimonials from "./pages/Testimonials";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
]);

export default router;
