import T from 'prop-types';
import compose from 'recompose/compose';
import withFormHandlers from '../../../common/HoC/withFormHandlers.js';
import pure from 'recompose/pure.js';
import { RecoverPassword } from './RecoverPassword.js';

export var EnhancedRecoverPassword = compose(
  withFormHandlers(
    {
      password: '',
    },
    {
      handleSubmit: ({
        onSubmit,
        email,
        code,
        formState: { password },
      }) => e => {
        e.preventDefault();
        onSubmit({ email, code, password });
      },
    }
  ),
  pure
)(RecoverPassword);

EnhancedRecoverPassword.displayName = 'enhance(RecoverPassword)';

EnhancedRecoverPassword.propTypes = {
  onSubmit: T.func.isRequired,
  email: T.string,
  code: T.string,
};
