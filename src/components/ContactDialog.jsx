/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import styled from 'react-emotion';

const styles = theme => ({
  formGroup: {
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    marginTop: theme.spacing.unit,
  },
  firstNameField: {
    marginRight: theme.spacing.unit,
  },
});

const NameHero = styled.div`
  ${tw('flex flex-col lg:flex-row')};
`;

const SimpleDialog = props => {
  const {
    open,
    handleClose,
    handleOnSubmit,
    fullScreen,
    handleChange,
    email = '',
    firstName = '',
    lastName = '',
    description = '',
    checkedWebsite = false,
    checkedMobileApp = false,
    classes,
  } = props;

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="contact-dialog-title">
      <DialogTitle id="contact-dialog-title">Tell us about your project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          In order for us to provide you with the best possible service, please provide the following information and we
          will respond to you promptly!
        </DialogContentText>
        <form noValidate onSubmit={e => e.preventDefault()}>
          <NameHero>
            <TextField
              autoFocus
              margin="normal"
              id="outlined-first-name-input"
              label="First name"
              value={firstName}
              name="firstName"
              fullWidth
              onChange={handleChange('firstName')}
              variant="outlined"
              className={classes.firstNameField}
            />
            <TextField
              margin="normal"
              id="outlined-last-name-input"
              label="Last name"
              value={lastName}
              name="lastName"
              fullWidth
              onChange={handleChange('lastName')}
              variant="outlined"
              className={classes.lastNameField}
            />
          </NameHero>
          <TextField
            margin="normal"
            id="outlined-email-input"
            label="Email"
            value={email}
            type="email"
            name="email"
            autoComplete="email"
            fullWidth
            onChange={handleChange('email')}
            variant="outlined"
          />
          <TextField
            margin="normal"
            id="outlined-description-input"
            label="Brief description of project"
            value={description}
            type="description"
            name="description"
            fullWidth
            onChange={handleChange('description')}
            variant="outlined"
          />
          <FormGroup row={!fullScreen} className={classes.formGroup}>
            <FormLabel component="legend">Components needed</FormLabel>
            <FormControlLabel
              className={classes.formControl}
              control={
                <Checkbox checked={checkedWebsite} onChange={handleChange('checkedWebsite')} value="checkedWebsite" />
              }
              label="Website"
            />
            <FormControlLabel
              className={classes.formControl}
              control={
                <Checkbox
                  checked={checkedMobileApp}
                  onChange={handleChange('checkedMobileApp')}
                  value="checkedMobileApp"
                />
              }
              label="Mobile App"
            />
          </FormGroup>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleOnSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  checkedWebsite: PropTypes.bool.isRequired,
  checkedMobileApp: PropTypes.bool.isRequired,
};

export default withMobileDialog()(withStyles(styles)(SimpleDialog));
