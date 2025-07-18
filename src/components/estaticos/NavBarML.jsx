import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart";
import LogoIcon from '../icons/LogoIcon';
import './styleEstaticos.css';

function NavBarML({ isBusador = true }) {
  const { cart, setIsCartOpen, busqueda, setBusqueda } = useContext(CartContext);
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="navbar-custom">
      {/* Header */}
      <div className="nav-busqueda p-2 d-flex justify-content-between align-items-center">
        <LogoIcon />
        {isBusador&&(
          <div className="flex-grow-1 mx-3">
            <input
              className="form-control"
              type="text"
              placeholder="Buscar productos, marcas y más…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>)}


        {/* Móvil */}
        <div className="d-flex d-md-none gap-3 align-items-center me-2">
          <button className="btn" onClick={() => setMenuAbierto(true)}>
            <i className="fa fa-bars"></i>
          </button>
          <button className="btn" onClick={() => setIsCartOpen(true)}>
            <div className="cart-icon-wrapper position-relative">
              <i className="fa fa-shopping-cart"></i>
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </div>
          </button>
        </div>

        {/* Escritorio */}
        <div className="d-none d-md-flex gap-4 align-items-center me-3">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/acercade" className="nav-link">Nosotros</NavLink>
          <NavLink to="/productos" className="nav-link">Galería</NavLink>
          <NavLink to="/contacto" className="nav-link">Ayuda</NavLink>
          <NavLink to="/admin" className="nav-link">
            <i className="fa fa-user-tie"></i>
          </NavLink>
          <span className="nav-link" role="button" onClick={() => setIsCartOpen(true)}>
            <div className="cart-icon-wrapper position-relative">
              <i className="fa fa-shopping-cart"></i>
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </div>
          </span>
        </div>
      </div>

      {/* Menú móvil desde la izquierda */}
      {menuAbierto && (
        <div className="menu-lateral-movil">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="m-0">Menú</h5>
            <button className="btn-close" onClick={() => setMenuAbierto(false)} />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => setMenuAbierto(false)}>
                <i className="fa fa-house me-2" />Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/acercade" className="nav-link" onClick={() => setMenuAbierto(false)}>
                <i className="fa fa-people-group me-2" />Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" className="nav-link" onClick={() => setMenuAbierto(false)}>
                <i className="fa fa-ticket me-2" />Galería
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link" onClick={() => setMenuAbierto(false)}>
                <i className="fa fa-headset me-2" />Ayuda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin" className="nav-link" onClick={() => setMenuAbierto(false)}>
                <i className="fa fa-user-tie me-2" />Login
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link" role="button" onClick={() => { setIsCartOpen(true); setMenuAbierto(false); }}>
                <i className="fa fa-shopping-cart me-2" />Carrito ({cart.length})
              </span>
            </li>
          </ul>
        </div>
      )}

      <Cart />
    </header>
  );
}

export default NavBarML;
