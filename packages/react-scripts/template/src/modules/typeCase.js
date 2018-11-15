import snakeCase from 'lodash/fp/snakeCase.js';
import compose from 'lodash/fp/compose.js';

var upperCase = string => string.toUpperCase();

export default compose(
  upperCase,
  snakeCase
);
