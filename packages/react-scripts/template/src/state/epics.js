import { combineEpics } from "redux-observable";

import ui from "./epics/ui";

export var rootEpic = combineEpics(ui);
