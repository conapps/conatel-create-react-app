import "./App.css";
import React from "react";
import { Pane, Spinner } from "evergreen-ui";
import EnhancedHeader from "./Main/Header/EnhancedHeader.js";
import Body from "./Main/Body/Body";
import EnhancedLogin from "./Auth/Login/EnhancedLogin";
import EnhancedSideBar from "./Main/SideBar/EnhancedSideBar";

class App extends React.Component {
  render() {
    const { isAuthenticated, isReady } = this.props;

    if (isAuthenticated === false)
      return (
        <Pane
          width="100vw"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="tint2"
        >
          {isReady === false ? <Spinner /> : <EnhancedLogin />}
        </Pane>
      );
    return (
      <Pane>
        <EnhancedSideBar />
        <Pane marginLeft={"4em"}>
          <EnhancedHeader />
          <Body />
        </Pane>
      </Pane>
    );
  }
}

export default App;
