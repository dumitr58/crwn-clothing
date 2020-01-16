import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.util';

// demo for linking and data
// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// )

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  // aware of the sign in change

  unsubscribeFromAuth = null
  // our application listening to authentication
  // state changes on our firebase backend
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }
  // this will close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
      // This was before routing
      // <div>
      //   <HomePage></HomePage>;
      // </div>
    );
  }
  
}

export default App;
