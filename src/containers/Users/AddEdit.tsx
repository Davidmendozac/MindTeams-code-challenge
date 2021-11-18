import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import UserForm from '../../components/UserForm';

import { IState } from '../../ducks';
import * as usersDuck from '../../ducks/Users';

interface IAddEditProps {
  addEdit: (a: usersDuck.IUser) => void,
  handleStateDialog: (a: boolean) => void,
  open: boolean,
  user?: usersDuck.IUser
}
class AddEdit extends Component<IAddEditProps> {
  public render() {
    const { open, user, handleStateDialog } = this.props;
    return (
      <Dialog open={open} onClose={() => handleStateDialog(false)}>
        <DialogTitle>Add/Edit User</DialogTitle>
        <DialogContent>
          <UserForm onSubmit={this.handleAddEditUser} initialValues={user} />
        </DialogContent>
      </Dialog>
    )
  }

  private handleAddEditUser = (payload: any) => {
    const { addEdit, handleStateDialog } = this.props;
    addEdit(payload);
    handleStateDialog(false);
  }
}

const mapStateToProps = (state: IState) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(usersDuck, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddEdit);
