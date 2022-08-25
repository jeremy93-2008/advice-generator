import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css"

const root = document.getElementById("app") || document.body

const app = createRoot(root)

app.render(<App />)
