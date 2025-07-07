import About from "./pages/About";
import Features from "./pages/Features";
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
    path: "/features",
    element: <Features />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
]);

export default router;
