import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Card, CardContent, Grid, Link, TextField, Typography, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SimpleForm, { FormMetadataType } from 'src/components/SimpleForm';
import { UserData } from 'src/types/user';
import { handleApiRequest } from 'src/utils/ui';
import { createUser } from '../operations';

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

const NewUserPage: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const values: Partial<UserData> = {
    name: '',
    password: '',
    fullname: '',
    date_of_birth: 'DD/MM/YYYY',
    gender: '',
    race: '',
    nationality: '',
    address_streetname: '',
    address_postal_code: '',
    address_unit_number: '',
    spoken_languages: 'English/...',
    written_languages: 'English/...',
    interests: '',
    help: '',
    current_occupation: ''
  };

  const formMetadata: FormMetadataType<UserData> = {
    name: { label: 'Username', required: true, options: null, xs: 12, sm: 12 },
    password: { label: 'Password', required: true, options: null, xs: 12, sm: 12 },
    fullname: { label: 'Full Name (as of NRIC)', required: true, options: null, xs: 12, sm: 12 },
    date_of_birth: { label: 'Date of Birth', required: true, options: null, xs: 12, sm: 12 },
    gender: {
      label: 'Gender',
      required: true,
      options: [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
      ],
      xs: 12,
      sm: 12
    },
    race: { label: 'Race', required: true, options: null, xs: 12, sm: 12},
    nationality: { label: 'Nationality', required: true, options: null, xs: 12, sm: 12 },
    address_streetname: { label: 'Street Name', required: true, options: null, xs: 12, sm: 12 },
    address_postal_code: { label: 'Postal Code', required: true, options: null, xs: 12, sm: 12 },
    address_unit_number: { label: 'Unit number', required: true, options: null, xs: 12, sm: 12 },
    spoken_languages: { label: 'Spoken languages', required: true, options: null, xs: 12, sm: 12 },
    written_languages: { label: 'Written languages', required: true, options: null, xs: 12, sm: 12 },
    interests: {
      label: 'Interests',
      required: true,
      options: [
        { value: 'Education & Training', label: 'Education & Training' },
        { value: 'Music', label: 'Music' },
        { value: 'Photography/Video Recording', label: 'Photography/Video Recording' },
        { value: 'Education & Training', label: 'Education & Training' },
        { value: 'Cooking', label: 'Cooking' },
        { value: 'Teaching', label: 'Teaching' }
      ],
      xs: 12,
      sm: 12
    },
    help: {
      label: 'I would like to help by',
      required: true,
      options: [
        { value: 'Administrative Support', label: 'Administrative Support' },
        { value: 'Organise Events/Activities', label: 'Organise Events/Activities' },
        { value: 'Marcom', label: 'Marcom' },
        { value: 'Community Services', label: 'Community Services' },
        { value: 'Befriending', label: 'Befriending' },
        { value: 'FundRaising Activities', label: 'FundRaising Activities' }
      ],
      xs: 12,
      sm: 12
    },
    current_occupation: {
      label: 'Current Occupation',
      required: true,
      options: [
        { value: 'Student', label: 'Student' },
        { value: 'Employed', label: 'Employed' },
        { value: 'Self-Employed', label: 'Self-employed' },
        { value: 'Unemployed', label: 'Unemployed' },
        { value: 'Others', label: 'Others' }
      ],
      xs: 12,
      sm: 12
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    fullname: Yup.string().required('Full name is required')
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
              onSubmit={(newValues: UserData) => {
                return handleApiRequest(dispatch, dispatch(createUser(newValues))).then(() => {
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

export default withRouter(NewUserPage);
