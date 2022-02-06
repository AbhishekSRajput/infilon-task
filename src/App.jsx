import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
//custom components
import HomePage from "./components/HomePage";
import EditUser from "./components/EditUser";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/edit-user/:id" exact={true} component={EditUser} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}
