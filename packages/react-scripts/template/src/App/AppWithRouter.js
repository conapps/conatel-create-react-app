import { withRouter } from 'react-router-dom';
import getDisplayName from 'recompose/getDisplayName.js';
import { App } from './App';

export var AppWithRouter = withRouter(App);
AppWithRouter.displayName = `withRouter(${getDisplayName(App)})`;
