import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Training from "./pages/Training.jsx";
import Teaching from "./pages/Teaching.jsx";
import Publications from "./pages/Publications.jsx";
import Presentations from "./pages/Presentations.jsx";
import Recognition from "./pages/Recognition.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/presentations" element={<Presentations />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
