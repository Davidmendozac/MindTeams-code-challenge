import { Component } from 'react';
import Container from '../../components/Container';

class SOLID extends Component {
  render() {
    return (
      <Container>
        <p style={{ width: '60%' }}>
          <h2>SOLID</h2>
          Es un acrónimo en el cual se representan principios básicos de la POO. Con estos principios se desea eliminar malos diseños,
          evitar la refactorización y hacer código más eficiente y fácil de mantener. <br />
        </p>
        <p style={{ width: '60%', textAlign: 'left'}}>
          Los cinco principios de SOLID para el diseño de aplicaciones de software son: <br />
          <ul>
            <li>
              <p>
                <b>S – Single Responsability Principle (SRP):</b> Este principio establece que un componente o clase debe tener una responsabilidad
                única, sencilla y concreta.
              </p>
            </li>
            <li>
              <p>
                <b>O – Open/Closed Principle (OCP):</b> Este principio establece que los componentes del software deben estar abiertos para extender
                a partir de ellos, pero cerrados para evitar que se modifiquen.
              </p>
            </li>
            <li>
              <p>
                <b>L – Liskov Substitution Principle (LSP):</b> Este principio establece que una subclase puede ser sustituida por su superclase.
              </p>
            </li>
            <li>
              <p>
                <b>I – Interface Segretation Principle (ISP):</b> Este principio establece que los clientes no deben ser forzados a depender de
                interfaces que no utilizan.
              </p>
            </li>
            <li>
              <p>
                <b>D – Dependency Inversion Principle (DIP):</b> Este principio establece que los módulos de alto nivel no deben de depender de
              los de bajo nivel.
              </p>
            </li>
          </ul>
        </p>
      </Container>
    )
  }
}

export default SOLID;
