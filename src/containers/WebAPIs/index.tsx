import { Component } from 'react';
import Container from '../../components/Container';
import TitleDescription from '../../components/TitleDescription';

class WebAPIs extends Component {
  render() {
    const titleText = 'Web APIs';
    return (
      <Container>
        <TitleDescription text={titleText} >
          Las APIs son un conjunto de rutinas que provee acceso a funciones de un determinado software. En la web, las API's son
          publicadas por sitios para brindar la posibilidad de realizar alguna acción o acceder a alguna característica o contenido que el sitio
          provee.
        </TitleDescription>
        <p style={{ width: '60%', textAlign: 'left' }}>
          <h4>Herramienta utilizadas para probar Web APIs</h4>
          <ul>
            <li><p>Postman</p></li>
            <li><p>Newnam</p></li>
            <li><p>Apache Jmeter</p></li>
            <li><p>SoapUI</p></li>
            <li><p>Rest Assured</p></li>
            <li><p>Restlet</p></li>
            <li><p>RoboHydra</p></li>
            <li><p>Gatling</p></li>
          </ul>
        </p>
      </Container>
    )
  }
}

export default WebAPIs;
