import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
} from '@mui/material';
import Add from '@mui/icons-material/Add';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

import Container from '../../components/Container';
import TitleDescription from '../../components/TitleDescription';
import AddEdit from './AddEdit';

import { IState } from '../../ducks';
import * as usersDuck from '../../ducks/Users';

interface IUsersProps {
  deleteU: (a: string) => void,
  data: usersDuck.IUser[],
};
class Users extends Component<IUsersProps> {
  public state = {
    openDialog: false,
    editedUser: undefined,
  }

  public render () {
    const { data, deleteU: deleteUser } = this.props;
    const titleText = 'Users';
    return (
      <Container>
        <TitleDescription text={titleText} />
        <TableContainer component={Paper} sx={{ maxWidth: '60%' }} >
          <IconButton color="success" aria-label="add" style={{ float: 'left'}} onClick={() => this.handleOpenDialog(true)}>
            <Add />
          </IconButton>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="80"></TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell align="left">Apellidos</TableCell>
                <TableCell align="right">Edad</TableCell>
                <TableCell align="left">Nombre de Usuario</TableCell>
                <TableCell align="left">Tipo de Usuario</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.nombre}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <IconButton color="primary" aria-label="edit" style={{ float: 'left'}} onClick={() => this.onEditClick(row)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" aria-label="delete" style={{ float: 'left'}} onClick={() => deleteUser(row?.id || '')}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                  <TableCell align="left">{row.nombre}</TableCell>
                  <TableCell align="left">{row.apellidos}</TableCell>
                  <TableCell align="right">{row.edad}</TableCell>
                  <TableCell align="left">{row.nombreUsuario}</TableCell>
                  <TableCell align="left">{row.tipoUsuario}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddEdit open={this.state.openDialog} handleStateDialog={this.handleOpenDialog} user={this.state.editedUser} />
      </Container>
    )
  }

  private onEditClick = (user: usersDuck.IUser) => {
    this.setState({ ...this.state, editedUser: user, openDialog: true });
  }

  private handleOpenDialog = (newOpenDialog: boolean) => {
    const user = (!newOpenDialog) ? { editedUser: undefined } : {};
    this.setState({ ...this.state, ...user, openDialog: newOpenDialog });
  }
}

const mapStateToProps = (state: IState) => {
  const { Users: data } = state;

  return {
    data,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(usersDuck, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
