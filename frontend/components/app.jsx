import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './home/home_container'
import NavBarContainer from './navbar/navbar_container' 
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/route_util'
import ArticleContainer from './articles/article_container'
import ArticleIndexContainer from './articles/article_index_container'
import SplashContainer from './splash/splash_container'
import LeftNavContainer from './leftnav/left_nav_container'
import LoadingContainer from './loading/loading_container'

//Header component was renamed from GreetingContainer 
const App = () => {
  // debugger
  return (
  <>
    <NavBarContainer />
    <div className="side-splash"> 
        <LeftNavContainer />
        <SplashContainer />
        {/* <LoadingContainer /> */}
        <HomeRoute exact path='/home' />
        {/* <ProtectedRoute exact path='/articles' component={ArticleIndexContainer} /> */}
        {/* <ProtectedRoute exact path="/article" component={ArticleContainer} /> */}
    </div>
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <AuthRoute exact path='/login' component={LoginFormContainer} />
  </>
  )
}

export default App;