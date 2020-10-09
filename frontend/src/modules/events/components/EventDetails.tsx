import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Card, CardContent, Grid, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SimpleForm, { FormMetadataType } from 'src/components/SimpleForm';
import { EventDetails } from 'src/types/EventDetails';
import { handleApiRequest } from 'src/utils/ui';
import { createEvent } from '../operations';

const useStyles = makeStyles(() => ({
  content: {
    margin: '0 auto',
    textAlign: 'center',
    left: '10%',
    paddingTop: '5%',
    paddingBottom: '5%',
    width: '80%',
    position: 'absolute',
    top: '18%'
  }
}));

type Props = RouteComponentProps;

const EventDetails: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const values: Partial<EventDetails> = {
    name: '',
    date: new Date(),
    address: '',
    descriptions: '',
    file_helper: '',
    file: ''
  };

  const formMetadata: FormMetadataType<EventDetails> = {
    // name: { label: 'Username', required: true, options: null, xs: 12, sm: 12 },
    // password: { label: 'Password', required: true, options: null, xs: 12, sm: 12 }
    name: { label: 'Event Name', required: true, options: null, xs: 12, sm: 12 },
    date: { label: 'Event Name', required: true, options: null, xs: 12, sm: 12 },
    address: { label: 'Event Location', required: true, options: null, xs: 12, sm: 12 },
    bannerImage: { label: 'Image Upload', required: true, options: null, xs: 12, sm: 12 },
    descriptions: { label: 'Event Description', required: true, multiline: true, options: null, xs: 12, sm: 12 }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
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
            <Typography variant='h5'>Sign Up</Typography>
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
