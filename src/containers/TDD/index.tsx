import { Component } from 'react';
import Container from '../../components/Container';

class TDD extends Component {
  render() {
    return (
      <Container>
        <p style={{ width: '60%'}}>
          <h2>Test Driven Development (TDD)</h2>
          Es una técnica para el desarrollo de software con la cual se dirige el desarrollo de un producto a través de la escritura de pruebas,
          generalmente unitarias.
        </p>
        <p style={{ width: '60%', textAlign: 'left' }}>
          <h4>Las tres leyes del TDD</h4>
          <ul>
            <li><p>No escribirás código de producción sin antes escribir un test que falle.</p></li>
            <li><p>No escribirás más de un test unitario suficiente para fallar (y no compilar es fallar).</p></li>
            <li><p>No escribirás más código del necesario para hacer pasar el test.</p></li>
          </ul>
          <h4>El ciclo Red-Green-Refactor</h4>
          El ciclo Red-Green-Refactor, también conocido como algoritmo del TDD, se basa en:
          <ul>
            <li>
              <p>
                <b>Red:</b> Escribir un test que falle, es decir, tenemos que realizar el test antes de escribir la implementación. Normalmente se
                suelen utilizar test unitarios, aunque en algunos contextos puede tener sentido hacer TDD con test de integración.
              </p>
            </li>
            <li>
              <p>
                <b>Green:</b> Una vez creado el test que falla, implementaremos el mínimo código necesario para que el test pase.
              </p>
            </li>
            <li>
              <p>
                <b>Refactor:</b> Por último, tras conseguir que nuestro código pase el test, debemos examinarlo para ver si hay alguna mejora que podamos
                realizar.
              </p>
            </li>
          </ul>
        </p>
      </Container>
    )
  }
}

export default TDD;
