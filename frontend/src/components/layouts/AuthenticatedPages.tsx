import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import HomeIndex from 'src/modules/home/components/HomeIndex';
import * as session from 'src/modules/session';
import UpdateUser from 'src/modules/session/components/UpdateUserPage';
import Event from 'src/modules/events/components/EventDetails';
import EventPage from 'src/modules/events/components/EventsPage';
import AppMainLayout from './AppMainLayout';
import ErrorBoundary from './ErrorBoundary';
import Profile from 'src/modules/profile/components/Profile';
import Leaderboard from 'src/modules/profile/components/Leaderboard';
import Shop from 'src/modules/game/components/Shop';

type Props = RouteComponentProps;

const AuthenticatedPages: React.FC<Props> = (props) => {
  const loggedIn = useSelector(session.selectors.isLoggedIn);
  if (!loggedIn) {
    return <Redirect to={{ pathname: '/login', state: { to: props.location } }} />;
  }

  const homeIndexRoute = <Route exact path='/' component={HomeIndex} />;
  const updateUserRoute = <Route exact path='/user' component={UpdateUser} />;
  const viewEventsRoute = <Route exact path='/events' component={EventPage} />;
  const createEventRoute = <Route exact path='/events/new' component={Event} />;
  const profileRoute = <Route exact path='/profile' component={Profile} />;
  const leaderboardRoute = <Route exact path='/leaderboard' component={Leaderboard} />;
  const createShopRoute = <Route exact path='/shop' component={Shop} />;
  const catchAllRoute = <Route path='/' render={() => <div>404 Page Not Found</div>} />;

  return (
    <AppMainLayout>
      <ErrorBoundary style={{}}>
        <Switch>
          {homeIndexRoute}
          {updateUserRoute}
          {viewEventsRoute}
          {createEventRoute}
          {profileRoute}
          {leaderboardRoute}
          {createShopRoute}
          {catchAllRoute}
        </Switch>
      </ErrorBoundary>
    </AppMainLayout>
  );
};

export default withRouter(AuthenticatedPages);
