import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    color: 'blue',
    flexGrow: 5,
  },
};

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

function NavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="blue">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            Yhatzee!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);