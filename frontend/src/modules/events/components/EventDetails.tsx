import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Card, CardContent, Grid, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SimpleForm, { FormMetadataType } from 'src/components/SimpleFormWithUpload';
import { EventDetails } from 'src/types/EventDetails';
import { handleApiRequest } from 'src/utils/ui';
import { createEvent } from '../operations';
import { parse, isDate } from 'date-fns';

function parseDateString(originalValue: string) {
  const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, 'yyyy-MM-dd', new Date());
  return parsedDate;
}

const useStyles = makeStyles(() => ({
  content: {
    margin: '0 auto',
    textAlign: 'center',
    left: '10%',
    paddingTop: '5%',
    paddingBottom: '5%',
    top: '18%'
  }
}));

type Props = RouteComponentProps;

const EventDetails: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const values: Partial<EventDetails> = {
    name: '',
    date: '',
    location: '',
    descriptions: '',
    file_helper: '',
    file: ''
  };

  const formMetadata: FormMetadataType<EventDetails> = {
    name: { label: 'Event Name', required: true, options: null, xs: 12, sm: 12 },
    date: { label: 'Event date (YYYY-MM-DD)', required: true, options: null, xs: 12, sm: 12 },
    location: { label: 'Event Location', required: true, options: null, xs: 12, sm: 12 },
    descriptions: { label: 'Event Description', required: true, multiline: true, options: null, xs: 12, sm: 12 }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Event Name is required'),
    location: Yup.string(),
    date: Yup.date()
      .transform(parseDateString)
      .max(new Date()),
    file_helper: Yup.string().required()
  });

  return (
    <Card className={classes.content}>
      <CardContent>
        <Grid container direction='column' justify='center' spacing={3}>
          <Grid item>
            <Typography variant='h4' color='inherit' style={{ height: 40 }}>
              Blossom World Society
            </Typography>
            <Typography variant='h5'>Create Event</Typography>
          </Grid>
          <Grid item xs>
            <SimpleForm
              initialValues={values}
              formMetadata={formMetadata}
              validationSchema={validationSchema}
              onCancel={() => history.push('/users')}
              onSubmit={(newValues: EventDetails) => {
                return handleApiRequest(dispatch, dispatch(createEvent(newValues))).then(() => {
                  history.push('/');
                  return false;
                });
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withRouter(EventDetails);
