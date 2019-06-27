import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './component/launches';
import Launch from './component/launch'
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"

});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

        <div className="container">
          <h1>SpaceX Launches</h1>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
