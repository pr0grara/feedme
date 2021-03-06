import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import ArticleIndexContainer from '../components/articles/article_index_container'

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        )
    )} />
  )
  };

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
);

const Home = ({ component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <ArticleIndexContainer {...props} />
    ) : (
      <Redirect to='/login' />
    )
  )} />
);

const mSTP = state => (
  { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
export const HomeRoute = withRouter(connect(mSTP)(Home))