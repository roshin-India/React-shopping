import React,{useEffect , lazy ,Suspense} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Header from "./components/header/header.component";
import { selectCurrentUser } from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.actions';
import GlobalStyle from './global.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
/**
 * Lazy loaded route
 */
const HomePage= lazy(()=>import('./pages/home-pages/homepage.component'));
const ShopPage= lazy(()=>import('./pages/shop/shop.component'));
const SignInAndSignUp= lazy(()=>import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage= lazy(()=>import('./pages/checkout/checkout.component'));
/**
 * When use useEffect need functional component.
 */
const App = ({checkUserSession,currentUser}) => {
    useEffect(()=>{
      /**
       * This is same as  componentDidMount() in class
       */
      checkUserSession()
    },[checkUserSession])                     
    return (
      <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
          <Route  exact path="/" component={HomePage} />
          <Route   path="/shop" component={ShopPage} />
          <Route   exact path="/checkout" component={CheckoutPage} />
          <Route  exact path="/signin" render={
            ()=>currentUser ? 
            (<Redirect to='/' />) : 
            (<SignInAndSignUp />)
            } />
        </Suspense>
      </ErrorBoundary>
      </Switch>
      </div>
    );
}
const mapStateToProps = createStructuredSelector({
  currentUser :selectCurrentUser,
})
const mapDispatchToProps = dispatch =>({
  checkUserSession:()=>dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
