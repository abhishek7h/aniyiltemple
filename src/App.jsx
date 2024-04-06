// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Nav from "./components/Nav.jsx";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import PoojaTimings from "./pages/PoojaTimings.jsx";
// import Hero from "./components/Hero.jsx";

// function App() {
//   return (
//     <>
//       <Router>
//         <div className="bg-amber-500">
//           <Nav />
//         </div>
//         <Hero />
//         <Routes>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/pooja" component={PoojaTimings} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pooja from "./pages/Pooja";
import MainLayout from "./layouts/MainLayout";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
// import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="pooja" element={<Pooja />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
