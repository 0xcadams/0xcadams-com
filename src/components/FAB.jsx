import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/EmailOutlined';

import ContactDialog from './ContactDialog';

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

class FAB extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    console.log('closing...', this.state);
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Button onClick={this.handleClickOpen} variant="extendedFab" aria-label="Contact" className={classes.button}>
        <ContactDialog handleClose={this.handleClose} handleChange={this.handleChange} {...this.state} />
        <AddIcon className={classes.extendedIcon} />
        Contact
      </Button>
    );
  }
}

FAB.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FAB);
