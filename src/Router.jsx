import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default Router;
