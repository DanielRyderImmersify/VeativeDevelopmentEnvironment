// eslint-disable-next-line
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Test } from "../Veative/Veative"
import { ErrorPage } from "../Error/error";

function App() {
    console.log("React Version: " + React.version);

    return (
        <div>
            <Routes>
                <Route path="/*" element={<Test />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
