import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  thumb: {
    color: 'rgba(179, 75, 235)',
  },
  rail: {
    color: `rgba(179, 75, 235)`,
  },
  track: {
    color: 'rgba(179, 75, 235)',
  },
});

const SliderProton = ({ value, changePrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay='on'
        min={1000}
        max={5000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default SliderProton;
