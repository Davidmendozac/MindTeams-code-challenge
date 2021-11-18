import { Component } from 'react';
import Container from '../../components/Container';

class PatronesDeArquitectura extends Component {
  render() {
    return (
      <Container>
        <p style={{ width: '60%' }}>
          <h2>Patrones De Arquitectura</h2>
          Estos ofrecen soluciones a problemas de arquitectura de software en ingeniería de software. Dan una descripción de los elementos y
          el tipo de relación que tienen junto con un conjunto de restricciones sobre cómo pueden ser usados. Un patrón arquitectónico expresa
          un esquema de organización estructural esencial para un sistema de software, que consta de subsistemas, sus responsabilidades e
          interrelaciones. En comparación con los patrones de diseño, los patrones arquitectónicos tienen un nivel de abstracción mayor.
        </p>
        <p style={{ width: '60%', textAlign: 'left' }}>
          <ul>
            <li>
              <p>
                <b>Capas:</b> La arquitectura en capas consta en dividir la aplicación en capas, con la intención de que cada capa tenga un rol muy
                definido, como podría ser, una capa de presentación (UI), una capa de reglas de negocio (servicios) y una capa de acceso a datos (DAO),
                sin embargo, este estilo arquitectónico no define cuantas capas debe de tener la aplicación, sino más bien, se centra en la separación
                de la aplicación en capas (Aplica el principio Separación de preocupaciones (SoC)).
              </p>
            </li>
            <li>
              <p>
                <b>Arquitectura Cliente servidor:</b> Esta arquitectura consiste básicamente en un cliente que realiza peticiones a otro programa
                (el servidor) que le da respuesta. Aunque esta idea se puede aplicar a programas que se ejecutan sobre una sola computadora es más
                ventajosa en un sistema operativo multiusuario distribuido a través de una red de computadoras.
              </p>
            </li>
            <li>
              <p>
                <b>Modelo Vista Controlador (MVC):</b> es un estilo de arquitectura de software que separa los datos de una aplicación, la interfaz
                de usuario, y la lógica de control en tres componentes distintos.
                <ul>
                  <li>
                    <b>Modelo:</b> Es el que contiene una representación de los datos que maneja el sistema, su lógica de negocio, y sus mecanismos de
                    persistencia.
                  </li>
                  <li>
                    <b>Vista:</b> Que compone la información que se envía al cliente y los mecanismos interacción con éste.
                  </li>
                  <li>
                    <b>Controlador:</b> Es el que actúa como intermediario entre el Modelo y la Vista, gestionando el flujo de información entre ellos
                    y las transformaciones para adaptar los datos a las necesidades de cada uno.
                  </li>
                </ul>
              </p>
            </li>
          </ul>
        </p>
      </Container>
    )
  }
}

export default PatronesDeArquitectura;
