import { withRouter } from 'react-router-dom';
import getDisplayName from 'recompose/getDisplayName.js';
import { EnhancedAppContainer } from './EnhancedAppContainer';

export var EnhancedAppContainerWithRouter = withRouter(EnhancedAppContainer);
EnhancedAppContainerWithRouter.displayName = `withRouter(${getDisplayName(
  EnhancedAppContainer
)})`;
