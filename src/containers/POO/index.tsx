import { Component } from 'react';
import Container from '../../components/Container';

class POO extends Component {
  render() {
    return (
      <Container>
        <p style={{ width: '60%' }}>
          <h2>POO</h2>
        </p>
        <p style={{ width: '60%', textAlign: 'left' }}>
          <ul>
            <li>
              <p>
                <b>Clase:</b> Es la descripción/representación de un conjunto de objetos similares, estos constan de variables y métodos. Se pueden
                definir muchos objetos de la misma clase.
              </p>
            </li>
            <li>
              <p>
                <b>Herencia:</b> Es la capacidad de que mediante una clase (primaria) se puedan pasar/extender los atributos y metodos a otra
                clase (subclase).
              </p>
            </li>
            <li>
              <p>
                <b>Interfaces:</b> Una interfaz es un conjunto de métodos abstractos y de constantes cuya funcionalidad es la de determinar el
                funcionamiento de una clase, es decir, funciona como un molde o como una plantilla. Al ser sus métodos abstractos estos no tiene funcionalidad
                alguna, sólo se definen su tipo, argumento y tipo de retorno.
              </p>
            </li>
            <li>
              <p>
                <b>Polimorfismo:</b> Es la capicidad que tienen los objetos de una clase a responder a los eventos dependiendo de los parametros
                utilizados en la invocacion.
              </p>
            </li>
          </ul>
        </p>
      </Container>
    )
  }
}

export default POO;