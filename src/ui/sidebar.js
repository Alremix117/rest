import React from 'react';
import { NavLink } from 'react-router-dom';

const registrationBackgroundStyle = {
    backgroundImage: `url('src/img/Gym.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

const sidebarStyle = {
  width: '20%',
  backgroundColor: '#333',
  padding: '20px',
};

const headerStyle = {
  color: 'white',
  fontSize: '24px',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const navLinkStyle = {
  display: 'block',
  padding: '10px',
  color: 'gray',
  textDecoration: 'none',
  transition: 'background-color 0.3s, color 0.3s',
};

const activeLinkStyle = {
  backgroundColor: '#ffcc33',
  color: '#333',
};

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div style={headerStyle}>GIMNASIO</div>
      <nav>
        <NavLink
          to="/"
          style={navLinkStyle}
          activeStyle={activeLinkStyle}
          exact
        >
          Registro
        </NavLink>
        <NavLink
          to="/login"
          style={navLinkStyle}
          activeStyle={activeLinkStyle}
        >
          Inicio Sesión
        </NavLink>
        <NavLink
          to="/inicio"
          style={navLinkStyle}
          activeStyle={activeLinkStyle}
        >
          Inicio
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
