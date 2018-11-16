import IDENTITY from 'lodash/identity.js';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withSetState from '../../common/HoC/withSetState.js';

var handleSubmit = ({ onSubmit, formState }) => e => {
  e.preventDefault();
  onSubmit({ ...formState });
};

var handleChange = ({ setFormState }) => (key, transform = IDENTITY) => e =>
  setFormState(key, transform(e.target.value));

var withFormHandlers = (initialFormState, handlers = {}) => {
  var initialState =
    typeof initialFormState === 'function'
      ? props => ({
          formState: initialFormState(props),
        })
      : {
          formState: initialFormState,
        };

  return compose(
    withSetState(initialState),
    withHandlers({
      handleChange: handlers.handleChange || handleChange,
      handleSubmit: handlers.handleSubmit || handleSubmit,
    })
  );
};

export default withFormHandlers;
