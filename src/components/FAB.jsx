import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: 100,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const FAB = props => {
  const { classes } = props;
  return (
    <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
      <AddIcon className={classes.extendedIcon} />
      Extended
    </Button>
  );
};

FAB.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FAB);
