import { Component, CSSProperties } from 'react';
import Container from '../../components/Container';

const style = {
  table: {
    maxWidth: '100%',
    backgroundColor: '#ddd',
    borderCollapse: 'collapse'
  } as CSSProperties,
  table_th_td: {
    textAlign:'center',
    verticalAlign: 'middle',
    border: '1px solid black'
  } as CSSProperties,
  table_tb_td: {
    textAlign:'justify',
    verticalAlign: 'top',
    border: '1px solid black'
  } as CSSProperties
}

class Modificadores extends Component {
  render() {
    return (
      <Container>
        <p style={{ width: '60%'}}>
          <h2>Modificadores</h2> <br />
          Los niveles de acceso permiten definir cómo se podrá hacer la instanciación de los tipos y la llamada de los métodos.
          El nivel de acceso se define mediante las palabras reservadas situadas antes de la declaración de la clase o del miembro.
          La tabla siguiente presenta los modificadores de acceso disponibles:
        </p>
        <p>
          <table style={style.table}>
            <thead>
              <tr>
                <td style={style.table_th_td}>
                  <p><h3>Modificador de&nbsp;acceso</h3></p>
                </td>
                <td style={style.table_th_td}>
                  <p><h3>Descripción</h3></p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={style.table_tb_td}>
                  <p><b>public</b></p>
                </td>
                <td style={style.table_tb_td}>
                  <p>Autoriza el acceso para todos los tipos del ensamblado y fuera del ensamblado.</p>
                </td>
              </tr>
              <tr>
                <td style={style.table_tb_td}>
                  <p><b>private</b></p>
                </td>
                <td style={style.table_tb_td}>
                  <p>Autoriza el acceso solo para los otros miembros del tipo.</p>
                </td>
              </tr>
              <tr>
                <td style={style.table_tb_td}>
                  <p><b>internal</b></p>
                </td>
                <td style={style.table_tb_td}>
                  <p>Autoriza el acceso para todos los tipos del ensamblado únicamente.</p>
                </td>
              </tr>
              <tr>
                <td style={style.table_tb_td}>
                  <p><b>protected</b></p>
                </td>
                <td style={style.table_tb_td}>
                  <p>Autoriza el acceso únicamente para los otros miembros del tipo o para los tipos heredados de éste, incluso fuera del ensamblado.</p>
                </td>
              </tr>
              <tr>
                <td style={style.table_tb_td}>
                  <p><b>protected internal</b></p>
                </td>
                <td style={style.table_tb_td}>
                  <p>Autoriza el acceso únicamente para los otros miembros del tipo o solo para los tipos que heredan de éste, en el ensamblado.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
      </Container>
    )
  }
}

export default Modificadores;
