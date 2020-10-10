import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Card, CardContent, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SimpleForm, { FormMetadataType } from 'src/components/SimpleForm';
import { EventDetails } from 'src/types/EventDetails';
import { handleApiRequest } from 'src/utils/ui';
import { parse, isDate } from 'date-fns';
import api from 'src/api';
import EventCard from './EventCard';

function parseDateString(originalValue: string) {
  const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, 'yyyy-MM-dd', new Date());
  return parsedDate;
}

const useStyles = makeStyles(() => ({
  content: {
    // margin: '0 auto',
    textAlign: 'center',
    left: '10%',
    paddingTop: '5%',
    paddingBottom: '5%',
    width: '80%',
    top: '18%'
  }
}));

type Props = RouteComponentProps;

const EventsPage: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [events, setEvents] = React.useState<EventDetails[]>([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const apiResponse = await api.events.getEvents();
      setEvents(apiResponse.data);
    };
    fetchEvents();
  }, []);

  return (
    <Grid container direction='column' justify='center' spacing={3}>
      {events.map((v) => (
        <Grid item>
          <EventCard {...v} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withRouter(EventsPage);
