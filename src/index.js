import React from "react";
import ReactDOM from "react-dom/client";
//importing a default export, we can rename it from App->myApp
import App from "./App";

// importing a non-default object/export
//named exports cannot be renamed
import { message } from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
<h2>{message}</h2>;

root.render(<App />);
