import React from 'react';
import { Pane, TextInputField, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { Alert } from '../../../common/Alert';

var RecoverPassword = ({
  error,
  message,
  awkError,
  awkMessage,
  loading,
  handleChange,
  handleSubmit,
}) => (
  <Pane
    background="tint2"
    width={'26em'}
    display={'flex'}
    flexDirection={'column'}
    elevation={2}
  >
    <h3>Recuperar Contraseña</h3>
    <p>Ingrese su nueva contraseña.</p>
    <TextInputField
      label="Nueva Contraseña"
      type="password"
      name="password"
      onChange={handleChange('password')}
      placeholder="Inserte su email.."
      margin={'1em'}
    />

    <Button
      onClick={handleSubmit}
      margin={'1.3em'}
      appearance="primary"
      isLoading={loading}
      paddingLeft={'13em'}
    >
      Aceptar
    </Button>

    <Link to="/auth/login">Volver al inicio</Link>
    <br />
  </Pane>
);

export default RecoverPassword;
