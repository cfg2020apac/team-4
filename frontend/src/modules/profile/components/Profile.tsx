import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Box, Card, Grid, TextField, makeStyles, InputLabel, Button } from '@material-ui/core';

import { BACKEND_URL } from 'src/constants';
import * as session from 'src/modules/session';

import { Drawer, useMediaQuery, useTheme } from '@material-ui/core';

type Props = RouteComponentProps;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `40px 40px 40px 40px`,
    fontFamily: 'space mono'
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

const Profile: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const user = useSelector(session.selectors.getCurrentUser);
  const classes = useStyles();

  const userName = 'John Doe';
  const location = 'Singapore';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(!isMobile);
  const shiftTopbar = isDrawerOpen && !isMobile;
  const shiftContent = isDrawerOpen && !isMobile;

  return (
    <>
      <Card className={classes.root}>
        <img
          src={require('../../../assets/img/pet_avatar.png')}
          style={{
            borderRadius: '50%',
            height: '150px',
            width: '170px'
          }}
        />
        <br />
        <div>
          <b>JPMorggy</b>
        </div>
        <br />
        <div>Points: 2300</div>
        <br />
        <div>Current Ranking: 1</div>
        <br />
        <div>Location: Beauty World</div>
        <Link to='/shop'>
          <Button variant='contained' color='primary'>
            Pet Shop
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default withRouter(Profile);
