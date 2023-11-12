import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <About/>
    ),
  },
  {
    path: "contact",
    element:(<Contact/>),
  },
]);

function App() {
  return (
   <div>
    <RouterProvider router={router} />
   </div>
  );
}

export default App;
