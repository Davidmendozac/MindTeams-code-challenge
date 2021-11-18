import { Component } from 'react';
import Container from '../../components/Container';

class PatronesDeDisenho extends Component {
  render() {
    return (
      <Container>
        <p style={{ width: '60%' }}>
          <h2>Patrones De Diseño</h2>
          Los patrones de diseño (design patterns) son soluciones habituales a problemas comunes en el diseño de software.
        </p>
        <p style={{ width: '60%', textAlign: 'left' }}>
          <ul>
            <li>
              <p>
                <b>Patrones creacionales:</b> Estos patrones proporcionan mecanismos de creación de objetos que incrementan la flexibilidad y la
                reutilización del código existente.
                <ul>
                  <li>Factory Method</li>
                  <li>Abstract Factory</li>
                  <li>Builder</li>
                  <li>Prototype</li>
                  <li>Singleton</li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                <b>Patrones estructurales:</b> Estos patrones explican cómo ensamblar objetos y clases en estructuras más grandes, mientras se
                mantiene la flexibilidad y eficiencia de la estructura.
                <ul>
                  <li>Adapter</li>
                  <li>Bridge</li>
                  <li>Composite</li>
                  <li>Decorator</li>
                  <li>Facade</li>
                  <li>Flyweight</li>
                  <li>Proxy</li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                <b>Patrones de comportamiento:</b> Estos patrones tratan con algoritmos y la asignación de responsabilidades entre objetos.
                <ul>
                  <li>Chain of Responsability</li>
                  <li>Command</li>
                  <li>Iterator</li>
                  <li>Mediator</li>
                  <li>Momento</li>
                  <li>Observer</li>
                  <li>State</li>
                  <li>Strategy</li>
                  <li>Template Method</li>
                  <li>Visitor</li>
                </ul>
              </p>
            </li>
          </ul>
        </p>
      </Container>
    )
  }
}

export default PatronesDeDisenho;
