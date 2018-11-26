import React from 'react';
import { Pane, TextInputField, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { Alert } from '../../../common/Alert';

export var ForgotPassword = ({
  error,
  message,
  awkError,
  awkMessage,
  loading,
  handleSubmit,
  handleChange
}) => (
  <Pane
    background="tint2"
    width={'26em'}
    display={'flex'}
    flexDirection={'column'}
    elevation={2}
  >
    <h3>¿Olvido su Contraseña?</h3>
    <p>
      Ingrese su cuenta de correo para comenzar el proceso de recuperar su
      contraseña.
    </p>
    {error && <Alert onClick={awkError}>{error}</Alert>}
    {message && (
      <Alert type="success" onClick={awkMessage}>
        {message}
      </Alert>
    )}
    <TextInputField
      label="Email"
      type="text"
      name="email"
      placeholder="Inserte su email.."
      margin={'1em'}
      onChange={handleChange('email')}
    />
    <Button
      onClick={handleSubmit}
      margin={'1.3em'}
      appearance="primary"
      isLoading={loading}
      justifyContent="center"
    >
      Aceptar
    </Button>
    <Link to="/auth/login">Volver al inicio</Link>
    <br />
  </Pane>
);
