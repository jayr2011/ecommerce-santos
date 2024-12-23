import { library } from "@fortawesome/fontawesome-svg-core";
import { faS, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faS, faCartShopping);
import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  HomePage  from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export default function NavbarComponent(): JSX.Element {
  return (
    <Router>
      <Navbar fluid rounded border>
        <NavbarBrand href="#">
          <Link className="flex flex-row" to="/">
            <img src="/src/img/logo.webp" className="mr-3 h-6 rounded sm:h-9"/>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Santos Comércio</span>
          </Link>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#">
            <Link to="/">Inicio</Link>
          </NavbarLink>
          <NavbarLink href="#">
            <Link to="/about">Sobre</Link>
          </NavbarLink>
          <NavbarLink href="#">
            Conatato
          </NavbarLink>
          <NavbarLink href="#">
            <span className="rounded-full bg-slate-300 p-2 text-xl">
              <FontAwesomeIcon icon={["fas", "cart-shopping"]} />
            </span>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </ Routes>
    </Router>
  );
}
