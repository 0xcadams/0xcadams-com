import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/EmailOutlined';

import ContactSnackbar from './ContactSnackbar';
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

const apiUrl = 'https://cadams.io/api/v1/signup';

class FAB extends React.Component {
  state = {
    open: false,
    snackbarOpen: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: name.includes('checked') ? event.target.checked : event.target.value,
    });
  };

  handleOnSubmit = async () => {
    this.handleClose();

    const response = await fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });

    if (response.ok) {
      this.setState({ snackbarOpen: true, snackbarMessage: 'Message sent successfully!' });
    } else {
      this.setState({ snackbarOpen: true, snackbarMessage: 'Message failed to send - please try again.' });
    }
  };

  handleSnackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { snackbarOpen, snackbarMessage } = this.state;

    return (
      <React.Fragment>
        <ContactSnackbar message={snackbarMessage} open={snackbarOpen} handleClose={this.handleSnackbarClose} />
        <ContactDialog
          handleOnSubmit={this.handleOnSubmit}
          handleClose={this.handleClose}
          handleChange={this.handleChange}
          {...this.state}
        />
        <Button onClick={this.handleClickOpen} variant="extendedFab" aria-label="Contact" className={classes.button}>
          <AddIcon className={classes.extendedIcon} />
          Contact
        </Button>
      </React.Fragment>
    );
  }
}

FAB.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FAB);
