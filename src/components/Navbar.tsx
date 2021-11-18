import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUsers } from '@fortawesome/free-solid-svg-icons'

const style = {
  navbar: {
    borderBottom: 'solid 1px #aaa',
    padding: '10px 15px'
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    margin: '0px 10px'
  }
}

class Navbar extends Component {
  render() {
    return (
      <div style={style.navbar}>
        <Link to="/" style={style.link}><FontAwesomeIcon icon={faNewspaper} />Inicio</Link>
        <Link to="/cc/code-review" style={style.link}>Code Review</Link>
        <Link to="/cc/poo" style={style.link}>POO</Link>
        <Link to="/cc/modificadores" style={style.link}>Modificadores</Link>
        <Link to="/cc/patrones-de-arquitectura" style={style.link}>Patrones de arquitectura</Link>
        <Link to="/cc/patrones-de-disenho" style={style.link}>Patrones de diseño</Link>
        <Link to="/cc/solid" style={style.link}>SOLID</Link>
        <Link to="/cc/apis" style={style.link}>Web APIs</Link>
        <Link to="/cc/test-drive-development" style={style.link}>TDD</Link>
        <div style={{ float: 'right'}}>
          <Link to="/users" style={style.link}>
            <FontAwesomeIcon icon={faUsers} />Usuarios
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;