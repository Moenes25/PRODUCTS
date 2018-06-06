import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
// import ProductList from './product/composants/productlist';
import productContainer from './product/container/productcontainer';
import { Sidebar, Segment, } from 'semantic-ui-react'


class App extends Component {
   
    render() {
        return (
            <div>
                 <Sidebar.Pusher>
           <Segment basic>
             <Router >
               <Switch>
                 <Route exact path="/" component={Home} />
                
                 <Route path="/products" component={productContainer} />  
                </Switch>  
             </Router>
             </Segment>
         </Sidebar.Pusher>
            </div>
        )
    }
}

export default App;

