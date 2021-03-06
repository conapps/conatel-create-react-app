import React from 'react';
import { Pane, TextInputField, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';

var Login = ({ handleSubmit, handleChange, loading }) => (
  <Pane
    background="tint2"
    width={'26em'}
    display={'flex'}
    flexDirection={'column'}
    elevation={2}
  >
    <h3>Iniciar Sesión</h3>
    <TextInputField
      label="Email"
      type="text"
      name="email"
      placeholder="Inserte su email.."
      margin={'1em'}
      onChange={handleChange('email')}
    />
    <TextInputField
      label="Contraseña"
      type="password"
      name="password"
      placeholder="Inserte su contraseña..."
      margin={'1em'}
      onChange={handleChange('password')}
    />
    <Link textaling={'center'} to="/auth/forgot-password">
      ¿Olvido su contraseña?
    </Link>
    <Button
      onClick={handleSubmit}
      margin={'1.3em'}
      appearance="primary"
      isLoading={loading}
      display="inline-flex"
      paddingLeft={'13em'}
    >
      Aceptar
    </Button>
  </Pane>
);

export default Login;
