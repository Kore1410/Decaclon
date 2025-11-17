import { Outlet, Link } from "react-router-dom";

import logo from '../components/Image/logo.png';

import "@vtmn/icons/dist/vitamix/font/vitamix.css";
import { VtmnNavbar, VtmnNavbarLink, VtmnSearch } from '@vtmn/react';

import './Logo/Logo.css';
import './Layout.css';

const Layout = () => {
    return(
        <nav>
            <div className="nav-header">
            <li>
                    <Link to="/"><img src={logo} className="logoDecatlhon" alt="logo" /></Link>
            </li>
            <VtmnSearch className="search-bar" label="Search" placeholder="Buscar productos, marcas y más..." />
            <VtmnNavbarLink icon="checkbox-blank-circle-line"></VtmnNavbarLink>
            <VtmnNavbarLink icon="store-line"></VtmnNavbarLink>
            <VtmnNavbarLink icon="user-line"></VtmnNavbarLink>
            <VtmnNavbarLink icon="shopping-cart-line"></VtmnNavbarLink>
            </div>
            <ul className="menu">
                <li>
                    <Link to="/catalog">Deportes</Link>
                </li>
                <li><a href="#">Mujer</a></li>
                <li><a href="#">Hombre</a></li>
                <li><a href="#">Infantil</a></li>
                <li><a href="#">Equipamiento</a></li>
                <li><a href="#">Nutrición y salud</a></li>
                <li><a href="#">Descuentos</a></li>
            </ul>
       
         <Outlet />   
        </nav>
        
    )
}

export default Layout;