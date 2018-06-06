
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import 'semantic-ui-css/semantic.min.css';


import App from './App';
import store from './redux/store';


export const client = new ApolloClient({
 uri:'http://localhost:5000/graphql' ,
});



render(
 <ApolloProvider client={client}>
   <Provider store={store}>
     <App />
   </Provider>
 </ApolloProvider>
 , document.getElementById('root')
);