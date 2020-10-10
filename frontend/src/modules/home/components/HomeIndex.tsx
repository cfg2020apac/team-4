import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Card, Grid, TextField, makeStyles } from '@material-ui/core';

import { BACKEND_URL } from 'src/constants';
import * as session from 'src/modules/session';
import Game from './Game';

type Props = RouteComponentProps;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px 0px 0px 0px`
  },
  buttons: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

const HomeIndex: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const user = useSelector(session.selectors.getCurrentUser);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Game />
    </Card>
  );
};

export default withRouter(HomeIndex);
