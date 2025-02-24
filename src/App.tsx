import NavbarComponent from "./components/NavbarComponent";
import { ProductsProvider } from "./context/productsContext";
import { SliderProvider } from './context/SliderProvider'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import SliderCart from "./components/SliderCart";
import DetailsPage from "./pages/DetailsPage";
function App() {
  return (
    <>
      <div>
        <SliderProvider>
          <ProductsProvider>
            <Router>
            <NavbarComponent />
              <SliderCart />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<DetailsPage />} />
              </Routes>
            </Router>
            </ProductsProvider>
        </SliderProvider>
      </div>
    </>
  );
}

export default App;
