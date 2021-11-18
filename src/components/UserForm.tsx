import { Component } from 'react';
import { reduxForm, InjectedFormProps, Form, Field } from 'redux-form';
import Input from './Input';
import Button from './Button';

class UserForm extends Component<InjectedFormProps> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Field label="Nombre" placeholder="Nombre" name="nombre" type="text" component={Input} />
        <Field label="Apellidos" placeholder="Apellidos" name="apellidos" type="text" component={Input} />
        <Field label="Edad" placeholder="Edad" name="edad" type="number" component={Input} />
        <Field label="Nombre de Usuario" placeholder="Nombre de Usuario" name="nombreUsuario" type="text" component={Input} />
        <Field label="Tipo de Usuario" placeholder="Tipo de Usuario" name="tipoUsuario" type="text" component={Input} />
        <Button block>Enviar</Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'user',
})(UserForm);