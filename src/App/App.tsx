import React from "react";

import { ThemeProvider } from "./AppContext";
import {
  Toggle,
  Content,
  SubContent,
  Buttons,
  Footer,
  Particles,
} from "../components";

export const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Toggle />
        <Content />
        <Buttons />
        <SubContent />
        <Footer />
        <Particles />
      </div>
    </ThemeProvider>
  );
};
