import React from "react";
import { Pane, Avatar, TextInputField, Heading, Button } from "evergreen-ui";

var ProfileConfiguration = () => (
  <Pane width={"calc(100vw - 4em)"} height={"calc(100vh - 4em)"}>
    <Pane
      alignItems="center"
      justifyContent="center"
      display={"flex"}
      height={"30%"}
    >
      <Avatar name="Aeroen Ransijn" size={120} />
    </Pane>
    <Pane display={"flex"} flexDirection={"row"} height={"70%"}>
      <Pane
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        width={"50%"}
      >
        <Heading style={{ alignSelf: "center" }} size={700}>
          Información General
        </Heading>
        <TextInputField
          paddingLeft={"2em"}
          paddingRight={"2em"}
          label="Nombre"
          placeholder="Placeholder text"
        />
        <TextInputField
          paddingLeft={"2em"}
          paddingRight={"2em"}
          label="Fecha de nacimiento"
          placeholder="Placeholder text"
        />
        <TextInputField
          paddingLeft={"2em"}
          paddingRight={"2em"}
          label="Genero"
          placeholder="Placeholder text"
        />
        <TextInputField
          paddingLeft={"2em"}
          paddingRight={"2em"}
          label="Numero de Telefono"
          placeholder="Placeholder text"
        />
      </Pane>
      <Pane
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        width={"50%"}
      >
        <Heading style={{ alignSelf: "center" }} size={700}>
          Cambiar Contraseña
        </Heading>
        <TextInputField
          paddingLeft={"2em"}
          paddingRight={"2em"}
          label="Contraseña Actual"
          placeholder="Placeholder text"
        />
        <TextInputField
          paddingLeft={"2em"}
          paddingRight={"2em"}
          label="Nueva Contraseña"
          placeholder="Placeholder text"
        />
        <TextInputField
          paddingLeft={"2em"}
          paddingRight={"2em"}
          label="Repetir Contraseña"
          placeholder="Placeholder text"
        />
        <Pane display={"flex"}>
          <Button
            width={110}
            appearance="primary"
            intent="success"
            iconAfter="tick"
            justifyContent="center"
            marginLeft={"auto"}
            marginRight={"3em"}
          >
            Aceptar
          </Button>
        </Pane>
      </Pane>
    </Pane>
  </Pane>
);

export default ProfileConfiguration;
