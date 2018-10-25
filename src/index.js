import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Simple Form</h2>
            <SimpleForm onSubmit = {showResults} />
            <Values form = "simple" />
        </div>
    </Provider>,
    document.getElementById("root")
);