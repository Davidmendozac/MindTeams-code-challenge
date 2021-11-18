import { Component } from 'react';
import Container from '../../components/Container';

class CodeReview extends Component {
  render() {
    return (
      <Container>
        <p style={{ width: '60%'}}>
          <h2>Code Review</h2> <br />
          Es una técnica que se realiza en el desarrollo antes de aceptar los pull request para asegurarse de que el código
          sea lo mas puro posible, que lleve todas las buenas practicas recomendadas dependiendo el lenguaje y acordadas por el
          equipo (TL). <br />
          Normalmente es realizada por el TL del equipo y algún (os) miembros mas para que sea mas eficiente y ademas todos vayan
          viendo el proceso.
        </p>
      </Container>
    )
  }
}

export default CodeReview;
