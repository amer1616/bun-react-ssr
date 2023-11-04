/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from "react";

// cleint side rendering with hydrateRoot

import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";

hydrateRoot(document, <App />);
