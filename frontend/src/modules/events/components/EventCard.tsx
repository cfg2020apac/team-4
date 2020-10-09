import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EventDetails } from 'src/types/EventDetails';

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  }
});

export default function EventCard(props: EventDetails) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component='img' alt={props.name} height='140' image={props.bannerImage} title={props.name} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.name}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.address}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.date}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.descriptions}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
}