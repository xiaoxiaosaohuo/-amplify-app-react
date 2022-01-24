import logo from "./logo.svg";
import "./App.css";
import { CardCCollection } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

// import { Authenticator } from "@aws-amplify/ui-react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardCCollection />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
