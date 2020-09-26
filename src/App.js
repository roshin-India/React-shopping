import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import signInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      console.log("userAuth",userAuth)
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            },()=>{
              console.log("sss",this.state)
            })
            
          })
      }else{
        this.setState({currentUser:userAuth})
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    console.log("dff",this.state)
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch >
        <Route  exact path="/" component={HomePage} />
        <Route   path="/shop" component={ShopPage} />
        <Route   path="/signin" component={signInAndSignUp} />
      </Switch >
      </div>
    );
  }
}

export default App;
