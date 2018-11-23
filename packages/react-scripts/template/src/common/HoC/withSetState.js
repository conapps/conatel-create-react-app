import withStateHandlers from 'recompose/withStateHandlers';

var withSetState = state => {
  var setState = typeof state === 'function' ? state : () => state;

  return withStateHandlers(setState, {
    setFormState: state => (key, value) => ({
      formState: { ...state.formState, [key]: value }
    })
  });
};

export default withSetState;
